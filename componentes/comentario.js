class Commentario{


    constructor(comentario){

        this.comentario=comentario;

    }


    render=()=>{

        let component = document.createElement("div");
        component.className="comment"
        let comment = document.createElement("div");
        comment.className="commentinside"
        comment.innerHTML=this.comentario.comentarioPublicado;
        component.appendChild(comment);
        return component;
    }

}