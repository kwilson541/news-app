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
		var id = this._articles.length;
		var article = new Article(headline, body, id);
		this.addArticle(article);
	};

	exports.ArticleList = ArticleList;

})(this);