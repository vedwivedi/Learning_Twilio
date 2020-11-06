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

  const userPhoneNumber = event.Field_PhoneNumber_Value || Memory.user_phone_number;

  const [accountStatus, accountNumber, userName] = await callerAccountLookup(userPhoneNumber);

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

    Remember.question = 'additional_help';

    Say += Prompt;
    Listen = true;

  } else if (accountStatus === false) {
    Say = `We are not able to find your account using the phone number you are calling from. `;
    Prompt = `Please say your Account Number located in the upper right corner of the letter, starting with the first numerical digit.`;

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
