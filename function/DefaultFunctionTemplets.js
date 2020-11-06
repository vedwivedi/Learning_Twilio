
// This is your new function. To start, set the name and path on the left.

exports.handler = function(context, event, callback) {
  try {
	const Listen = false;
  const Remember = false;
  const Collect = false;
  const Tasks = false;
  const Redirect = false;
  const Handoff = false;
  const Say = ``;
  
  // Add your code here.  
  const Memory = JSON.parse(event.Memory);
  
  
  
  
  //End of your code.
  
  // This callback is what is returned in response to this function being invoked.
  
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
  let API_responseBuilder = context.fnURL + 'responseBuilder';
 const responseObj = await axios.post(API_responseBuilder, requestObj, {headers: { 'Content-Type': 'application/json'}});
  return callback(null, responseObj);
  } catch (error) {  
  console.error(error);    
  callback( error);
}
};
