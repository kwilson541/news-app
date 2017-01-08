(function testArticleCreatedWithHeadline() {
	var article = new Article("Headline here");
	assert.isTrue(article.returnHeadline() === "Headline here");
})();

(function testArticleCreatedWithBody() {
	var article = new Article("Headline here", "Body here");
	assert.isTrue(article.returnBody() === "Body here");
})();