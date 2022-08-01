import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-listbox/paper-listbox.js';

import '@polymer/paper-button/paper-button.js';

import './item-venta.js';


class CarritoVenta extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host{
                    display:block;
                    background-color:var(--paper-grey-200);
                }
            </style>

            <h3>mi carrito</h3>
            <paper-listbox style="overflow-y:scroll;max-height:250px;">
                <template is="dom-repeat" items="{{listaVenta}}" id="repeat-lista">
                    
                    <item-venta item="{{item}}" cantidad="{{item.cantidad}}" subtotal="{{item.subtotal}}" arreglo="{{listaVenta}}" on-modifica="cambiaVenta"></item-venta>
                    
                </template>

            </paper-listbox>

            <h4>Total: {{totalVenta}}</h4> 
            <paper-button style="background-color:var(--paper-green-600);" raised on-click="guardaVenta">guardar</paper-button>
            

        `;
    }

    static get properties() {
        return {
            listaVenta:{type:Array, notify:true,value:[]},
            totalVenta:{type:Number, notify:true}

        }
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

  
    static get observers() {
        return [
            '_getTotal(listaVenta,listaVenta.*)'
        ];
    }

    pushArticulo(item){
        var arreglo=PolymerUtils.cloneObject(this.listaVenta);
        if(!arreglo || arreglo.lenght<=0){
            arreglo=[]
        }else{
            var id=DataHelper.findIndexArrayWithKey(arreglo,item.id,"idProducto");
            if(id!=-1){

                var pro=arreglo[id];
                var sumado=pro.cantidad+1;
                var sub=item.precio*sumado;
                arreglo[id]={idProducto:item.id,producto:item.nombre,precio:item.precio,cantidad:sumado,subtotal:sub}
            }else{
                arreglo.push({idProducto:item.id,producto:item.nombre,precio:item.precio,cantidad:1,subtotal:item.precio});
            }

        }

        this.set("listaVenta",arreglo);
    }
    cambiaVenta(e){
        var nuevo=e.detail.arreglo;
        var li=PolymerUtils.cloneObject(nuevo);
        this.set("listaVenta",li);
       
    }

    


    guardaVenta(){
        var t=this;
        this.dispatchEvent(new CustomEvent('guarda-venta', {
            detail: {
                total:t.totalVenta,
                lista:t.listaVenta
            }
        }));
    }

    _getTotal(arr){
        console.log("_getTotal",arr);
        if(arr && arr.length>0){
            var total=0;
            for(var i=0;i<arr.length;i++){
                total=total+arr[i].subtotal;
            }
            this.set("totalVenta",total);

        }else{
            this.set("totalVenta",0);
        }
    }
}

customElements.define('carrito-venta', CarritoVenta);