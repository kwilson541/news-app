(function(exports) {

	function Article(headline, body, id){
		this._headline = headline;
		this._body = body;
		this._id = id;
	}

	Article.prototype.returnHeadline = function() {
		return this._headline;
	};

	Article.prototype.returnBody = function() {
		return this._body;
	};

	Article.prototype.returnId = function() {
		return this._id;
	};

	exports.Article = Article;

})(this);