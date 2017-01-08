(function(exports) {

	function Article(headline){
		this._headline = headline
	}

	Article.prototype.returnHeadline = function() {
		return this._headline;
	};

	exports.Article = Article;

})(this);