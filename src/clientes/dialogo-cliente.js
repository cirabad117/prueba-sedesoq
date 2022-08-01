import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { DialogLayoutMixin } from "../mixins/dialog-layout-mixin.js";

import '@polymer/paper-input/paper-input.js';

class DialogoCliente extends DialogLayoutMixin(PolymerElement) {
    static get template() {
        return html`
            <style>
                :host{
                    display:block;
                    padding:10px;
                }
            </style>
            
            <paper-input id="txt-rz" label="Razón social" value="{{razon}}"></paper-input>
            <paper-input id="txt-dir" label="Dirección" value="{{direccion}}"></paper-input>
            <paper-input id="txt-tel" label="Teléfono" value="{{telefono}}"></paper-input>

        `;
    }

    static get properties() {
        return {
            objCliente:{type:Object, notify:true},

        }
    }

    constructor(obj) {
        super();

        if(obj){
            this.set("objCliente",obj);
            this.set("razon",obj.razon);
            this.set("direccion",obj.direccion);
            this.set("telefono",obj.telefono);
        }
    }

    accionaNuevoCliente(){
        if(!this.razon || this.razon==null || this.razon.trim()==""){
            return this.shadowRoot.querySelector("#txt-rz").invalid=true;
        }else{
            this.shadowRoot.querySelector("#txt-rz").invalid=false;
        }
        if(!this.direccion || this.direccion==null || this.direccion.trim()==""){
            return this.shadowRoot.querySelector("#txt-dir").invalid=true;
        }else{
            this.shadowRoot.querySelector("#txt-dir").invalid=false;
        }
        if(!this.telefono || this.telefono==null || this.telefono.trim()==""){
            return this.shadowRoot.querySelector("#txt-tel").invalid=true;
        }else{
            this.shadowRoot.querySelector("#txt-tel").invalid=false;
        }

        var nuevoCliente={
            razon:this.razon,
            direccion:this.direccion,
            telefono:this.telefono
        };

        var t=this;

        if(this.objCliente && this.objCliente!=null){
            var id=this.objCliente.id;
            // actualizamos el cliente seleccionado
            firebase.firestore().collection("clientes").doc(id).set(nuevoCliente,{ merge: true })
            .then(() => {
                console.log("Document successfully written!");
                PolymerUtils.Toast.show("cliente actualizado con exito");
                t.DialogLayout_closeDialog();
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                PolymerUtils.Toast.show("Error al guardar");
            });

        }else{
            // agregamos nuevo cliente con id autogenerado.
            firebase.firestore().collection("clientes").add(nuevoCliente)
            .then((docRef) => {
                PolymerUtils.Toast.show("cliente agregado con exito");
                t.DialogLayout_closeDialog();
    
            }).catch((error) => {
                console.error("Error adding document: ", error);
                PolymerUtils.Toast.show("Error al guardar");
            });
        }
        
       



   

    }
}

customElements.define('dialogo-cliente', DialogoCliente);