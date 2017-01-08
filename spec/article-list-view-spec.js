article = {}
article.returnHeadline = function() {
	return "Headline";
};

articleList = {}
articleList.showArticles = function() {
	return [article]
};

(function testListArticles() {
	var articleListView = new ArticleListView(articleList);
	assert.isTrue(articleListView.listArticles() === '<ul><li><div>Headline</div></li></ul>')
})();