(function testArticleCreatedWithHeadline() {
	var article = new Article("Headline here");
	assert.isTrue(article.returnHeadline() === "Headline here");
})();

(function testArticleCreatedWithBody() {
	var article = new Article("Headline here", "Body here");
	assert.isTrue(article.returnBody() === "Body here");
})();

(function testArticleCreatedWithId() {
	var article = new Article("Headline here", "Body here", 1);
	assert.isTrue(article.returnId() === 1);
})();