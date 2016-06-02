

var express = require('express');
var app = express();

var mongoose=require('mongoose');

app.use(express.static('public'));

/* ---- Bases de datos ---- */
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var Usuarios = new Schema({
  name: String,
  bio: String,
  email: String,
});
var Notas = new Schema({
  
  category:{
    name: String,
    icon: String
  },
  description: String,
  title: String,
  content: String,
  fecha: Date
});
var Notas = mongoose.model('Notas',Notas);
var Usuarios = mongoose.model('Usuarios',Usuarios);

mongoose.connect('mongodb://localhost/NotApp',function(err){
  if(!err){
    console.log('Se ha conectado a la base de datos del chat');
  }else{
    throw err;
  }
});

/* ---- Servidor ---- */
app.get('/usuarios', function(request, response){
   Usuarios.find().count(function(err,count){
    Usuarios.find().exec(function(err,doc){
      var users=[];
      for(var i=0;i<count;i++){
       users[i]=doc[i]; 
      }
      //console.log(users);
      response.json({info:users});
    });
  });
});

app.get('/notas', function(request, response){

  //llamamos a la base de datos para buscar todas las notas
  Notas.find().count(function(err,count){
    Notas.find().exec(function(err,doc){
      var notas=[];
      for(var i=0;i<count;i++){
       notas[i]=doc[i]; 
      }
      //console.log(notas);
      response.json(notas);
    });
  });
	/*
    db.notas.insert({category:
      {
        name: "Ipsum",
        icon: "ipsum"
      },
    description: 'Egestas nec, vestibulum et, malesuada adipiscing.',
    title: 'Sed augue ipsum',
    content: 'Fusce vulputate eleifend sapien. Aliquam eu nunc. Quisque malesuada placerat nisl.'
  })

    db.notas.insert({category:
      {
        name: "Fusce",
        icon: "fusce"
      },
    description: 'Nullam vel sem maecenas egestas arcu quis ligula.',
    title: 'Vulputate eleifend sapien',
    content: 'Donec vitae orci sed dolor rutrum auctor. Pellentesque auctor neque nec urna.'
    })

    db.notas.insert({category:
      {
        name: "Auctor",
        icon: "auctor"
      },
    description: 'Fusce egestas elit eget lorem. Sed a libero.',
    title: ' Nulla sit amet est',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'
    })
    db.notas.insert({category:
      {
        name: "Morbi",
        icon: "morbi"
      },
    description: 'Suspendisse nisl elit, rhoncus eget, elementum ac.',
    title: 'Mattis ullamcorper velit',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'
    })
  */

});

app.get('/notas/:id', function(request, response){
  //console.log("antes de coge datos");
  Notas.findById(request.params.id, function(err, doc){
    response.json(doc);
  }); 
});

app.put('/notas', function(request,response){
   //console.log("antes de coge datos editar"+request.query._id);
   //console.log(request.query.title);
   if(request.query.title!=null){
       Notas.findById(request.query._id, function(err, doc){
          doc.description=request.query.description;
          doc.content=request.query.content;
        doc.title=request.query.title;
        
        doc.save(function(err){
          if(!err){
            console.log('Actualizado');
          }else{
            console.log('Error al actualizar');
          }
        }); 
      });  
   }

});
app.put('/usuarios', function(request,response){
   //console.log("antes de coge datos editar"+request.query._id);
   //console.log(request.query.title);
   if(request.query.name!=null){
       Usuarios.findById(request.query._id, function(err, doc){
          doc.name=request.query.name;
          doc.bio=request.query.bio;
          doc.email=request.query.email;
        doc.save(function(err){
          if(!err){
            console.log('Actualizado');
          }else{
            console.log('Error al actualizar');
          }
        }); 
      });  
   }

});

//recogerá el id de la nota que pinchamos para borrarla de la base de datos
//app.get('/notas/borrar/:id', function(request, response){
app.delete('/notas/:id', function(request, response){
  Notas.remove({_id:request.params.id},function(err){
    if(err){
      throw err;
    }else{
      console.log('Documento eliminado');
    }
  });
  
  /*Notas.findById(request.params.id, function(err, doc){
    /*Notas.findById(request.params.id, function(err, doc){*/
    //doc ya tendrá el contenido de la nota que queremos borrar
  /*  doc.remove(function(){
        console.log('Documento eliminado');
    });

  }); */
});
app.delete('/usuarios/:id', function(request, response){
  Usuarios.remove({_id:request.params.id},function(err){
    if(err){
      throw err;
    }else{
      console.log('Usuario eliminado');
    }
  });
});
app.get('/usuarios/:id', function(request, response){
  Usuarios.findById(request.params.id, function(err, doc){
    response.json(doc);
  }); 
});

app.post('/notas', function(request, response){
  //response.json(notas);
  console.log('graba');

  var notas = new Notas({
    category:
      {
        name: "Ipsum",
        icon: "ipsum"
      },
    description: request.query.description,
    title: request.query.header,
    content: request.query.contenido
  });

  notas.save(function(err){
    if(!err){
      console.log('Creado');
    }else{
      console.log('Error al crear');
    }
  });
  
});

app.post('/usuarios', function(request, response){
  console.log('grabaUsuarios');

  var users = new Usuarios({
    
    name: request.query.name,
    bio: request.query.bio,
    email: request.query.email

  });

  users.save(function(err){
    if(!err){
      console.log('Creado');
    }else{
      console.log('Error al crear');
    }
  });
  
});

app.listen(9000);


