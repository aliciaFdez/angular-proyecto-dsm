
(function(){
	var app=angular.module('listanotas',[]);
	conjuntonotas=[{
			title: 'Nota1',
			Sdescription:'Descrcorta de la nota 1',
			Ldescription:'Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba			Esta es la descripcion larga de la nota 1 como prueba	Esta es la descripcion larga de la nota 1 como prueba	Esta es la descripcion larga de la nota 1 como prueba' ,
			author:'alguienquemedaigual'
		},
		{
			title: 'Nota2',
			Sdescription:'Descrcorta de la nota 2',
			Ldescription:'Esta es la descripcion larga de la nota 2 como prueba' ,
			author:'alguienquemedaigual2'
		},
		{
			title: 'Nota3',
			Sdescription:'Descrcorta de la nota 3',
			Ldescription:'Esta es la descripcion larga de la nota 3 como prueba' ,
			author:'alguienquemedaigual3'
		},
		{
			title: 'Nota4',
			Sdescription:'Descrcorta de la nota 4',
			Ldescription:'Esta es la descripcion larga de la nota 4 como prueba' ,
			author:'alguienquemedaigual4'
		},
		{
			title: 'Nota5',
			Sdescription:'Descrcorta de la nota 5',
			Ldescription:'Esta es la descripcion larga de la nota 5 como prueba' ,
			author:'alguienquemedaigual5'
		},
		{
			title: 'Nota6',
			Sdescription:'Descrcorta de la nota 6',
			Ldescription:'Esta es la descripcion larga de la nota 6 como prueba' ,
			author:'alguienquemedaigual6'
		},
		{
			title: 'Nota7',
			Sdescription:'Descrcorta de la nota 7',
			Ldescription:'Esta es la descripcion larga de la nota 7 como prueba' ,
			author:'alguienquemedaigual7'
		}
	];
	app.controller('ListaController',function(){
		this.notas=conjuntonotas;
	});
	
})();