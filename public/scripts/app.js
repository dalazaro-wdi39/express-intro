console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  // code in here
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/taquerias',
    success: handleTacoSuccess,
    error: handleError
  });

});

  function handleSuccess(json) {

    //defining unnamed Object as variable
    var albums = json;
    console.log(json);

    //for each location, create a list item and marker
    albums.forEach(function (json) {

      //List item of album info
      var artist = json.artist;
      var title = json.title;

      $('#listOfAlbums').append(`<li>Artist: ${artist}<br>Title: ${title}</li>`);

    });

  }

  function handleTacoSuccess(json) {

    //defining unnamed Object as variable
    var taquerias = json;
    console.log(json);

    //for each location, create a list item and marker
    taquerias.forEach(function (json) {

      //List item of album info
      var taqueria = json.name;
      $('#listOfTaquerias').append(`<li>${taqueria}`);

    });

  }

  function handleError(xhr, status, errorThrown) {
    console.log('uh oh');
  }
