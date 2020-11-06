const axios = require('axios');
exports.handler =async function(context, event, callback) {
  try {
  let Say;
  let Prompt = '';
  let Tasks = false;
  let Remember = {};
  let Redirect = false;
  let Listen = false;
  let Collect = false;
  let Handoff = false;

  const Memory = JSON.parse(event.Memory);

  console.log(event.Field_yes_no_Value);

  switch ( Memory.question ) {
    case 'name_check':
      if (event.Field_yes_no_Value === 'Yes') {

        Say = 'For your account verification say 5 digits of your Zip code or last 4 digits of your Social Security number.';
        Redirect = 'task://agent_transfer';

        Listen = true;
        Tasks = ['zip_ssn_check'];

        break;

      } else if (event.Field_yes_no_Value === 'No') {

        Say = 'Please hold,while we transfer you to an agent.';
        Redirect = 'task://agent_transfer';

        break;

      } else {
        Say = false;
        Redirect = 'task://fallback';
        break;
      }

    case 'agent_transfer':
      if (event.Field_yes_no_Value === 'Yes') {

        Say = false;
        Redirect = 'task://agent_transfer';

        break;

      } else if (event.Field_yes_no_Value === 'No') {

        Say = false;
        Redirect = 'task://goodbye';

        break;

      } else {
        Say = false;
        Redirect = 'task://fallback';
        break;
      }

    default:
      Say = false;
      Redirect = 'task://fallback';
      break;
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
  } catch (error) {
    console.error(error);    
    callback( error);
  }
};
