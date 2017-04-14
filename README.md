# GithubAPIStats
Stats

This project aims at building a radar for front end frameworks. We considered the frameworks from this link: http://usablica.github.io/front-end-frameworks/compare.html
The data considered is from the following sources:
- Twitter (Tweets, likes, followers, following, tweets from last 1 week)
- Github (Created on, updated last on, subscribers, forks, stars )
- Stackoverflow (Number of questions, count per tag)
- Google trends
- YouTube

The x axis could be measure of support and y axis could be time. This gives us 4 quandrants. We can use metrics from Bootstrap as the benchmark. 

Twitter:
- We used the twitter api to get the tweets from the last 1 week for some of the frameworks. This was done using R. After that,we generated a workcloud using R packages. 
