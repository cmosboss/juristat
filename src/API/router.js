/**
 * Created by Taylor on 7/11/2017.
 */
let express = require('express');
let router = express.Router();
let api = require('./api.js');

// database routes
router.get('/', api.root);
router.get('/all/articles', api.getAllArticles);
router.get('/delete/article/:id', api.deleteArticle);

module.exports = router;