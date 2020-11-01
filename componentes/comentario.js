class Comentario{


    constructor(comentario){

        this.comentario=comentario;

    }


    render=()=>{

        let component = document.createElement("div");
        component.className="comment"
        let comment = document.createElement("div");
        comment.innerHTML=this.comentario.commentNuevesito;
        component.appendChild(comment);
        return component;
    }

}