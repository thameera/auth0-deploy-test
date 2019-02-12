function (user, context, callback) {
  console.log('From deployment');
  callback(null, user, context);
}
