(function(exports) {

	function ArticleListView(articleList) {
		this._articleList = articleList;
	};

	ArticleListView.prototype.listArticles = function() {
		articles = '<ul>';
		this._articleList.showArticles().forEach(function(element) {
			articles += `<li><div>${element.returnHeadline()}</div></li>`
		});
		articles += '</ul>';
		return articles;
	};

	exports.ArticleListView = ArticleListView;

})(this);