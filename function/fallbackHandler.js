const axios = require('axios');
exports.handler =async function(context, event, callback) {
  try {
  let Say = false;
  const Listen = true;
  let Remember = {};
  const Collect = false;
  const Tasks = false;
  const Redirect = false;
  let Handoff = false;

  console.log('Fallback Triggered.');

  const Memory = JSON.parse(event.Memory);

  Say = "I'm sorry didn't quite get that. Please say that again.";
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
  } catch (error) {
    console.error(error);    
    callback( error);
  }
}; 
