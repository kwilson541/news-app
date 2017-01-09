article = {}
article.returnHeadline = function() {
	return "Headline";
};
article.returnId = function() {
	return 0;
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
	assert.isTrue(app.innerHTML === '<ul><li><div><a href="0">Headline</a></div></li></ul>')
})();