class Publicacion{
    constructor(publicaciones){
        this.publicaciones=publicaciones;
    }





    render=()=>{

        let component = document.createElement('div');
        component.className = 'publicacionClass';

        let userCont = document.createElement('div');
        userCont.className = 'username';
        userCont.innerHTML = (
          "@"+this.publicaciones.u
        );

        let publiCont = document.createElement('div');
        publiCont.className = 'publicacion';
        publiCont.innerHTML = this.publicaciones.p;
        publiCont.appendChild(userCont);

        let responderBtn = document.createElement('button');
        responderBtn.className = 'responderBtn'
        responderBtn.innerHTML = "Responder"

///////////////////////
        let comentarioInput = document.createElement('input')
        comentarioInput.type="text";
        comentarioInput.placeholder="Escribe una respuesta";
        comentarioInput.className ="inputComment"

        
        
        

        let containerComentario = document.createElement('div');
        containerComentario.className="containerComentario"

        containerComentario.appendChild(comentarioInput);
        containerComentario.appendChild(responderBtn);

        let comentarioDiv = document.createElement('div');

        let database = firebase.database();

        responderBtn.addEventListener('click', ()=>{
            let commentNuevo = {
                    commentNuevesito:comentarioInput.value
            }
        database.ref("publicacion/"+this.publicaciones.id+"/comentarios").push().set(commentNuevo);
        })
            
   

        database.ref("publicacion/"+this.publicaciones.id+"/comentarios").on("value",function(comentario){

            comentario.forEach(commentNuevo=>{
    
                let valor = commentNuevo.val();
                let message = new Comentario(valor)
                comentarioDiv.appendChild(message.render())
                
                
            })
           
        })





        component.appendChild(publiCont);
        component.appendChild(userCont);
        component.appendChild(comentarioDiv);
        component.appendChild(containerComentario);

        
        return component;
    }
}

