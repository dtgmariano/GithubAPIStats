function info(source)
{
  this.meta = source.meta;
  this.data = source.data;
  /*this.name = source.name;
  this.id = source.id;
  this.fork = source.forks_count;
  this.watch = source.subscribers_count;
  this.created_at =  source.created_at;
  this.updated_at =  source.updated_at;
  this.stargazers = source.stargazers_count;*/
}

function foo(response) {
  var meta = response.meta;
  var data = response.data;
  var i = new info(response);
  //console.log(i.name + "\t" + i.stargazers);
  //console.log(meta);
  console.log(data);
}

function retrieve2GitHubAPI(source)
{
  var script = document.createElement('script');
  script.src = 'https://api.github.com/repos/'+ source.repo +'?callback=foo';
  document.getElementsByTagName('head')[0].appendChild(script);
}


var repos = [];

repos.forEach(retrieve2GitHubAPI);
