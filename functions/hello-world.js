exports.handler = function(context, event, callback) {
    const result = {
        message : "Function modified by visual studio. Commit manually"
    }

    callback(null, result);
  };
