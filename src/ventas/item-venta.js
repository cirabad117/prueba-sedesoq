import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

class ItemVenta extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host{
                    display:block;
                }
            </style>
            
            <paper-icon-item >
                <div slot="item-icon">
                    <span>{{cantidad}}</span>
                </div>
                <paper-item-body>
                    <div> {{item.producto}}</div>
                    <div secondary>subtotal: {{subtotal}}</div>
                </paper-item-body>
                        
                <paper-icon-button icon="add" on-click="suma"></paper-icon-button>
                <paper-icon-button icon="remove" on-click="resta"></paper-icon-button>
                        
                <paper-icon-button icon="delete" on-click="borra"></paper-icon-button>
                        
            </paper-icon-item>

        `;
    }

    static get properties() {
        return {
            cantidad:{type:Number, notify:true},
            subtotal:{type:Number, notify:true},
            dato:{type:Object, notify:true,observer:"actualiza"},
            item:{type:Object, notify:true},
            arreglo:{type:Array, notify:true, value:[]}

        }
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

    actualiza(obj){
        this.set("item",obj);
    }



    suma(){
        
        var item=this.item;
        console.log("suma",item);
        var nuevaCantidad=item.cantidad+1;

        item.cantidad=nuevaCantidad;
        item.subtotal=nuevaCantidad*item.precio;
        var arr=PolymerUtils.cloneObject(this.arreglo);
        var index=DataHelper.findIndexArrayWithKey(arr,item.idProducto,"idProducto");
        arr[index]=item;
        this.disparaCambio(arr);
    }

    resta(){
        
        var item=this.item;
        console.log("resta",item);

        var arr=PolymerUtils.cloneObject(this.arreglo);
        
        var index=DataHelper.findIndexArrayWithKey(arr,item.idProducto,"idProducto");

        console.log(arr,index)
        var nuevaCantidad=item.cantidad-1;

        if(nuevaCantidad<=0){
            arr.splice(index,1);
            this.disparaCambio(arr);

        }else{
            item.cantidad=nuevaCantidad;
            item.subtotal=nuevaCantidad*item.precio;
           
            arr[index]=item;
            this.disparaCambio(arr);
        }

       
    }

    borra(){
        var item=this.item;
        console.log("borra",item);

        var arr=PolymerUtils.cloneObject(this.arreglo);
        var index=DataHelper.findIndexArrayWithKey(arr,item.idProducto,"idProducto");
        arr.splice(index,1);
        this.disparaCambio(arr);
    }


    disparaCambio(arr){
        console.log("se dispara cambio",arr);
        this.dispatchEvent(new CustomEvent('modifica', {
            detail: {
                arreglo:arr
            }
        }));
    }








}

customElements.define('item-venta', ItemVenta);