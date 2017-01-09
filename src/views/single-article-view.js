(function(exports) {

	function SingleArticleView(article) {
		this._article = article;
	};

	SingleArticleView.prototype.viewArticle = function() {
		output = "<div>" + this._article.returnBody() + "</div>";
		return output;
	};

	exports.SingleArticleView = SingleArticleView;

})(this);