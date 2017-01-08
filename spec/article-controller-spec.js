article = {}
article.returnHeadline = function() {
	return "Headline";
};

articleList = {}
articleList.showArticles = function() {
	return [article];
};

(function testUpdateHTML() {
	var controller = new ArticleController(articleList);
	controller.addArticleListView();
	var app = document.createElement("div");
	app.id = "app";
	document.body.appendChild(app);
	controller.updateHTML("app")
	assert.isTrue(app.innerHTML === '<ul><li><div>Headline</div></li></ul>')
})();