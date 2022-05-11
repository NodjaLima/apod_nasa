$('#submit').on('click', function(evento) {
  evento.preventDefault()
  var dia = $("#data").val()
  var url = `https://api.nasa.gov/planetary/apod?api_key=jHE9WNjJMTAUwBP2hkbxa7aNJ3WzspPFsyH3ELPa&date=${dia}`

  $.ajax({
    url: url,
    type: "GET",
    dataType: 'json',

    success: function(result) {
      console.log(result);

        if (result.media_type == "image") {
          $("#imagem").html(`<img id='img' src="${result.url}"/>`)
        
        } else {
          $('#imagem').html(`<iframe width="426" height="240" src="${result.url}"/>`)
        }
      $('#text').html(`Date:`)          
      $('#div2').html(`${result.explanation}`)


    },

    error: function () {
      $("#div2").html('Verifique se a data inserida está correta.')
    }
      })
      
    
})