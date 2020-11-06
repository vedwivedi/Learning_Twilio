const axios = require('axios');
exports.handler =async function(context, event, callback) {
  try {
  const Say =
    "Looks like you having trouble. Apologies for that. Let's start again, how can I help you today?";
  const Listen = true;
  let Remember = {};
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
  } catch (error) {
    console.error(error);    
    callback( error);
  }
};
