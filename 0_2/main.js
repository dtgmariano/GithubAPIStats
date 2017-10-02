repos = [{"repo":"agrublev/52framework"},
{"repo":"alsacreations/KNACSS"},
{"repo":"antpaw/xCSS"},
{"repo":"azendal/elastic"},
{"repo":"bauhouse/fluid960gs"},
{"repo":"brunch/brunchx"},
{"repo":"cbrauckmuller/helium"},
{"repo":"dhg/Skeleton"},
{"repo":"gbabula/G5Framework"},
{"repo":"h5bp/html5-boilerplate"},
{"repo":"heygrady/compass-grid-plugin"},
{"repo":"italolelis/EasyFramework"},
{"repo":"jesucarr/FEM-CSS-Framework"},
{"repo":"jonikorpi/Less-Framework"},
{"repo":"joshuagatcke/HTML-KickStart"},
{"repo":"juanghurtado/flaminwork"},
{"repo":"mikecrittenden/bluetrip"},
{"repo":"nathansmith/960-Grid-System"},
{"repo":"Semantic-Org/Semantic-UI"},
{"repo":"twbs/bootstrap"},
{"repo":"uikit/uikit"},
{"repo":"yamlcss/yaml"},
{"repo":"yui/yui3"},
{"repo":"zurb/foundation-sites"},
{"repo":"joshuaclayton/blueprint-css"},
{"repo":"groundworkcss/groundwork"},
{"repo":"GumbyFramework/Gumby"}
];

pushUrl = [];

function myData(source)
{
  this.id = source.id;
  //this.fullname = source.fullname;
  this.name = source.name;
  //this.url = source.url;

  this.created_at = source.created_at;
  this.updated_at = source.updated_at;

  this.subscribers = source.subscribers_count;
  this.forks = source.forks_count;
  this.stars = source.stargazers_count;

  this.description = source.description;
}

counter = 0;
storage = [];

function foo(response)
{
  var meta = response.meta;
  var data = response.data;
  console.log(data);
  var md = new myData(data);
  storage.push(md);
  /*console.log(md.id + "\t" + md.name + "\t" + md.created_at + "\t" + md.updated_at + "\t" + md.subscribers + "\t" + md.forks + "\t" + md.stars + "\t" + md.description);*/
}

function foo2(response)
{
    var data2 = response;
    console.log(data2);
}

function retrieveRepo2GitHubAPI(source)
{
  var script = document.createElement('script');
  script.src = 'https://api.github.com/repos/'+ source.repo +'?callback=foo';
  document.getElementsByTagName('head')[0].appendChild(script);
}

function retrievePulls2GitHubAPI(source)
{
  var script2 = document.createElement('script2');
  script2.src = source +'?callback=foo';
  document.getElementsByTagName('head')[0].appendChild(script2);
}

function retrieveDummy(source)
{
  storage.push(source.repo);
}

var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

function dotask()
{
  repos.forEach(retrieveRepo2GitHubAPI);
  //retrieve2GitHubAPI(repos[0]);
}

dotask();
