import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { AuthMixin } from "./mixins/auth-mixin.js";

import '@polymer/paper-input/paper-input.js';



import './bootstrap.js';
import './shared-styles.js';
import { UtilsMixin } from './mixins/utils-mixin.js';
import { DialogLayoutMixin } from './mixins/dialog-layout-mixin.js';

class MyInicioSesion extends DialogLayoutMixin(UtilsMixin(AuthMixin(PolymerElement))) {
    
    static get template() {
        return html`
            <style include="bootstrap shared-styles">
                :host{
                    display:block;
                }
              
            </style>
            
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                       

                                <paper-input id="txtUser" label="usuario" value="{{user}}" error-message="valor inválido"></paper-input>

                    

                                <paper-input id="txtPass" type="password" label="contraseña" value="{{pass}}" error-message="valor inválido"></paper-input>

                                <hr class="my-4">

                                <paper-button on-click="iniciaSesion" style="margin: 0 !important;" raised class="btn btn-lg btn-primary btn-block">acceder</paper-button>

                              

                           
                        
                    </div>
                </div>
            </div>

        `;
    }

    static get properties() {
        return {
            email:{type:String, notify:true},
            user:{type:String, notify:true},
            pass:{type:String, notify:true},
            _loggedUser:{type:Object, notify:true}

        };
    }

 

    iniciaSesion(){



        if(!this.user || this.user==null || this.user.trim()==""){
            return this.$.txtUser.invalid=true;
        }else{
            this.$.txtUser.invalid=false;
        }

        if(!this.pass || this.pass==null || this.pass.trim()==""){
            return this.$.txtPass.invalid=true;
        }else{
            this.$.txtPass.invalid=false;
        }

        var data={
            email:this.user,
            password:this.pass
        }

        var t=this;
        var su=function() {
           
            window.location.reload();
            
            t.DialogLayout_closeDialog();
            t.set("email",null);
            t.set("pass",null);
            
        };
        var er=function() {
            PolymerUtils.Toast.show("error al iniciar sesion");
        };

        this.loginPassword(data,su,er);
    }


    // funcionExito(){
    //     this.set("email",null);q
    //     this.set("pass",null);
    //     NavigationUtils.navigate("instalaciones");
    // }

    // funcionError(){
    //     PolymerUtils.Toast.show("error al iniciar sesion");
    // }
}

customElements.define('my-inicio-sesion', MyInicioSesion);