(function testArticleCreatedWithHeadline() {
	var article = new Article("Headline here");
	assert.isTrue(article.returnHeadline() === "Headline here");
})();