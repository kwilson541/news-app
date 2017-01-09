article = {}
article.returnBody = function() {
	return "Body";
};

(function testViewingSingleArticle() {
	var singleArticleView = new SingleArticleView(article);
	assert.isTrue(singleArticleView.viewArticle() === "<div>Body</div>")
})();