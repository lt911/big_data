-- 1.This quiz encompasses data and content from Week 1 and 2, so we recommend reviewing that material from last week for this quiz as well. What is the highest level that the team has reached in gameclicks? (Hint: use the MAX operation in postgres). 
select max(teamlevel) from gameclicks ;
-- Ans: 8

-- 2. How many user id's (repeats allowed) have reached the highest level as found in the previous question? (Hint: For postgres: you may either use two queries or use a sub-query).
select count( userid) from gameclicks 
where teamlevel = (select max(teamlevel) from gameclicks);
-- Ans: 51294

-- 3.How many user id’s (repeats allowed) reached the highest level in game-clicks and also clicked the highest costing price in buy-clicks? Hint: Refer to question 4 for ideas.
select count(g.userid) 
from gameclicks g join buyclicks b 
on g.userid = b.userid 
where teamlevel = (select max(teamlevel) from gameclicks) 
and price = (select max(price) from buyclicks);
-- Ans: 32747

-- 4. What does the following line of code do in postgres?

SELECT count(userid) FROM (SELECT buyclicks.userId, teamLevel, price FROM buyclicks JOIN gameclicks on buyclicks.userId = gameclicks.userId) temp WHERE price=3 and teamLevel=5;
-- Ans:Finds the total number of user ids (repeats allowed) in buy-clicks that have bought items with prices worth $3 and was in a team with level 5 at some point in time.

-- 5. In the MongoDB data set, what is the username of the twitter account who has a tweet_followers_count of exactly 8973882?
db.users.find({"tweet_followers_count": 8973882},{user_name:1, _id:0}
-- Ans:FIFAcom