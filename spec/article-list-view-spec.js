article = {}
article.returnHeadline = function() {
	return "Headline";
};

articleList = {}
articleList.showArticles = function() {
	return [article];
};

multipleArticleList = {}
multipleArticleList.showArticles = function() {
	return [article, article];
};

emptyArticleList = {}
emptyArticleList.showArticles = function() {
	return [];
};

(function testListArticles() {
	var articleListView = new ArticleListView(articleList);
	assert.isTrue(articleListView.listArticles() === '<ul><li><div>Headline</div></li></ul>')
})();

(function testListMultipleArticles() {
	var articleListView = new ArticleListView(multipleArticleList);
	assert.isTrue(articleListView.listArticles() === '<ul><li><div>Headline</div></li><li><div>Headline</div></li></ul>')
})();

(function testListNoArticles() {
	var articleListView = new ArticleListView(emptyArticleList);
	assert.isTrue(articleListView.listArticles() === '<ul></ul>')
})();