
/*
 * GET home page.
 */

exports.view = function(req, res){
  var name = req.params.userName || 'World';
  res.render('index', {
  	'name': name,
  });
};
