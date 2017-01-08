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

	ArticleList.prototype.createArticle = function(headline, body) {
		var article = new Article(headline, body);
		this.addArticle(article);
	};

	exports.ArticleList = ArticleList;

})(this);