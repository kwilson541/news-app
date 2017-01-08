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

	ArticleController.prototype.requestXMLDoc = function() {
		this.xhr = new XMLHttpRequest();
		this.xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2017-01-01&to-date=2017-01-07", true)
		this.xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				this.parsedResponse = JSON.parse(this.responseText)
			};
		};
		this.xhr.send();
		console.log(this.xhr.parsedResponse)
		this.processResultsArray();
	};

	ArticleController.prototype.processResultsArray = function() {
		this.xhr.resultsArray.forEach(function(element) {
			this.addArticle(element.webTitle);
		});
		this.updateHTML();
	};

	exports.ArticleController = ArticleController;

})(this);