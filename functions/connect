const axios = require('axios');
const API_ENDPOINT = 'https://learn-veerendra-7324-dev.twil.io/simulateAPI';
exports.handler = async  function(context, event, callback) {
  
const {CurrentTask} = event;
console.log(CurrentTask);
  // calling task handlers
  switch(CurrentTask){
    case 'greeting' :    
      await FunctionCaller("greetingTaskHandler",context, event, callback);
      break;
    case 'phone_check':      
      await FunctionCaller("phoneCheckTaskHandler",context, event, callback);
      break;

    case 'account_check':
       await FunctionCaller("accountCheckTaskHandler",context, event, callback);
      break;
    case 'agent_transfer' :
      await FunctionCaller("agentTransferHandler",context, event, callback);
      break;

    case 'yes_no' :
      await FunctionCaller("yesNoHandler",context, event, callback);
      break;
        
    case 'goodbye' :
      await FunctionCaller("goodbyeTaskHandler",context, event, callback);
      break;

    case 'collect_fallback' :
      await FunctionCaller("collectFallbackTaskHandler",context, event, callback);
      break;

    case 'fallback' :
      await FunctionCaller("fallbackHandler",context, event, callback);
      break;

    default :
      await FunctionCaller("fallbackHandler",context, event, callback);
      break;
  } 
};

// This function to call other function

 const FunctionCaller= async (functionName,context, event, callback) =>{
   var FunctionURL= context.fnURL+functionName      
      axios.post(FunctionURL, event, {headers: { 'Content-Type': 'application/json'} })
          .then(response => { callback(null, response.data); })
          .catch(error => {       
            var errorresult={"Status":error.message};
                console.log(error.message);
                callback(null,errorresult);});
 } 
 





/** 
* response-builder function 
* @Say {string}             // message to speak out
* @Listen {boolean}         // keep session true or false
* @Remember {object}        // save data in remember object 
* @Collect {object}         // collect data in a dialogue
* @Redirect {object}        // Redirect to another task or function
* @callback {function}      // return twilio function response 
* */ 
const responseBuilder = (Say, Listen, Remember, Collect, Tasks, Redirect, Handoff, callback) => {

  let responseObject = {
  "actions": []
  };

  if ( Say ) {
      responseObject.actions.push(
          {
              "say": {
                  "speech": Say
              }
          }
      );
  }
  
  if ( Listen ) {
      if ( Tasks ) {
          responseObject.actions.push(
              { 
                  "listen": {
                      "tasks" : Tasks
                  } 
              }
          );
      }
      else {
          responseObject.actions.push(
              { 
                  "listen": true 
              }
          );
      }
  }

  if ( Remember ) {
      responseObject.actions.push(
          {
              "remember" : Remember
          }
      );
  }

  if ( Collect ) {
      responseObject.actions.push(
          {
              "collect" : Collect
          }
      );
  }

  if ( Redirect ) {
      responseObject.actions.push(
          {
              "redirect" : Redirect
          }
      );
  }

  if ( Handoff ) {
      if ( Handoff.type === 1 ) {
          responseObject.actions.push(
              {
                  "handoff" : {
                      "channel" : "voice",
                      "uri" : Handoff.twiml_url,
                      "method" : "POST"
                  }
              }
          );
      } else if ( Handoff.type === 2 ) {
          responseObject.actions.push(
              {
                  "handoff" : {
                      "channel" : "voice",
                      "uri" : Handoff.task_router_url,
                      "wait_url" : Handoff.wait_url,
                      "wait_url_method" : Handoff.wait_url_method
                  }
              }
          );
      }
  }

  // return twilio function response
  callback(null, responseObject);
}

const callerClientLookup = async (callerID) => {
  let clientName;
  
  try {
    const requestObj = {
      mock_request: 'caller_client_lookup',
      caller_id: callerID
    };

    const responseObj = await axios.post(`${API_ENDPOINT}`, requestObj);
    clientName = responseObj.data.clientName;

  } catch (error) {
    console.error(error);
  }

  if (clientName) {
    return clientName;
  } else {
    return false;
  }
}
