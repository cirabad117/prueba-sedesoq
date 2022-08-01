import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

let internalMixinAuth = function(superClass) {
	return class extends superClass {
		constructor() {
			super();
			var context=this;
			DataHelper.addDataUserCallback(function(loggedUser){
				if(loggedUser){
					context.set("_loggedUser",loggedUser);
				}else{
					context.set("_loggedUser",null);
				}
				context.set("_loadedUser",true);
			});

			
		}
		
		_loggedUserHasPath(path,o1,o2){
			var user=this._loggedUser;
			if(o1 && o2){
				if(o1!=o2){
					return false;
				}
			}
			return (user && user.accessList && user.accessList[path]);
		}
		
		static get properties() {
			return {
				_loggedUser:{type:Object,notify:true,value: null},
				_loadedUser:{type:Boolean,notify:true,value: false},

				
			};
		}
		
		signOut(success){
			var dialog=PolymerUtils.Dialog.createAndShow({
				type: "modal",
				saveSpinner:{
					message: "Registrando Usuario",
					saving: true
				},
				style:"width: 400px; height: 300px;",
				smallStyle: "width: 95% !important;"
			});

			firebase.auth().signOut().then(function() {
				dialog.close();
				if(success){
					success();
				}
				// NavigationUtils.navigate("login");

			}).catch(function(error) {

			});
		}
		
		signupPassword(claveNegocio,data,successCallback){
			var dialog=PolymerUtils.Dialog.createAndShow({
				type: "modal",
				saveSpinner:{
					message: "Registrando Usuario",
					saving: true
				},
				style:"width: 400px; height: 300px;",
				smallStyle: "width: 95% !important;"
			});

			var id=claveNegocio;
			var t=this;
			
			firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(function(result){
				var user = result.user;
				user.updateProfile({
					displayName: data.displayName
				}).then(function() {
					console.log("update profile")
				}).catch(function(error) {
					console.error("Error updating profile",error);
				});
				
				var redUser={
					displayName: data.displayName,
					email:user.email,
					uid:user.uid,
					nombre:data.nombre,
					accessList:data.accessList,
					password:data.password
				};
				if(data.esPropietario){
					redUser["esPropietario"]=data.esPropietario;
					redUser["_esAdmin"]=true;
				}
				t.saveDataUser(id,redUser);
				dialog.close();
				if(successCallback){
					successCallback();
				}
			}).catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				dialog.close();
				DataHelper.auth.showErrorToast(error);
			});
		}
		
		loginPassword(data,successCallback,errorCallback){
			
			var di=PolymerUtils.Dialog.createAndShow({
				type: "modal",
				saveSpinner:{
					message: "Iniciando Sesión",
					saving: true
				},
				style:"width: 400px; height: 300px;",
				smallStyle: "width: 95% !important;"
			});

			
			
			firebase.auth().signInWithEmailAndPassword(data.email, data.password)
			.then(function(result){
				var user = result.user;
				
				// DataHelper.auth.saveDataUser(user);
				if(successCallback){
					successCallback();
				}
			}).catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				var returnError=DataHelper.auth.showErrorToast(error);
				di.close();
				if(errorCallback){
					errorCallback(returnError);
				}
			});
		}

		creaNuevoUsuario(objUser,callbacks) {
			var t=this;
			var insertNewUser = firebase.functions().httpsCallable('insertNewUser');
			insertNewUser(objUser).then(function (result) {
				if (callbacks && callbacks.finished) {
					callbacks.finished();
				}
				if (result.data.user) {
					if (callbacks && callbacks.success) {
						callbacks.success();
					}
					PolymerUtils.Toast.show("¡Usuario registrado con éxito!");
				} else {
					if (callbacks && callbacks.fail) {
						callbacks.fail();
					}
					DataHelper.auth.showErrorToast(result.data.error);
				}
			});
			
		}

		editaUsuario(user, callbacks) {
		
			var updateUser = firebase.functions().httpsCallable('updateUser');

            updateUser(user).then(function(result) {
                if(callbacks && callbacks.finished){
                    callbacks.finished();
                }
                if(result.data.user){
                    if(callbacks && callbacks.success){
                        callbacks.success();
                    }   
                    PolymerUtils.Toast.show("¡Usuario actualizado con éxito!");
                }
                else{
                    if(callbacks && callbacks.fail){
                        callbacks.fail();
                    }
					DataHelper.auth.showErrorToast(result.data.error);
                }
            });
		}

		borraUsuario(user, callbacks) {
			var borraUser = firebase.functions().httpsCallable('deleteUser');
            borraUser(user).then(function(result) {
                if(callbacks && callbacks.finished){
                    callbacks.finished();
                }
                if(result.data.user){
                    if(callbacks && callbacks.success){
                        callbacks.success();
                    }   
                    PolymerUtils.Toast.show("Usuario eliminado de la plataforma");
                }
                else{
                    if(callbacks && callbacks.fail){
                        callbacks.fail();
                    }
                    DataHelper.auth.showErrorToast(result.data.error);
                }
            });
		}

		saveDataUser(negocio,firebaseUser) {
			
			var user = PolymerUtils.fixDataForFirebase(firebaseUser, !0);

			firebase.firestore().collection("_clientes").doc(negocio).collection("usuarios").doc(firebaseUser.uid).set(user)
			.then(() => {
				window.location.href = "/";
			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});
		
		}
	}
}
export const AuthMixin = dedupingMixin(internalMixinAuth);