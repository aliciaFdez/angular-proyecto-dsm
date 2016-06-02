

var express = require('express');
var app = express();
app.use(express.static('angular2-level 1'));
app.get('/datos', function(request, response){
	articulos = [{
    	nombre: 'Banco de madera',
    	precio: 690.6,
    	descripcion: 'Aliquam eu arcu luctus, faucibus metus venenatis.',
      images: [
        {
        full: 'images/banco-fuerte1.jpg',
        thumb: 'images/banco-fuerte1-mini.jpg'
        },
        {
        full: 'images/banco-fuerte2.jpg',
        thumb: 'images/banco-fuerte2-mini.jpg'}],
      reviews: [
        {
          stars: 5,
          body: "¡Me encanta este producto!",
          author: "ion@love.com"
        },
        {
          stars: 1,
          body: "No me ha resultado bueno",
          author: "juan@hate.com"
        }
      ],
    	enVenta: true,
    	vendido: false},{
      nombre: 'Banco reforzado',
      precio: 480.45,
      descripcion: 'Suspendisse nisl elit rhoncus eget.',
      images: [{
        full: 'images/banco-reforzado1.jpg',
        thumb: 'images/banco-reforzado1-mini.jpg'
        },
        {
        full: 'images/banco-reforzado2.jpg',
        thumb: 'images/banco-reforzado2-mini.jpg'
      }],
      enVenta: true,
      vendido: false},{
      nombre: 'Banco estándar',
      precio: 395.15,
      descripcion: 'Etiam sit amet orci eget nullam nulla eros sit.',
      images: [{
        full: 'images/banco-estandar1.jpg',
        thumb: 'images/banco-estandar1-mini.jpg'
        },
        {
        full: 'images/banco-estandar2.jpg',
        thumb: 'images/banco-estandar2-mini.jpg'
      }],
      enVenta: true,
      vendido: false
  	}];
  	response.json(articulos);
});
app.listen(9000);


