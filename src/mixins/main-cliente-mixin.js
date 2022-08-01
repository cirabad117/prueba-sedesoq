import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

let internalMixinCliente = function(superClass) {
    return class extends superClass {
        constructor() {
            super();
            var context=this;
            DataController.addOmnipotentNegocioCallback(function(datosNegocio){
                if(datosNegocio){
                    context.set("_cliente",datosNegocio);
                }else{
                    context.set("_cliente",null);
                }
                context.set("_loadedCliente",true);
            });

            
        }
        
        static get properties() {
            return {
                _cliente:{type:Object,notify:true,value: null},
                //,observer:"_revisaUsuarios"
                _loadedCliente:{type:Boolean,notify:true,value: false},

                _usuarios:{type:Array, notify:true, value:[]},
                _loadedUsuarios:{type:Boolean,notify:true,value: false}
            };
        }

        _revisaUsuarios(obj){
            var context=this;



            // setTimeout(() => {
            //     if(obj && obj!=null){
            //         modeloUsuarios.addListaUsuariosCallback(function(listaRecibida){
            //             if(listaRecibida){
                            
            //                 console.warn("recibimos usuarios en mixin",listaRecibida);
            //                 context.set("_usuarios",listaRecibida);
            //             }else{
            //                 context.set("_usuarios",null);
            //                 console.error("no llego el listener al mixin");
        
            //             }
            //             context.set("_loadedUsuarios",true);
            //         });
            //     }
            // }, 1000);
            
        }
    }
}
export const MainClienteMixin = dedupingMixin(internalMixinCliente);