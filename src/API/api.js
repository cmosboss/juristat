/**
 * Created by Taylor on 7/11/2017.
 */

let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('test.db');

//Returns API root messages
exports.root = function(request, response) {
	response.send('Root of the API router.');
};

exports.getAllArticles = function(request, response) {
	db.all("SELECT * from articles" ,function(err,rows){
		response.json(rows);
	});
};

exports.deleteArticle = function(request, response) {
	db.run("DELETE FROM articles WHERE id=(?)", request.params.id, function(err, other) {
		if(err){
			response.sendStatus(500);
		}
		else{
			response.sendStatus(200);
		}
	});
};
