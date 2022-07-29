class ModeloClientes{
    constructor(){
        this.listaClientes=[];

    }

    /**realizamos la consulta de clientes a la base de datos*/
    firebaseGetListaClientes(){
        var arr=[];
         firebase.firestore().collection("clientes").onSnapshot((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                var item=doc.data();
                var cliente={
                    _id:doc.id,
                    razon:item.razon,
                    direccion:item.direccion,
                    telefono:item.telefono
                }
                arr.push(cliente);
            });
            
        });

        return arr;
    }

    setListaClientes(clientes){
        console.log("se reciben clientes",clientes);
        this.listaClientes=clientes;
    }

    getListaClientes(){
        
        return this.listaClientes;
    }


    agregaCliente(rz,dir,tel,fnCampos,fnExito,fnError){
        console.log("modelo-clientes",rz,dir,tel);
        var estatus=null;
        if(!rz || rz==null || rz.trim()==""){
            return fnCampos({estatus:"error",campo:"#txt-rz",mensaje:"la razon social no es válida"});
        }else{
            fnCampos({estatus:"ok",campo:"#txt-rz",mensaje:""});
        }
        if(!dir || dir==null || dir.trim()==""){
            return fnCampos({estatus:"error",campo:"#txt-dir",mensaje:"la dirección no es válida"});
        }else{
            fnCampos({estatus:"ok",campo:"#txt-dir",mensaje:""});
        }
        if(!tel || tel==null || tel.trim()==""){
            return fnCampos({estatus:"error",campo:"#txt-tel",mensaje:"el teléfono no es válido"});
        }else{
            fnCampos({estatus:"ok",campo:"#txt-tel",mensaje:""});
        }

        var nuevoCliente={
            razon:rz,
            direccion:dir,
            telefono:tel
        };

        

        firebase.firestore().collection("clientes").add(nuevoCliente)
        .then((docRef) => {
            fnExito();
        })
        .catch((error) => {
            fnError();
        });
        return estatus;


    }
}