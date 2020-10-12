exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Twilio."
    }

    callback(null, result);
  };
