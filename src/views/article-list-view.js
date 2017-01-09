(function(exports) {

	function ArticleListView(articleList) {
		this._articleList = articleList;
	};

	ArticleListView.prototype.listArticles = function() {
		articles = '<ul>';
		this._articleList.showArticles().forEach(function(element) {
			articles += `<li><div><a href="#${element.returnId()}">${element.returnHeadline()}</a></div></li>`;
		});
		articles += '</ul>';
		return articles;
	};

	exports.ArticleListView = ArticleListView;

})(this);