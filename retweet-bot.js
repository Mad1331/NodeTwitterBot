var Twit = require('twit');

var T = new Twit({
	consumer_key: '...'
	, consumer_secret: '...'
	, access_token: '...'
	, access_token_secret: '...'
});

function retweetRecent() {
	T.get('search/tweets', {q: "kerbal AND space" , result_type: "new"}, function (err, data,response) {
		if (!err) {
			var retweetId = data.statuses[0].id_str;
			T.post('statuses/retweet/' + retweetId, { }, function (err, response) {
				if (response) {
					console.log('Retweeted Tweet ID: ' + retweetId);
				}
				if (err) {
					console.log('Retweet Error: ', err);
				}
			});
		} else {
			console.log('Search Error: ', err);
		}
	});
}



retweetRecent();
setInterval(retweetRecent, 30000);