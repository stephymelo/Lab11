const publicacionFeed=document.getElementById('publicadoFeed');
const publicarBoton=document.getElementById('publicar');
const publicacionInput=document.getElementById('publicacion');
const usuarioInput=document.getElementById('usuario');
const database = firebase.database();
const publicacionContainer = document.getElementById('publicacionContainer');




publicar = () => {

    if(usuarioInput.value === '' || publicacionInput.value === ''  ){
        alert("esta vacio wey");
        return;
    }


    let referencia = database.ref('publicacion').push()
    let publicacionNueva = {
    
        id:referencia.key,
        u : usuarioInput.value,
        p : publicacionInput.value,


    };
    referencia.set(publicacionNueva);
    usuarioInput.value = '';
    publicacionInput.value = '';

}
publicarBoton.addEventListener('click',publicar);
//Lectura
database.ref('publicacion').on('value',function(data){
    publicacionContainer.innerHTML="";
    data.forEach(
        publicacionNueva => {
            let valor = publicacionNueva.val();
            let publica = new Publicacion(valor);
            publicacionContainer.appendChild(publica.render());
        }
    )
});



