exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello CICD Twilio Github"
    }

    callback(null, result);
  };
