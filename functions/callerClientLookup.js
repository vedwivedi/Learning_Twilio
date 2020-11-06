const axios = require('axios');
exports.handler =async function(context, event, callback) {
  
  const returnObj={
    clientName:""
  };
  const  {caller_ID} = event;
  console.log('callerID_Caller:'+caller_ID);
  
  let API_simulateAPI = context.fnURL + 'simulateAPI';
  console.log(API_simulateAPI);
  try {
    const requestObj = {
      mock_request: 'caller_client_lookup',
      caller_id:caller_ID
    };

   const responseObj = await axios.post(API_simulateAPI, requestObj, {headers: { 'Content-Type': 'application/json'} });
       
    returnObj.clientName=responseObj.data.clientName;
    
    callback(null, returnObj);
  } catch (error) {
    console.error(error);
    returnObj.clientName=error;
    callback(returnObj);
  }
};
