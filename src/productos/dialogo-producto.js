import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { DialogLayoutMixin } from '../mixins/dialog-layout-mixin';


class DialogoProducto extends DialogLayoutMixin(PolymerElement) {
    static get template() {
        return html`
            <style>
                :host{
                    display:block;
                    padding:10px;
                }
            </style>
            
            <paper-input id="txt-no" label="nombre" value="{{nombre}}"></paper-input>
            <paper-input id="txt-pre" type="number" label="Precio venta" value="{{precio}}"></paper-input>
            <paper-input id="txt-cos" type="number" label="costo" value="{{costo}}"></paper-input>
            <paper-input id="txt-inv" type="number" label="cantidad inventario" value="{{inventario}}"></paper-input>


        `;
    }

    static get properties() {
        return {
            objProd:{type:Object, notify:true},
        }
    }

    constructor(obj) {
        super();

        if(obj){
            this.set("objProd",obj);

            this.set("nombre",obj.nombre);
            this.set("precio",obj.precio);
            this.set("costo",obj.costo);
            this.set("inventario",obj.inventario);
        }
        
    }

    ready() {
        super.ready();
    }

    accionaNuevoProd(){
        if(!this.nombre || this.nombre==null || this.nombre.trim()==""){
            return this.shadowRoot.querySelector("#txt-no").invalid=true;
        }else{
            this.shadowRoot.querySelector("#txt-no").invalid=false;
        }

        if(!this.precio || this.precio==null || Number(this.precio)<=0){
            return this.shadowRoot.querySelector("#txt-pre").invalid=true;
        }else{
            this.shadowRoot.querySelector("#txt-pre").invalid=false;
        }
        if(!this.costo || this.costo==null || Number(this.costo)<=0){
            return this.shadowRoot.querySelector("#txt-cos").invalid=true;
        }else{
            this.shadowRoot.querySelector("#txt-cos").invalid=false;
        }
        if(!this.inventario || this.inventario==null || Number(this.inventario)<=0){
            return this.shadowRoot.querySelector("#txt-inv").invalid=true;
        }else{
            this.shadowRoot.querySelector("#txt-inv").invalid=false;
        }
       

        var nuevoProd={
            nombre:this.nombre,
            precio:Number(this.precio),
            costo:Number(this.costo),
            inventario:Number(this.inventario),
        };

        var t=this;

        if(this.objProd && this.objProd!=null){
            var idPro=this.objProd.id;
            firebase.firestore().collection("productos").doc(idPro).set(nuevoProd,{ merge: true })
            .then(() => {
                console.log("Document successfully written!");
                PolymerUtils.Toast.show("productos actualizado con exito");
                t.DialogLayout_closeDialog();
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                PolymerUtils.Toast.show("Error al guardar");
            });

        }else{
            // agregamos nuevo cleinte con id autogenerado.
        firebase.firestore().collection("productos").add(nuevoProd)
        .then((docRef) => {
            PolymerUtils.Toast.show("producto agregado con exito");
            t.DialogLayout_closeDialog();
           
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            PolymerUtils.Toast.show("Error al guardar");
        });

        }




        
       



   

    }
}

customElements.define('dialogo-producto', DialogoProducto);