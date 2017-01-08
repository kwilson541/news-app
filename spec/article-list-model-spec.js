article = {};

(function testArticleListContainsArticles() {
	var articleList = new ArticleList();
	articleList.addArticle(article);
	assert.isTrue(articleList.showArticles()[0] === article);
})();