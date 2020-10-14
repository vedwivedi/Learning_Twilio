exports.handler = function(context, event, callback) {
    const result = {
        message : "Function created Hello world 3."
    }

    callback(null, result);
  };
