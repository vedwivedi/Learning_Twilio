exports.handler = async (context, event, callback) => {
  const { mock_request } = event;
  console.log(mock_request);

  const responseObj = {};

  // calling mock API handlers
  switch (mock_request) {
    case 'caller_client_lookup':
     await callerClinetLookupHandler(context, event, callback);
      break;

    case 'caller_account_lookup':
     await callerAccountLookupHandler(context, event, callback);
      break;

    case 'account_number_lookup':
     await accountNumberLookupHandler(context, event, callback);
      break;

    default:
      responseObj.default = true;
  }
};

const callerClinetLookupHandler = async (context, event, callback) => {
  const responseObj = {};

  console.log(event.caller_id);
  responseObj.clientName = 'Mock Client';
console.log('sim: '+responseObj.clientName);
  callback(null, responseObj);
};

const callerAccountLookupHandler = async (context, event, callback) => {
  const responseObj = {};

  responseObj.accountNumber = '123456789';
  responseObj.accountStatus = 'active';
  responseObj.userName = 'Mock Name';

  callback(null, responseObj);
};

const accountNumberLookupHandler = async (context, event, callback) => {
  const responseObj = {};

  responseObj.accountStatus = 'active';
  responseObj.userName = 'Mock Name';

  callback(null, responseObj);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
