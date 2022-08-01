import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-icon-button/paper-icon-button.js';


import './clientes/dialogo-cliente.js';

import './bootstrap.js';


class MyClientes extends PolymerElement {
    static get template() {
        return html`
            <style include="bootstrap">
                :host{
                    display:block;
                }
            </style>

            <div class="container-fluid">
                <div class="card">
                    <div class="card-header ">
                        <h4>Clientes</h4>
                       
                    </div>

                    <div class="card-body">
                        <div class="row">

                            <div class="col-md-12">
                                <div class="card table-responsive" >
                                    <table class="table table-hover table-sm" >
                                        <thead class="thead-dark" style="position: sticky;top: 0">
                                            <tr>
                                                <th>Razón Social</th>
                                                <th>Dirección</th>
                                                <th>Telefono</th>
                                                <th>acciones</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template is="dom-repeat" id="repeat-clientes" items="[[listaClientes]]">
                                                <tr>
                                                    <td>[[item.razon]]</td>
                                                    <td>[[item.direccion]]</td>
                                                    <td>[[item.telefono]]</td>
                                                    <td>
                                                        
                                                        <paper-icon-button icon="create" on-click="editaCliente"></paper-icon-button>
                                                        <paper-icon-button icon="clear" on-click="eliminaCliente"></paper-icon-button>
                                                        
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
                    <paper-fab style="color:white; background-color:var(--paper-blue-500);" icon="add"></paper-fab>
                </div>
            </div>
            

        `;
    }

    static get properties() {
        return {
            listaClientes:{type:Array, notify:true,value:[]},


        }
    }
    
  

   

    ready() {
        super.ready();
       
       
       
    }

    abreNuevo(){
        PolymerUtils.Dialog.createAndShow({
			type: "modal",
            title:"Nuevo Cliente",
			element:"dialogo-cliente",
            style:"width:300px;",
			positiveButton: {
                text: "Guardar cambios",
                action: function(dialog, element) {
                    element.accionaNuevoCliente();
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

    editaCliente(e){
        var elegido=e.model.item;
        PolymerUtils.Dialog.createAndShow({
			type: "modal",
            title:"Cliente elegido",
            params:[elegido],
			element:"dialogo-cliente",
            style:"width:300px;",
			positiveButton: {
                text: "Guardar cambios",
                action: function(dialog, element) {
                    element.accionaNuevoCliente();
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

    eliminaCliente(e){
        var elegido=e.model.item;
        PolymerUtils.Dialog.createAndShow({
			type: "modal",
            title:"eliminar cliente",
            message:"El cliente "+elegido.razon+" será borrado del registro. ¿Desea continuar?",
            style:"width:300px;",
			positiveButton: {
                text: "Eliminar",
                action: function(dialog, element) {
                    var id=elegido.id;
                    firebase.firestore().collection("clientes").doc(id).delete().then(() => {
                        dialog.close();
                        PolymerUtils.Toast.show("cliente eliminado");
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

customElements.define('my-clientes', MyClientes);