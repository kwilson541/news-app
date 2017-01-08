(function(exports) {

	function ArticleController(articleList) {
		this._articleList = articleList;
	};

	ArticleController.prototype.addArticle = function(headline, body) {
		this._articleList.createArticle(headline, body);
	};

	ArticleController.prototype.addArticleListView = function() {
		this._articleListView = new ArticleListView(this._articleList);
	};

	ArticleController.prototype.updateHTML = function() {
		var getArticleList = this._articleListView.listArticles();
		var articleDisplay = document.getElementById("app");
		articleDisplay.innerHTML = getArticleList;
	};

	exports.ArticleController = ArticleController;

})(this);