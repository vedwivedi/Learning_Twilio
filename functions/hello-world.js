exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Twilio dummy account"
    }

    callback(null, result);
  };
