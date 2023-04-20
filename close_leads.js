const rp = require('request-promise');
require('dotenv').config();

console.log(process.env.API_URL);

let leads = [];

for (let i = 0; i < leads.length; i++) {
	try {
	    const body = {
			"ObjectStage": {
				"comment": "Internal Leads",
				"stage_id": 9
			},
			"closing_reason": "Not Contactable"
		};
	    var options = {
	      method: "PUT",
	      uri: `${process.env.API_URL}/leads/${leads[i]}`,
	      body: body,
	      json: true, // Automatically parses the JSON string in the response
	       headers: {
	        "Content-Type": "application/json",
	        Accept: "application/json",
	        Authorization: 'internal 1_1_1'
	      },	
	    };
	    let resp = rp(options).then((res) => { console.log(res)} ).catch((err) => { console.log(err) });
	  } catch (err) {
	    throw new Error(err);
	  }
}