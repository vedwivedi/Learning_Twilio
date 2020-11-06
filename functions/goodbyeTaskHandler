const axios = require('axios');
exports.handler = async function (context, event, callback) { 
try {
  let API_responseBuilder = context.fnURL + 'responseBuilder';
  const Say = "Thanks for calling. Good bye.";
  const Listen = false;
  const Remember = false;
  const Collect = false;
  const Tasks = false;
  const Redirect = false;
  let Handoff = false;

  const Memory = JSON.parse(event.Memory);
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


  
