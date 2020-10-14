exports.handler = function(context, event, callback) {
    const result = {
        message : "Function created Hello world 2."
    }

    callback(null, result);
  };
