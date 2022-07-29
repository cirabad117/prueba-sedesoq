class AuthControl{
   
    constructor() {
        
        var t=this;
        this.usuarioActivo=null;
        /**
         * para detectar los cambios en el inicio de sesión utilizamos la función
         * de firebase auth y almacenamos la información del usuario
         */
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                t.setUsuario(user);
            }else{
                t.setUsuario(null);
            }
        });
        
    
    }

    setUsuario(user) {
        this.usuarioActivo=user;
      
    }
    //Función que retorna el objeto firebaseUser tal cual.
    getUsuario() {
        return this.firebaseUser;
    }
    
}