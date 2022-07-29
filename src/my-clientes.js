import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-input/paper-input.js';
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
                    <div class="card-header d-flex">
                        <h4>Clientes</h4>
                        <button type="button" class="btn btn-primary ml-auto" on-click="cambiaNuevoCliente">agregar cliente</button>
                       
                    </div>

                    <template is="dom-if" if="{{bolCliente}}" restamp>
                        
                        <paper-input id="txt-rz" label="Razón social" value="{{razon}}"></paper-input>
                        <paper-input id="txt-dir" label="Dirección" value="{{direccion}}"></paper-input>
                        <paper-input id="txt-tel" label="Teléfono" value="{{telefono}}"></paper-input>

                        <div class="d-flex">
                            <button type="button" class="btn btn-success m-1" on-click="accionaNuevoCliente">guardar</button>
                            <button type="button" class="btn btn-secondary m-1" on-click="cambiaNuevoCliente">cancelar</button>

                        </div>
                        
                    </template>


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
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template is="dom-repeat" id="repeat-clientes" items="[[listaClientes]]">
                                                <tr>
                                                    <td>[[item.razon]]</td>
                                                    <td>[[item.direccion]]</td>
                                                    <td>[[item.telefono]]</td>
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
            

        `;
    }

    static get properties() {
        return {
            listaClientes:{type:Array, notify:true,value:[]},
            nuevoClientes:{type:Array, notify:true,value:[]},
            bolCliente:{type:Boolean, notify:true, value:false},

            razon:{type:String, notify:true},
            direccion:{type:String, notify:true},
            telefono:{type:String, notify:true}

        }
    }
    
    static get observers() {
        return [
            '_changed(listaClientes,listaClientes.*)'
        ];
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
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
       console.log("vista clientes",arr);
       this.set("listaClientes",arr);
       
       
    }

    _changed(arr){
        
            console.log("_changed",arr);
            var nuevo=[];
            for(var i=0;i<arr.length;i++){
                nuevo.push(arr[i]);
            }
            this.set("nuevoClientes",nuevo);
            console.log("nuevoClientes",this.nuevoClientes);
            this.shadowRoot.querySelector("#repeat-clientes").render();
        
        
    }

    cambiaNuevoCliente(){
        this.set("bolCliente",!this.bolCliente);
    }

    accionaNuevoCliente(){
        var nuevoRazon=this.razon;
        var nuevoDir=this.direccion;
        var nuevoTel=this.telefono;

        var t=this;

        var funcionCampos=function(accion) {
            if(accion.estatus=="error"){
                if(accion.campo){
                    
                    var cajaTexto=t.shadowRoot.querySelector(accion.campo);
                   
                    cajaTexto.errorMessage=accion.mensaje;
                    return cajaTexto.invalid=true;
                    
                }
            }else{
                var cajaTexto=t.shadowRoot.querySelector(accion.campo);
                cajaTexto.errorMessage="";
                cajaTexto.invalid=false;
            }
        }

        var funcionExito=function () {
            console.log("cliente agregado con exito")
            
        }
        var funcionError=function () {
            console.log("no se guardo el cliente")
        }

        objClientes.agregaCliente(nuevoRazon,nuevoDir,nuevoTel,funcionCampos,funcionExito,funcionError);
       

    }
}

customElements.define('my-clientes', MyClientes);