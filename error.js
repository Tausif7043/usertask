'use strict';

module.exports = function (app) {

  // catch 404 and forward to error handler
  // error handlers
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function (req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      res.json({
        error: err.message,
        data: err
      });
    });

    app.use(function (err, req, res) {
      res.status(err.status || 500);
      res.json({
        error: err.message,
        data: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.json({
      error: err.message,
      data: {}
    });
  });

};
