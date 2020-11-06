const axios = require('axios');

exports.handler = async function (context, event, callback) {  
 try {
  let API_callerClientLookup = context.fnURL + 'callerClientLookup';
  let API_responseBuilder = context.fnURL + 'responseBuilder';
   
  let Say;
  let Prompt;
  let Listen = true;
  let Collect = false;
  let Remember = {};
  let Tasks = false;
  let Redirect = false;
  let Handoff = false;

  // Getting the real caller ID
  let callerID = event.UserIdentifier;   

  if (callerID) {
        
    let requestObj = { 
      caller_ID:callerID 
      };
    
  const responseObject = await axios.post(API_callerClientLookup, requestObj, {headers: { 'Content-Type': 'application/json'} });
  
  let clientName = responseObject.data.clientName;
  if ( clientName ) {
    Say = `Thank you for calling ${clientName}.
              Let me check your account using the phone number you are calling from. `;
    Listen = false;
    //Redirect = "task://phone_check";      
  }
    else {
      Say = `Thank you for calling. 
              Let me check your account using the phone number you are calling from. `;

      Listen = false;
      Redirect = "task://phone_check";
     
    }
  }
  else {
    Say = `Thank you for calling. 
            Let me check your account using the phone number you are calling from. `;

    Prompt = `Please tell me the phone number associated with your account.`;

    Say += Prompt;

    Tasks = ['phone_check'];

  }
  

 let requestObj= {
      Say: Say,
      Listen:Listen,
      Remember:Remember,
      Collect:Collect,
      Tasks:Tasks,
      Redirect:Redirect,
      Handoff:Handoff,
      callback:callback
    };
 const responseObj = await axios.post(API_responseBuilder, requestObj, {headers: { 'Content-Type': 'application/json'}});
callback(null, responseObj);
} catch (error) {  
  console.error(error);    
  callback( error);
}
} 



