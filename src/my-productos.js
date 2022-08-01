import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

import './productos/dialogo-producto.js';
import './bootstrap.js';

class MyProductos extends PolymerElement {
    static get template() {
        return html`
            <style include="bootstrap">
                :host{
                    display:block;
                    
                }
            </style>

            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <h4>Productos</h4>
                       
                    </div>



                    <div class="card-body">
                        <div class="row">

                            <div class="col-md-12">
                                <div class="card table-responsive" >
                                    <table class="table table-hover table-sm" >
                                        <thead class="thead-dark" style="position: sticky;top: 0">
                                            <tr>
                                                <th>nombre</th>
                                                <th>Precio</th>
                                                <th>costo</th>
                                                <th>inventario</th>
                                                <th>acciones</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template is="dom-repeat" items="[[listaProds]]">
                                                <tr>
                                                    <td>[[item.nombre]]</td>
                                                    <td>[[item.precio]]</td>
                                                    <td>[[item.costo]]</td>
                                                    <td>[[item.inventario]]</td>
                                                    <td>
                                                        <paper-icon-button icon="create" on-click="editaProd"></paper-icon-button>
                                                        <paper-icon-button icon="clear" on-click="eliminaProd"></paper-icon-button>
                                                        
                                                    </td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="position: fixed; bottom: 24px; right: 24px;">
                <div style="position: relative; cursor:pointer;" on-clicK="abreNuevo">
                    <paper-fab style="color:white; background-color:var(--paper-green-500);" icon="add"></paper-fab>
                </div>
            </div>

        `;
    }

    static get properties() {
        return {
            listaProds:{type:Array, notify:true,value:[]},
        }
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
       
       
       
       
    }

    abreNuevo(){
        PolymerUtils.Dialog.createAndShow({
			type: "modal",
            title:"Nuevo Producto",
			element:"dialogo-producto",
            style:"width:300px;",
			positiveButton: {
                text: "Guardar cambios",
                action: function(dialog, element) {
                    element.accionaNuevoProd();
                }
            },
            negativeButton: {
                text: "Cerrar",
                action: function(dialog, element) {
                    dialog.close();
                }
            }
		});
    }

    editaProd(e){
        var elegido=e.model.item;
        PolymerUtils.Dialog.createAndShow({
			type: "modal",
            title:"producto elegido",
            params:[elegido],
			element:"dialogo-producto",
            style:"width:300px;",
			positiveButton: {
                text: "Guardar cambios",
                action: function(dialog, element) {
                    element.accionaNuevoProd();
                }
            },
            negativeButton: {
                text: "Cerrar",
                action: function(dialog, element) {
                    dialog.close();
                }
            }
		});
    }

    eliminaProd(e){
        var elegido=e.model.item;
        PolymerUtils.Dialog.createAndShow({
			type: "modal",
            title:"eliminar Producto",
            message:"El producto "+elegido.nombre+" será borrado del registro. ¿Desea continuar?",
            style:"width:300px;",
			positiveButton: {
                text: "Eliminar",
                action: function(dialog, element) {
                    var id=elegido.id;
                    firebase.firestore().collection("productos").doc(id).delete().then(() => {
                        dialog.close();
                        PolymerUtils.Toast.show("producto eliminado");
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                        PolymerUtils.Toast.show("Error. Intentelo más tarde");
                    });
                }
            },
            negativeButton: {
                text: "Cerrar",
                action: function(dialog, element) {
                    dialog.close();
                }
            }
		});
    }

 


   
}

customElements.define('my-productos', MyProductos);