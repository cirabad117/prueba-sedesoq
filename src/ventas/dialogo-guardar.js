import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

import '../bootstrap.js';
import { DialogLayoutMixin } from '../mixins/dialog-layout-mixin.js';
class DialogoGuardar extends DialogLayoutMixin(PolymerElement) {
    static get template() {
        return html`
            <style include="bootstrap">
                :host{
                    display:block;
                    padding:10px;
                }
            </style>
            
            <h6>Cliente elegido <span class="badge badge-success">[[cliente.razon]]</span></h6>
            <paper-listbox style="overflow-y:scroll;max-height:100px;">
                <template is="dom-repeat" items="[[clientes]]" as="cli">
                    
                    <paper-icon-item on-click="eligeCliente">
                       <iron-icon slot="item-icon" icon="account-circle"></iron-icon> 
                        <paper-item-body>
                            <div>[[cli.razon]]</div>
                        </paper-item-body>
                    </paper-icon-item>
                    
                </template>

            </paper-listbox>
            
           

            <h6>ticket de compra</h6>
            <paper-listbox style="overflow-y:scroll;max-height:170px;">
                <template is="dom-repeat" items="[[venta]]">
                    
                    <paper-icon-item >
                       <span slot="item-icon">[[item.cantidad]]</span> 
                        <paper-item-body>
                            [[item.producto]]
                        </paper-item-body>
                    </paper-icon-item>
                    
                </template>

            </paper-listbox>

            <h6>Total: {{total}}</h6> 
                                    


        `;
    }

    static get properties() {
        return {
            clientes:{type:Array, notify:true, value:[]},
            cliente:{type:Object, notify:true},
            venta:{type:Array, notify:true, value:[]},
            total:{type:Number, notify:true},
            productos:{type:Array, notify:true, value:[]},
        }
    }

    constructor(cl,ve,to,pr) {
        super();

        if(cl){
            this.set("clientes",cl);

           
        }
        if(ve){
            this.set("venta",ve);
        }
        if(to){
            this.set("total",to);
        }

        if(pr){
            this.set("productos",pr)
        }
    }

    eligeCliente(e){
        var elegido=e.model.cli;
        this.set("cliente",elegido);
    }

    guardaVenta(){
        if(!this.cliente || this.cliente==null){
            return PolymerUtils.Toast.show("Selecciona un cliente para continuar");
        }

        var venta={
            fecha:firebase.firestore.FieldValue.serverTimestamp(),
            cliente:this.cliente,
            totalVenta:this.total,
            listaArticulos:this.venta
        };


        var t=this;
        firebase.firestore().collection("ventas").add(venta)
        .then((docRef) => {
            PolymerUtils.Toast.show("Venta guardada con exito");
            t.actualizaInventario(t.venta);
            t.DialogLayout_closeDialog();
           
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            PolymerUtils.Toast.show("Error al guardar");
        });
    }

    actualizaInventario(arr){
        console.log("venta",arr);

        var db=firebase.firestore();
        
        var batch = db.batch();
        
       
        
        
        for (var i=0;i<arr.length;i++){

            var idProducto=arr[i].idProducto;
            var cantidad=arr[i].cantidad;

            var prod=PolymerUtils.cloneObject(this.productos);

            var id=DataHelper.findIndexArrayWithKey(prod,idProducto,"id");
            var editar=prod[id];
            console.log("editar",editar);

            var nuevaCantidad=editar.inventario-cantidad;

            var sfRef = db.collection("productos").doc(idProducto);
            batch.update(sfRef, {"inventario": nuevaCantidad});
            
            
        }

        batch.commit().then(() => {
            console.log("se actualizaron las cantidades");
        });


    }

    firebaseTrigger(id,cantidad){


       
    }
}

customElements.define('dialogo-guardar', DialogoGuardar);