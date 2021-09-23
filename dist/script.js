var listarFilmes = [
  "https://i.blogs.es/6358d0/fast-furious/1366_2000.jpeg",
  "https://elcomercio.pe/resizer/St4nOvHf2zG7BqON-clQQ72Qm4E=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/UYYIZGJQRBEV3IJJFML2BY4EBA.jpg",
  "https://img.ecartelera.com/sagas/000/45.jpg"
];

var listaFilmesII = [
  "https://clarovideocdn1.clarovideo.net/PELICULAS/HANGOVERTHE/EXPORTACION_WEB/SS/HANGOVERTHEWHORIZONTAL.jpg?size=675x380",
  "https://hosting.photobucket.com/albums/m556/mygue/01-1308.jpg",
  "https://clarovideocdn5.clarovideo.net/PELICULAS/HANGOVERPARTIIITHE/EXPORTACION_WEB/SS/HANGOVERPARTIIITHEWHORIZONTAL.jpg?size=675x380"
];

for (var i = 0; i < listarFilmes.length && listaFilmesII.length; i++) {
  document.write("br" + "<img src=" + listarFilmes[i] + ">");
  document.write("br" + "<img src= " + listaFilmesII[i] + ">");
}