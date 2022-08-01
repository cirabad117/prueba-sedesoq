import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';


let internalMixinDiccionario = function(superClass) {
	return class extends superClass {
		static get properties(){
			return{
				nombresSasi:{
					type:Array, notify:true,
					value:[
						{key:"MANUALES",nombre:"MANUALES Y PROGRAMAS DE IMPLEMENTACIÓN",documentos:[
							{id:"MGSA-01",nombreDoc:"manual",nombreLargo:"MANUAL DE IMPLEMENTACIÓN"},
							{id:"DCI-01",nombreDoc:"progImple",nombreLargo:"PROGRAMA DE IMPLEMENTACIÓN "},
						]},

						
						{key:"POLITICA",nombre:"I.- POLÍTICA",documentos:[
							{id:"DCI-I-01",nombreDoc:"politica",nombreLargo:"POLíTICA",info:{
								imagen:"../../images/docsAyuda/DCI-I-01.png",
								listaItems:[
									{texto:"nombre de la persona que esta convocando a la reunión",posicion:"top:1%;left:45%;"},
									{texto:"La reunión se considera ordinaria siempre que se lleve de manera anual. Para el caso de reuniones extraordinarias serán consideradas aquellas que se realicen por modificaciones a instalaciones, o cuando por algún accidente o incidente tenga que evaluarse.",posicion:"top: 5%;left: 45%;"},
									{texto:"El objetivo del presente formato es determinar que la Política que rige el sistema sea compatible y adecuada a los objetivos y metas de la organización e identificar las oportunidades de mejora de la misma.",posicion:"top: 9%;left: 50%;"},
									{texto:"Son los criterios que debemos observar en la POLÍTICA",posicion:"top: 17%;left: 50%;"},
									{texto:"Al evaluar la política, se deberá llenar con una X los aspectos mínimos con los que cuente la política. En caso de que se contemplen en cierto porcentaje o no se contemple alguno de los aspectos dentro de la política estos deberán considerarse como parte de la mejora continua.",posicion:"top: 17%;left: 70%;"},
									{texto:"Se señala las partes dentro de la política que sufrirán cambio y las modificaciones que se realizarán.",posicion:"top: 52%;left: 57%;"},
								]
							}
						},
							//se genera un campo para llenar toda la informacion, no requiere cambios rapidos, pero debe revisarse
							{id:"FT-I-01",nombreDoc:"revPolitica",nombreLargo:"REVISIÓN DE LA POLÍTICA",info:{
								imagen:"../../images/docsAyuda/FT-I-01.png",
								listaItems:[
									{texto:"Escribir el nombre de la persona que esta convocando a la reunión.",posicion:"top:19%;left:35%;"},
									{texto:"Escribir el número de reunión",posicion:"top:19%;left:73%;"},
									{texto:"Anotar la fecha en que se lleva a cabo la reunión",posicion:"top:23%;left:36%;"},
									{texto:"La reunión se considera ordinaria siempre que se lleve de manera anual. Para el caso de reuniones extraordinarias serán consideradas aquellas que se realicen por modificaciones a instalaciones, o cuando por algún accidente o incidente tenga que evaluarse. ",posicion:"top:23%;left:57%;"},
									{texto:"Colocar el horario de inicio y termino de la reunión",posicion:"top:23%;left:73%;"},
									{texto:"Escribir el lugar donde se está llevando a cabo la reunión",posicion:"top:27%;left:73%;"},
									{texto:"El objetivo del presente formato es determinar que la Política que rige el sistema sea compatible y adecuada a los objetivos y metas de la organización e identificar las oportunidades de mejora de la misma.",posicion:"top:29%;left:32%;"},
									{texto:"Son los criterios que debemos observar en la DCI-I-01 POLÍTICA.",posicion:"top:39%;left:45%;"},
									{texto:"Al evaluar la política, se deberá llenar con una X los aspectos mínimos con los que cuente la política. En caso de que se contemplen en cierto porcentaje o no se contemple alguno de los aspectos dentro de la política estos deberán considerarse como parte de la mejora continua.",posicion:"top:38%;left:70%;"},
									{texto:"Se señala las partes dentro de la política que sufrirán cambio y las modificaciones que se realizarán.",posicion:"top:80%;left:60%;"},

									
								]
							}},
							//formato, no van a cambiar los campos drasticamente
							{id:"PR-I-01",nombreDoc:"establecimientoAdmin",nombreLargo:"ESTABLECIMIENTO, REVISIÓN, DISPONIBILIDAD Y COMUNICACIÓN DE LA POLÍTICA DEL SISTEMA DE ADMINISTRACIÓN"}
						]},


						{key:"PELIGROS",nombre:"II.- IDENTIFICACIÓN DE PELIGROS Y ASPECTOS AMBIENTALES, ANÁLISIS DE RIESGO Y EVALUACIÓN DE IMPACTOS AMBIENTALES",
						documentos:[
							{id:"DCI-II.I-01",nombreDoc:"idenAreasProcesos",nombreLargo:"IDENTIFICACIÓN DE ÁREAS Y PROCESOS"},
							{id:"DCI-II.II-01",nombreDoc:"listadoAspectos",nombreLargo:"LISTADO DE ASPECTOS AMBIENTALES"},
							{id:"DCI-II.III-01",nombreDoc:"matrizEvalAspectos",nombreLargo:"MATRÍZ DE EVALUACIÓN DE ASPECTOS AMBIENTALES"},
							{id:"DCI-II.IV-01",nombreDoc:"resultadosAspectos",nombreLargo:"RESULTADOS DE ASPECTOS AMBIENTALES SIGNIFICATIVOS"},
							{id:"PR-II-01",nombreDoc:"procedimientoAmbientales",nombreLargo:"PROCEDIMIENTO DE IDENTIFICACIÓN Y EVALUACIÓN DE ASPECTOS AMBIENTALES"},
							{id:"PR-II.I-01",nombreDoc:"procedimientoControles",nombreLargo:"PROCEDIMIENTO DE IDENTIFICACIÓN DE PELIGROS, EVALUACIÓN DE RIESGOS Y DETERMINACIÓN DE CONTROLES"}
						]},

						{key:"LEGALES",nombre:"III.- REQUISITOS LEGALES",documentos:[
							{id:"DCI-III-01",nombreDoc:"listadoRequisitos",nombreLargo:"LISTADO DE REQUISITOS LEGALES"},
							{id:"PR-III-01",nombreDoc:"procedimientoRequisitos",nombreLargo:"PROCEDIMIENTO REQUISITOS LEGALES"}
						]},

						{key:"METAS",nombre:"IV.- OBJETIVOS, METAS E INDICADORES",documentos:[
							{id:"DCI-IV-01",nombreDoc:"programaIndicadores",nombreLargo:"PROGRAMA DE OBJETIVOS, METAS E INDICADORES"},
							{id:"FT-IV-01",nombreDoc:"accionesCumplimiento",nombreLargo:"ACCIONES PARA EL CUMPLIMIENTO DE OBJETIVOS "},
							{id:"FT-IV.I-01",nombreDoc:"registroRevision",nombreLargo:"REGISTRO DE REVISIÓN DE OBJETIVOS, METAS E INDICADORES"},
							{id:"PR-IV-01",nombreDoc:"procedimientoElaboración",nombreLargo:"PROCEDIMIENTO PARA LA ELABORACIÓN DE OBJETIVOS, METAS E  INDICADORES"}
						]},

						{key:"FUNCIONES",nombre:"V.- FUNCIONES, RESPONSABILIDADES Y AUTORIDAD",documentos:[
							{id:"DCI-V-01",nombreDoc:"asignacionTecnico",nombreLargo:"ASIGNACIÓN DE REPRESENTANTE TÉCNICO"},
							{id:"DCI-V.I-01",nombreDoc:"escritoTecnico",nombreLargo:"ESCRITO DE ASIGNACIÓN DEL REPREESENTANTE TÉCNICO"},
							{id:"DCI-V.II-01",nombreDoc:"cartaCompro",nombreLargo:"CARTA COMPROMISO"},
							{id:"PR-V-01",nombreDoc:"aseguraRepTecnico",nombreLargo:"ASEGURAR DISPONIBILIDAD DE RECURSOS, ESTABLECER FUNCIONES, RESPONSABILIDADES  Y AUTORIDAD DE REP TÉC"}
							
						]},

						{key:"COMPETENCIA",nombre:"VI.- COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO",documentos:[
							{id:"DCI-VI-01",nombreDoc:"organigrama",nombreLargo:"ORGANIGRAMA"},
							{id:"DCI-VI.I-01",nombreDoc:"listaAsistencia",nombreLargo:"LISTA DE ASISTENCIA PARA CURSO PRESENCIAL"},
							{id:"DCI-VI.II-01",nombreDoc:"planAnual",nombreLargo:"PLAN ANUAL DE CAPACITACIÓN"},
							{id:"DCI-VI.III-01",nombreDoc:"examenDespachador",nombreLargo:"EXAMEN DE EVALUACIÓN DESPACHADOR"},
							{id:"DCI-VI.IV-01",nombreDoc:"examenMtto",nombreLargo:"EXAMEN DE EVALUACIÓN MANTENIMIENTO"},
							{id:"DCI-VI.V-01",nombreDoc:"cursoInduc",nombreLargo:"CURSO DE INDUCCIÓN"},
							{id:"DCI-VI.VI-01",nombreDoc:"gafete",nombreLargo:"GAFETE DE VISITANTE"},
							{id:"FT-VI-01",nombreDoc:"perfilExterno",nombreLargo:"PERFIL PERSONAL EXTERNO"},
							{id:"FT-VI.I-01",nombreDoc:"perfilInterno",nombreLargo:"PERFIL PERSONAL INTERNO"},
							{id:"PR-VI-01",nombreDoc:"competencia",nombreLargo:"COMPETENCIA, CAPACITACIÓN Y ENTRENAMIENTO"}
						]},

						{key:"COMUNICACION",nombre:"VII.- COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA",documentos:[
							{id:"BT-VII-01",nombreDoc:"bitacoraCom",nombreLargo:"BITÁCORA DE COMUNICACIÓN INTERNA Y EXTERNA"},
							{id:"BT-VII.I-01",nombreDoc:"bitacoraControl",nombreLargo:"BITÁCORA DE CONTROL Y SEGUIMIENTO A QUEJAS Y SUGERENCIAS"},
							{id:"FT-VII-01",nombreDoc:"recepcionQuejas",nombreLargo:"RECEPCIÓN, ATENCIÓN Y SEGUIMIENTO A QUEJAS Y/O SUGERENCIAS "},
							{id:"FT-VII.I-01",nombreDoc:"reporteActos",nombreLargo:"REPORTE DE ACTOS Y CONDICIONES INSEGURAS"},
							{id:"FT-VII.II-01",nombreDoc:"minuta",nombreLargo:"MINUTA DE REUNIÓN"},
							{id:"FT-VII-III-01",nombreDoc:"propuestaMejora",nombreLargo:"PROPUESTA DE MEJORA AL SISTEMA DE ADMINISTRACIÓN"},
							{id:"PR-VII-01",nombreDoc:"procedimientoCom",nombreLargo:"PROCEDIMIENTO DE COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA"},
							{id:"PR-VII.I-01",nombreDoc:"procAtencion",nombreLargo:"PROCEDIMIENTO DE ATENCIÓN, RESPUESTA Y SEGUIMIENTO A QUEJAS"}
						]},

						{key:"CONTROL_DOC",nombre:"VIII.- CONTROL DE DOCUMENTOS",documentos:[
							{id:"DCI-VIII-01",nombreDoc:"matrizDoc",nombreLargo:"MATRIZ DE CONTROL DE DOCUMENTOS"},
							{id:"FT-VIII-01",nombreDoc:"revisionProc",nombreLargo:"REVISIÓN DE PROCEDIMIENTO"},
							{id:"PR-VIII-01",nombreDoc:"controlDoc",nombreLargo:"CONTROL DE DOCUMENTOS Y REGISTROS"}
						]},
						{key:"PRACTICAS",nombre:"IX.- MEJORES PRÁCTICAS Y ESTANDARES",documentos:[
							{id:"DCI-IX-01 ",nombreDoc:"matrizPracticas",nombreLargo:"MATRIZ DE MEJORES PRACTICAS Y ESTANDARES"},
							{id:"PR-IX-01",nombreDoc:"procIdentificacion",nombreLargo:"PROCEDIMIENTO DE IDENTIFICACIÓN Y ACTUALIZACIÓN DE MEJORES PRÁCTICAS Y ESTÁNDARES"}
						]},

						{key:"CONTROL_PROC",nombre:"X.- CONTROL DE ACTIVIDADES Y PROCESOS",documentos:[
							{id:"DCI-X-01",nombreDoc:"matrizControl",nombreLargo:"MATRÍZ DE CONTROLES Y CRITERIOS OPERACIONALES"},
							{id:"PR-X-01",nombreDoc:"procControl",nombreLargo:"PROCEDIMIENTO PARA EL CONTROL DE ACTIVIDADES Y PROCESOS"}
						]},

						{key:"INTEGRIDAD",nombre:"XI.- INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE LA CALIDAD",documentos:[
							{id:"FT-XI-01",nombreDoc:"asegCalidad",nombreLargo:"ASEGURAMIENTO DE LA CALIDAD E INTEGRIDAD MECÁNICA"},
							{id:"FT-XI.I-01",nombreDoc:"progInspeccion",nombreLargo:"PROGRAMA DE INSPECCION, MANTENIMIENTO Y PRUEBAS"},
							{id:"FT-XI.II-01",nombreDoc:"expTanques",nombreLargo:"EXPEDIENTE DE TANQUES DE ALMACENAMIENTO"},
							{id:"PR-XI-01",nombreDoc:"mejoresPracticas",nombreLargo:"MEJORES PRACTICAS EN INSTALACIONES"},
							{id:"PR-XI.I-01 ",nombreDoc:"asegIntegridad",nombreLargo:"ASEGURAMIENTO DE LA INTEGRIDAD MECANICA DE LOS EQUIPOS Y ACCESORIOS"},
							{id:"PR-XI.II-01 ",nombreDoc:"procInspeccion",nombreLargo:"PROCEDIMIENTO PARA INSPECCIÓN Y PRUEBAS"},
							{id:"PR-XI.III-01",nombreDoc:"proMtto",nombreLargo:"PROCEDIMIENTO DE MANTENIMIENTO PREVENTIVO O CORRECTIVO"}
						]},

						{key:"SEGURIDAD",nombre:"XII.- SEGURIDAD DE CONTRATISTAS",documentos:[
							{id:"BT-XII-01",nombreDoc:"bitacoraVisitas",nombreLargo:"BITÁCORA DE REGISTRO DE VISITAS"},
							{id:"DCI-XII-01",nombreDoc:"carta",nombreLargo:"CARTA RESPONSIVA"},
							{id:"DCI-XII.I-01",nombreDoc:"regInterno",nombreLargo:"REGLAMENTO INTERNO"},
							{id:"FT-XII-01",nombreDoc:"permiso",nombreLargo:"PERMISO DE TRABAJO"},
							{id:"PR-XII-01",nombreDoc:"segContra",nombreLargo:"PROCEDIMIENTO DE SEGURIDAD DE CONTRATISTAS"}

						]},
						{key:"EMERGENCIAS",nombre:"XIII.- PROTOCOLO DE RESPUESTA A EMERGENCIA",documentos:[
							{id:"DCI-XIII-01",nombreDoc:"planEmergencia",nombreLargo:"PLAN DE ATENCIÓN Y RESPUESTA A EMERGENCIA"},
							{id:"DCI-XIII.I-01",nombreDoc:"directorioUnidad",nombreLargo:"DIRECTORIO DE LA UNIDAD INTERNA"},
							{id:"DCI-XIII.II-01",nombreDoc:"directorioExterno",nombreLargo:"DIRECTORIO APOYO EXTERNO"},
							{id:"FT-XIII-01",nombreDoc:"evalSimulacro",nombreLargo:"EVALUACION DE SIMULACRO"},
							{id:"PR-XIII-01",nombreDoc:"procEmergencia",nombreLargo:"PROCEDIMIENTO DE ATENCION A EMERGENCIAS"},

						]},
						{key:"MONITOREO",nombre:"XIV.- MONITOREO, VERIFICACIÓN Y EVALUACIÓN",documentos:[
							{id:"DCI-XIV-01",nombreDoc:"monitoreoObj",nombreLargo:"MONITOREO, PROGRAMA Y EVALUACION DE OBJETIVOS"},
							{id:"DCI-XIV.I-01 ",nombreDoc:"evalCumpli",nombreLargo:"EVALUACIÓN DE CUMPLIMIENTO DE REQUERIMIENTOS"},
							{id:"DCI-XIV.II-01",nombreDoc:"comportamiento",nombreLargo:"COMPORTAMIENTO DE INDICADORES DE ASPECTOS AMBIENTALES"},
							{id:"FT-XIV-01",nombreDoc:"planAtencion",nombreLargo:"PLAN DE ATENCIÓN DE HALLAZGOS"},
							{id:"PR-XIV-01",nombreDoc:"procRequerimientos",nombreLargo:"PROCEDIMIENTO DE MONITOREO Y REVISIÓN DE REQUERIMIENTOS"},
							{id:"PR-XIV.I-01",nombreDoc:"procEquipos",nombreLargo:"PROCEDIMIENTO PARA LA CALIBRACIÓN, VERIFICACIÓN Y MANTENIMIENTO DE EQUIPOS"},
							{id:"PR-XIV.II-01",nombreDoc:"procEvalReq",nombreLargo:"PROCEDIMIENTO PARA LA EVALUACIÓN,MONITOREO Y MEDICIÓN PERIODICA DE LOS REQUERIMIENTOS LEGALES OBJETIVOS Y PROGRAMAS DE CUMPLIMIENTO"},
							{id:"PR-XIV.III-01 ",nombreDoc:"procAdmin",nombreLargo:"PROCEDIMIENTO DE ADMINISTRACION DE HALLAZGOS DEL SISTEMA DE ADMINISTRACION"}

						]},
						{key:"AUDITORIAS",nombre:"XV.- AUDITORÍAS",documentos:[
							{id:"FT-XV-01",nombreDoc:"progAnual",nombreLargo:" PROGRAMA ANUAL DE AUDITORÍAS"},
							{id:"FT-XV.I-01",nombreDoc:"planAuditoria",nombreLargo:"PLAN DE AUDITORÍAS"},
							{id:"FT-XV.II-01",nombreDoc:"asistenciaAuditoria",nombreLargo:"LISTA DE ASISTENCIA DE AUDITORÍA "},
							{id:"FT-XV.III-01",nombreDoc:"listaVerif",nombreLargo:"LISTA DE VERIFICACIÓN PARA AUDITORÍAS"},
							{id:"FT-XV.IV-01",nombreDoc:"informe",nombreLargo:"INFORME DE AUDITORÍA"},
							{id:"PR-XV-01",nombreDoc:"procAuditoria",nombreLargo:"PROCEDIMIENTO DE AUDITORÍA"}
						]},
						{key:"INVESTIGACION",nombre:"XVI.- INVESTIGACIÓN DE  ACCIDENTES E INCIDENTES",documentos:[
							{id:"DCI-XVI-01",nombreDoc:"manualInvestigacion",nombreLargo:"MANUAL PARA LA INVESTIGACIÓN DE ACCIDENTES POR MEDIO DEL MÉTODO DEL ÁRBOL DE CAUSAS"},
							{id:"FT-XVI-01",nombreDoc:"formatoReporte",nombreLargo:"FORMATO DE REPORTES E INCIDENTES"},
							{id:"PR-XVI-01",nombreDoc:"procInvestigacion",nombreLargo:"PROCEDIMIENTO PARA INVESTIGACIÓN DE INICIDENTES Y ACCIDENTES"}
						]},
						{key:"REVISION",nombre:"XVII.- REVISIÓN DE RESULTADOS",documentos:[
							{id:"DCI-XVII-01",nombreDoc:"progRevision",nombreLargo:"PROGRAMA ANUAL DE REVISIÓN"},
							{id:"FT-XVII-01",nombreDoc:"informeDirec",nombreLargo:"INFORME DE REVISIÓN POR LA DIRECCION"},
							{id:"FT-XVII.I-01 ",nombreDoc:"seguimiento",nombreLargo:"SEGUIMIENTO DE ACUERDOS Y ACCIONES"},
							{id:"PR-XVII-01",nombreDoc:"revision",nombreLargo:"REVISIÓN DE RESULTADOS"}
						]},
						{key:"INFORME",nombre:"XVIII.- INFORMES DE DESEMPEÑO",documentos:[
							{id:"FT-XVIII-01",nombreDoc:"evalDesemp",nombreLargo:"EVALUACIÓN DESEMPEÑO"},
							{id:"PR-XVIII-01",nombreDoc:"elabInforme",nombreLargo:"ELABORACIÓN Y COMUNICACIÓN DE INFORMES DE DESEMPEÑO"}
						]}
					]
				},

				
				nombresNom005:{
					type:Array, notify:true,
					value:[
						{key:"CONTROL-PRODUCTOS",nombre:"Recepción, descarga de producto y desviaciones de balance"},
						{key:"LIMPIEZAS",nombre:"Limpiezas programadas y no programadas"},
						{key:"INCIDENTES",nombre:"Incidentes, accidentes e inspecciones"}
						
					]
				},

				nombresNom005Limpieza:{
					type:Array, notify:true,
					value:[
						{key:"limpiezaAreas",nombre:"limpieza areas comunes"},
						{key:"limpiezaBardas",nombre:"limpieza de bardas"},
						{key:"limpiezaParedes",nombre:"limpieza de paredes"},
						{key:"limpiezaPuertas",nombre:"limpieza de puertas"},
						{key:"limpiezaVentanas",nombre:"limpieza de ventanas"},
						{key:"limpiezaAvisos",nombre:"limpieza de señales y avisos"},
						{key:"limpiezaPisos",nombre:"limpieza de pisos y guardas en dispensarios"},
						{key:"limpiezaDispensario",nombre:"limpieza de dispensario por el exterior, mangueras y pistolas de despacho"},
						{key:"limpiezaBocatoma",nombre:"limpieza de bocatoma de llenado de tanques"},
						{key:"limpiezaVerdes",nombre:"limpieza de areas verdes"},
						{key:"limpiezaRejillas",nombre:"limpieza de registros y rejillas"},
						{key:"limpiezaTrampas",nombre:"limpieza de trampas de combustibles y grasas"},
					]	
				
				},

				

				nombresGeneral:{
					type:Array, notify:true,
					value:[
						{key:"CRE",nombre:"CRE"},
						{key:"PROFECO",nombre:"PROFECO"},
						{key:"PROTECCION-CIVIL",nombre:"Protección Civil"},
						{key:"OTRO",nombre:"Otro (especifique)"}
					]
				},


				listaProductos:{
					type:Array,
					notify:true,
					value:[
						"PEMEX Magna","PEMEX Premium","PEMEX Diésel",
						"PEMEX Diésel de Ultra Bajo Azufre (DUBA)","PEMEX Diésel Marino",
						"ARCO Diésel","ARCO Diésel de Ultra Bajo Azufre (DUBA)", 
						"ARCO Premium","ARCO Regular","BP Diésel","BP Diésel de Ultra Bajo Azufre (DUBA)",
						"BP Premium","BP regular","Chevron regular","Chevron supreme","G-diésel",
						"G-diésel de Ultra Bajo Azufre (DUBA)","G-Premium","G-super",
						"Gulf premium","Gulf regular","Kirkland premium","Kirkland super",
						"Shell V-power","Shell super","Mobil Synergy Extra","Mobil Synergy Diésel Automotriz",
						"Mobil Synergy Diésel de Ultra Bajo Azufre (DUBA)",
						"Mobil Synergy Supreme+","Diésel Automotriz Sin Marca",
						"Diésel Marino Sin Marca","Regular Sin Marca con índice de octano mínimo de 87",
						"Premium Sin Marca con índice de octano mínimo de 91","Diésel Ultra Bajo Azufre (DUBA) Sin marca",
						"Gaxo diésel","Gaxo regular","Gaxo ultra","Gulf diésel","Sunoco diésel",
						"Repsol diésel e+","Repsol-diésel e+ de Ultra Bajo Azufre (DUBA)","Repsol efitec 87",
						"Sunoco regular","Total advanced","O Plus regular","Sunoco ultra","Total excellium",
						"Repsol efitec 91","O Plus ultra","O Plus diésel","Comborsa diésel","Comborsa regular",
						"Comborsa premium","Diésel con Techpro","Chevron diésel","Shell diésel",
						"Black Gold diésel","Regular con Techpro","Black Gold Super","F Plus",
						"Black Gold Plus","F Super","Plus con Techpro","GGR diésel","GGR ulsd",
						"GGR regular","GGR optima","Repsol efitec 92","A-diésel","A-regular","A-súper",
						"Primero Diésel","Primero Plus","Primero Premium","Diesel Power Supreme","Windstar Diesel",
						"Power Plus","Windstar Gasolina Regular","Power Supreme","Windstar Gasolina Premium","Masterfuel Diesel",
						"Carroil Diesel Max","Masterfuel Regular","Carroil Ultra Blue","Carroil Súper Orange","Masterfuel Premium",
						"Free Energy Diésel","RedCo diésel","ENER FORCE","Valero Diésel","Free Energy Regular Automotriz",
						"RedCo Verde","ENER ECO","Valero Regular","Valero Premium","Free Energy Plus Automotriz","ENER ADVANCE",
						"OTRO",
						
					]
				}
			};
		}//properties

        muestraNombreActividad(obj){
			var seccion=obj.seccion;
			switch (seccion) {
				case "SASISOPA":
					var elem=this.buscaObjetoArreglo(this.nombresSasi,"key",obj.elemento);
				return elem.nombre;
				case "NOM005":
					var elem=this.buscaObjetoArreglo(this.nombresNom005,"key",obj.nombreBitacora);
				return elem.nombre;
				case "GENERAL":
				return obj.institucion + "-" + obj.nombreActividad;
			}
		}

		muestraNombreCorto(obj){
			var seccion=obj.seccion;
			switch (seccion) {
				case "SASISOPA":
				return obj.elemento;
				case "NOM005":
				return obj.nombreBitacora;
				case "GENERAL":
				return obj.institucion + "-" + obj.nombreActividad;
			}
		}

		muestraProgramaAnual(str){
			switch (str) {
				case "dictamenNom005":
				return "Dictamen NOM-005-ASEA-2016";

				case "pruebaHerme":
				return "Pruebas de hermeticidad";

				case "dictamenNom016":
				return "Dictamen NOM-016-CRE-2016";

				case "pipc":
				return "Programa interno de Protección Civil";

				case "pruebaSvr":
				return "Pruebas de eficiencia SVRII";

				
				case "revPoliza":
				return "Renovación de pólizas de seguro";

				case "nom022":
				return "Dictamen de tierras físicas NOM-022-STPS-2015";
				
			};
		}
	}
}
export const DiccionarioMixin = dedupingMixin(internalMixinDiccionario);