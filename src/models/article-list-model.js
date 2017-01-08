(function(exports) {

	function ArticleList() {
		this._articles = [];
	};

	ArticleList.prototype.addArticle = function(article) {
		this._articles.push(article)
	};

	ArticleList.prototype.showArticles = function() {
		return this._articles;
	};

	exports.ArticleList = ArticleList;

})(this);