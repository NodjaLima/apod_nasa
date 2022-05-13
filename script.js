$('#submit').on('click', function(evento) {
  evento.preventDefault()
  let dia = $("#data").val()
  
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=jHE9WNjJMTAUwBP2hkbxa7aNJ3WzspPFsyH3ELPa&date=${dia}`,
    type: "GET",
    dataType: 'json',

    success: function(result) {
      console.log(result);

        if (result.media_type == "image") {
          $("#imagem").html(`<img id='img' src="${result.url}"/>`);
          $("#titulo").html(`${result.title}`);
          
        } else if(result.media_type == "other"){
          $('#imagem').html(`<img id='img' src="./error.webp"/>`);
          $("#titulo").html(`${result.title}`);
          
        }else {
          $('#imagem').html(`<iframe class="video" width="426" height="240" src="${result.url}"/>`)
          $("#titulo").html(`${result.title}`);
        }

      $('#text').html(`Date:`);      
      $('#div2').html(`${result.explanation}`);


    },

    error: function () {
      $('#text').html(`Date:`) 
      $("#div2").html('O banco de imagens que usamos nessa aplicação começa em 20/06/1995 e termina na data de hoje. Verifique se a data inserida está dentro dessa linha de tempo e tente novamente.')
      $('#imagem').html(`<img id='img' src="./fail.png"/>`)
      $("#titulo").html(`Deu ruim!`)
    }
      })

    
})