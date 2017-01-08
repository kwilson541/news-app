article = {};

(function testArticleListContainsArticles() {
	var articleList = new ArticleList();
	articleList.addArticle(article);
	assert.isTrue(articleList.showArticles()[0] === article);
})();

(function testCreateArticle() {
	var articleList = new ArticleList();
	articleList.createArticle("Headline", "Body");
	assert.isTrue(articleList.showArticles().length === 1);
})();