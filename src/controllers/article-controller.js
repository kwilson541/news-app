(function(exports) {

	function ArticleController(articleList) {
		self = this;
		this._articleList = articleList;
	};

	ArticleController.prototype.addArticle = function(headline, body) {
		self._articleList.createArticle(headline, body);
	};

	ArticleController.prototype.addArticleListView = function() {
		self._articleListView = new ArticleListView(self._articleList);
	};

	ArticleController.prototype.updateHTML = function() {
		var getArticleList = self._articleListView.listArticles();
		var articleDisplay = document.getElementById("app");
		articleDisplay.innerHTML = getArticleList;
	};

	ArticleController.prototype.requestXMLDoc = function() {
		self.xhr = new XMLHttpRequest();
		self.xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2017-01-01&to-date=2017-01-07", true)
		self.xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				this.resultsArray = JSON.parse(this.responseText).response.results;
				self.processResultsArray(this.resultsArray);
			};
		};
		self.xhr.send();
	};

	ArticleController.prototype.processResultsArray = function(array) {
		array.forEach(function(element) {
			self.addArticle(element.webTitle);
		});
		self.addArticleListView();
		self.updateHTML();
	};

	exports.ArticleController = ArticleController;

})(this);