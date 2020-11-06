const axios = require('axios');
exports.handler =async function(context, event, callback) {
  try {
  const Listen = false;
  const Remember = false;
  const Collect = false;
  const Tasks = false;
  const Redirect = false;
  const Handoff = false;

  const Memory = JSON.parse(event.Memory);

  const Say = `Okay. Hold the line while I transfer you to an agent.`;
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
