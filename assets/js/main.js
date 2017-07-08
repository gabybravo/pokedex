$(document).ready(function(){
    for(var i=1; i <= 151; i++){ //Recorre y muestra la primera generación de pokemones, podrían ponerse todos si se desea
        $('#pokemon').append("<img id='" + i + "' src='http://pokeapi.co/media/img/" + i + ".png'>"); //Imágenes de cada pokemón
                }

                $('#pokemon').on('click','img',function(){ // Al hacer click aparece info de cada pokemón en un div al costado de la pantalla
                    var id = $(this).attr('id');
                    $.get('http://pokeapi.co/api/v2/pokemon/' + id, function(pokemon){
                        var contenedor = "";
                        contenedor += "<h2>" + pokemon.name.toUpperCase() + "</h2>"; //Nombre del pokemón
                        contenedor += "<p><img src='http://pokeapi.co/media/img/" + pokemon.id + ".png'></p>"; //Imagen del pokemón
                        contenedor += "<h4>Types</h4>";
                        contenedor += "<p>";
                        for(var i = 0; i < pokemon.types.length; i++) { //Tipo de pokemón
                            contenedor += "<p>" + pokemon.types[i].type.name + "</p>";
                        }
                        contenedor += "<h4>Height</h4>";
                        contenedor += "<p>" + pokemon.height + "</p>"; //Altura
                        contenedor += "<h4>Weight</h4>";
                        contenedor += "<p>" + pokemon.weight + "</p>"; //Peso
                        contenedor += "<p>";
                        $('#display_info').html(contenedor); //Caja contenedora
                    }, "json");
                });
});

/* No supe mostrar la info en un modal y solo se me ocurrió esta forma de solucionarlo. */