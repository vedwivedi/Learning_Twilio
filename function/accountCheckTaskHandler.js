const axios = require('axios');
exports.handler =async function(context, event, callback) {
  try {
  let Say;
  let Prompt;
  let Listen = true;
  let Collect = false;
  let Remember = {};
  let Tasks = false;
  let Redirect = false;
  let Handoff = false;

  const Memory = JSON.parse(event.Memory);

  const accountNumber = event.Field_AccountNumber_Value;

  const [accountStatus, userName] = await accountNumberLookup(accountNumber);

  if (accountStatus && accountStatus === 'active') {
    Say = ``;
    Prompt = `Is your name ${userName}?`;

    Say += Prompt;

    Remember.question = 'name_check';

    Listen = true;
    Tasks = ['yes_no'];

  } else if (accountStatus && accountStatus === 'inactive') {
    Say = `The account associated with ${userPhoneNumber}, is not active. `;
    Prompt = `Do you need additional assistance?`;

    Say += Prompt;

    Remember.question = 'additional_help';

    Listen = true;
  } else if (accountStatus === false) {
    Say = `The account number you provided, ${accountNumber} is not valid. `;
    Prompt = `Please say or enter your account number again.`;

    Say += Prompt;
    Listen = true;
    Tasks = ['account_check'];
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
