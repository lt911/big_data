// Imagine you are the Sports Analyst for a big magazine. The goal of this assignment is to demonstrate your data-driven reporting skills and express the following natural language questions as MongoDB queries on soccer-related tweets in English.

// Query 1: How many tweets have location not null?
db.users.find({"user.Location": {$ne:null}}).count()
// ANs: 6937

// Query 2: How many people have more followers than friends?
db.users.find({$where: "this.user.FollowersCount > this.user.FriendsCount"}).count()
// AnsL 5809

// Query 3: Return text of tweets which have the string "http://" ?
db.users.find({tweet_text: {$regex:/http:\/\//}},{tweet_text: 1, _id: 0})

{ "tweet_text" : "RT @BWGotheem: Top 15 Sexiest Woman of the World Cup😍👌🏼😱\n\nhttp://t.co/jRQy5AkVtW http://t.co/aMuXZ3gcWy" }
{ "tweet_text" : "RT @TerraceImages: Question for all the football fans of Twitter. \n\nAre you in favour of Safe Standing? \n\nRT - YES\nFAV - NO http://t.co/D42…" }
{ "tweet_text" : "http://Allen complete stoke move https://t.co/xpc6hMp0Sn" }
{ "tweet_text" : "RT @espn: This Florida St. football fan found a creative way to remind Gators fans about last season.\n\n(via @TJ_Pittinger) http://t.co/GJVr…" }
{ "tweet_text" : "RT @espn: This Florida St. football fan found a creative way to remind Gators fans about last season.\n\n(via @TJ_Pittinger) http://t.co/GJVr…" }
{ "tweet_text" : "RT @newfy320: Chloe ready for some Michigan football! http://t.co/FN2S0M9t6O" }
{ "tweet_text" : "RT @izzy5115: Even my dog Blu is ready for Michigan football @umichfootball http://t.co/gp19MBW9ih" }
{ "tweet_text" : "RT @Ass0Star: RT/FAV #xxx some #football and #superbowl fans are #anal #ass #dilation #insertion #dilation #culo #dildo #gapers http://t.co…" }
{ "tweet_text" : "RT @FootyFunnysUK: BREAKING: Portugal legend Luis Figo has announced his decision to run for Fifa president at this year's election http://…" }
{ "tweet_text" : "RT @trevorphibbs: Friday means one thing: Football is on the horizon. #TribPreps http://t.co/ERrPFknKx6" }

// Query 4: Return all the tweets which contain text "England" but not "UEFA" ?
// change tweet_text to textIndex first:
db.users.createIndex({"tweet_text":"text"})
//Then fin dht tweet_text with England but not UEFA
db.users.find({$text: {$search: "England -UEFA"}}, {tweet_text:1, _id:0})

// Query: Return all the tweets which contain text "England" but not "UEFA". In these results the string “Euro 2016” appears in...
db.users.find({$and: [{$text: {$search: "England -UEFA"}}, {tweet_text:{$regex:/Euro 2016/}}]}).count(

// Query 5: Get all the tweets from the location "Ireland" and contains the string "UEFA"?
db.users.find({$and: [{"user.Location" : "Ireland"}, {tweet_text:{$regex:/UEFA/}}]}).count()
//or
db.users.find({$and: [{"user.Location" : "Ireland"}, {$text:{$search:"UEFA"}}]}).count()

// Query: Get all the tweets from the location "Ireland" which also contain the string "UEFA". In this result the user with the highest friends count is..
 db.users.find({$and: [{"user.Location" : "Ireland"}, {$text:{$search:"UEFA"}}]}, {user_name:1, _id:0}).sort({"user.FirendsCount":-1}
