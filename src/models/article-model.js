(function(exports) {

	function Article(headline, body){
		this._headline = headline;
		this._body = body;
	}

	Article.prototype.returnHeadline = function() {
		return this._headline;
	};

	Article.prototype.returnBody = function() {
		return this._body;
	};

	exports.Article = Article;

})(this);