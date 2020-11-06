exports.handler = function(context, event, callback) {
 const axios = require('axios');
 
 var URL= event.URL;
 var Tout=event.timeout;
 var Data=event.RequestBody;

 axios.post(URL, Data,
  {
  headers: {
    'Content-Type': 'application/json',
    
  },
  timeout:Tout,
})

  .then(response => {
    callback(null, response.data);
  })
  .catch(error => {
       
   var errorresult={"Status":error.message,"Returns":"-1"};
    callback(null,errorresult);
  });

  	//callback(null, responsemsg);
};
