function test(){
$(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
    part: "snippet",
    q: 'bootstrap',
    key: 'AIzaSyBivpazcFTXWlffXSSuATaiTiLA2I6de7g'},
    function(data){
      $.each(data.items,function(i, item){
        console.log(item);
      })
    }
  );
});
}

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
