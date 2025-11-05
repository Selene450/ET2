class alumnograduacion extends Validations{

	constructor(esTest){
		super();

		//definicion de atributos a mostrarn en la tabla de muestra de tuplas al entrar en la gestion de la entidad
		this.columnasamostrar = ['alumnograduacion_login','alumnograduacion_password', 'alumnograduacion_nombre','alumnograduacion_apellidos','alumnograduacion_titulacion','alumnograduacion_dni','alumnograduacion_telefono','alumnograduacion_direccion','alumnograduacion_email'];
		//definicion de atributos a cambiar su visualización
		this.mostrarespecial = ['alumnograduacion_fotoacto'];
		
		// definicion de los atributos del formulario (Necesario para test de unidad)
		this.attributes = [  'alumnograduacion_login',
                                'alumnograduacion_password',
                                'alumnograduacion_nombre',
                                'alumnograduacion_apellidos',
                                'alumnograduacion_titulacion',
                                'alumnograduacion_dni',
                                'alumnograduacion_telefono',
                                'alumnograduacion_direccion',
                                'alumnograduacion_email',
								'alumnograduacion_fotoacto',
                            ];
	}		
    manual_form_creation(){
		var form_content = `
			<form id="form_iu" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_alumnograduacion();" class='formulario'>

			<label class="label_alumnograduacion_login">Login</label>
			<input type='text' id='alumnograduacion_login' name='alumnograduacion_login' onblur=" return entidad.ADD_alumnograduacion_login_validation();"></input>
			<span id="span_error_alumnograduacion_login"><a id="error_alumnograduacion_login"></a></span>
			<br>
			
			<label class="label_alumnograduacion_password">Contraseña</label>
			<input type='text' id='alumnograduacion_password' name='alumnograduacion_password' onblur=" return entidad.ADD_alumnograduacion_password_validation();"></input>
			<span id="span_error_alumnograduacion_password" ><a id="error_alumnograduacion_password"></a></span>
			<br>
			
			<label class="label_alumnograduacion_nombre">Nombre</label>
			<input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre'></input>
			<span id="span_error_alumnograduacion_nombre" ><a id="error_alumnograduacion_nombre"></a></span>
			<br>
			
			<label class="label_alumnograduacion_apellidos">Apellidos</label>
			<input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos'></input>
			<span id="span_error_alumnograduacion_apellidos" ><a id="error_alumnograduacion_apellidos"></a></span>
			
			<br>

			<label class="label_alumnograduacion_titulacion">Apellidos</label>
			<input type='text' id='alumnograduacion_titulacion' name='alumnograduacion_titulacion'></input>
			<span id="span_error_alumnograduacion_titulacion" ><a id="error_alumnograduacion_titulacion"></a></span>
			
			<br>


			<label class="label_alumnograduacion_dni">DNI</label>
			<input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni'></input>
			<span id="span_error_alumnograduacion_dni" ><a id="error_alumnograduacion_dni"></a></span>
			
			<br>
			<label class="label_alumnograduacion_telefono">Numero de telefono</label>
			<input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono'></input>
			<span id="span_error_alumnograduacion_telefono" ><a id="error_alumnograduacion_telefono"></a></span>

			<br>

            <label class="label_alumnograduacion_direccion">Direccion</label>
			<input type='text' id='alumnograduacion_direccion' name='alumnograduacion_direccion'></input>
			<span id="span_error_alumnograduacion_direccion" ><a id="error_alumnograduacion_direccion"></a></span>

			<br>

            <label class="label_alumnograduacion_email">Email</label>
			<input type='text' id='alumnograduacion_email' name='alumnograduacion_email'></input>
			<span id="span_error_alumnograduacion_email" ><a id="error_alumnograduacion_email"></a></span>

			<br>

			<label id="label_alumnograduacion_fotoacto" class="label_alumnograduacion_fotoacto">Foto Persona</label>
			<input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto'></input>
			<span id="span_error_alumnograduacion_fotoacto"><a id="error_alumnograduacion_fotoacto"></a></span>
			<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_alumnograduacion_fotoacto" class="label_nuevo_alumnograduacion_fotoacto">Nueva Foto Persona</label>
			<input type='file' id='nuevo_alumnograduacion_fotoacto' name='nuevo_alumnograduacion_fotoacto'></input>
			<span id="span_error_nuevo_alumnograduacion_fotoacto"><a id="error_nuevo_alumnograduacion_fotoacto"></a></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">

		</form>
		`
		return form_content;
	}
    ADD_alumnograduacion_login_validation(){
        if(!this.min_size('alumnograduacion_login', 4)){
            this.dom.mostrar_error_campo('alumnograduacion_login','alumnograduacion_login_min_size_KO');
            return 'alumnograduacion_login_min_size_KO'
        }
		if(!this.max_size('alumnograduacion_login', 15)){
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
			return 'alumnograduacion_login_max_size_KO';
		}
		if (!(this.format('alumnograduacion_login', '^[A-Za-z]*$'))){
			return 'alumnograduacion_login_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true
    }
	/*alfabéticos y espacios sin acentos ni ñ, min 8 max 100 */
	ADD_alumnograduacion_password_validation(){
		if(!this.min_size('alumnograduacion_password', 8)){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO')
			return 'alumnograduacion_password_min_size_KO'
		}
		if(!this.max_size('alumnograduacion_password', 100)){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO')
			return 'alumnograduacion_password_max_size_KO'
		}
		if (!(this.format('alumnograduacion_password', '^[A-Za-z ]*$'))){
			return 'alumnograduacion_password_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_password');
		return true
	}
	/*alfabéticos con acentos, ñ y espacios, min 2 max 25*/
	ADD_alumnograduacion_nombre_validation(){
		if(!this.min_size('alumnograduacion_nombre', 2)){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_min_size_KO')
			return 'alumnograduacion_nombre_min_size_KO'
		}
		if(!this.max_size('alumnograduacion_nombre', 25)){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO')
			return 'alumnograduacion_nombre_max_size_KO'
		}
		if(!this.format('alumnograduacion_nombre', '^[a-zA-ZáéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO')
			return 'alumnograduacion_nombre_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_nombre');
		return true
	}
	/*alfabéticos con acentos, ñ y espacios, min 2 max 35*/
	ADD_alumnograduacion_apellidos_validation(){
		if(!this.min_size('alumnograduacion_apellidos', 2)){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_min_size_KO')
			return 'alumnograduacion_apellidos_min_size_KO'
		}
		if(!this.max_size('alumnograduacion_apellidos', 35)){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO')
			return 'alumnograduacion_apellidos_max_size_KO'
		}
		if(!this.format('alumnograduacion_apellidos', '^[a-zA-ZáéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO')
			return 'alumnograduacion_apellidos_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
		return true
	}
	/*valores posibles: 'GREI','GRIA','MEI','MIA','PCEO'*/
	ADD_alumnograduacion_titulacion_validation(){
		if(!this.min_size('alumnograduacion_titulacion', 3)){
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_min_size_KO')
			return 'alumnograduacion_titulacion_min_size_KO'
		}
		if(!this.max_size('alumnograduacion_titulacion', 4)){
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_max_size_KO')
			return 'alumnograduacion_titulacion_mimax_size_KO'
		}
		if(!(['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'].includes(alumnograduacion_titulacion))){
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO')
			return 'alumnograduacion_titulacion_format_KO'
		}
		return true
	}
	/*formato nif o nie con letras válidas para los números*/
	ADD_alumnograduacion_dni_validation(){
		if (!(this.min_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_min_size_KO');
			return "dni_min_size_KO";
		}
		if (!(this.max_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_max_size_KO');
			return "dni_max_size_KO";
		}
				
		var resp = this.personalize_dni_nie();
		console.log(resp);
		if (!(resp === true)){
			this.dom.mostrar_error_campo('dni',resp);
			return resp;
		}
		
		this.dom.mostrar_exito_campo('dni');
		return true;
	}
	/*9 dígitos (0-9)*/
	ADD_alumnograduacion_telefono_validation(){
        if(!this.min_size('alumnograduacion_telefono', 9)){
            this.dom.mostrar_error_campo('alumnograduacion_telefono','alumnograduacion_telefono_min_size_KO');
            return 'alumnograduacion_telefono_min_size_KO'
        }
        if(!this.max_size('alumnograduacion_telefono', 9)){
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
            return 'alumnograduacion_telefono_max_size_KO';
        }
        if (!(this.format('alumnograduacion_telefono', '^[0-9]{9}$'))){
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
            return 'alumnograduacion_telefono_format_KO'
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true
	}
	/*alfanuméricos con acentos y ñ y espacios*/
	ADD_alumnograduacion_direccion_validation(){
		if(!this.min_size('alumnograduacion_direccion', 0)){
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_min_size_KO')
			return 'alumnograduacion_direccion_min_size_KO'
		}
		if(!this.max_size('alumnograduacion_direccion', 100)){
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO')
			return 'alumnograduacion_direccion_max_size_KO'
		}
		if(!(this.format('alumnograduacion_direccion', '^[A-Za-z0-9áéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO')
            return 'alumnograduacion_direccion_format_KO'
        }
        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true
	}
	/*formato email*/
	ADD_alumnograduacion_email_validation(){
		// Expresión regular razonable para emails (no perfecta pero segura para la mayoría de casos)
		const emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$';
		if(!this.format('alumnograduacion_email', emailPattern)){
			this.dom.mostrar_error_campo('alumnograduacion_email','alumnograduacion_email_format_KO');
			return 'alumnograduacion_email_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_email');
		return true
	}
	/*alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min 7 max 100. Sólo jpg y tamaño de
	fichero menor de 2.000.000 bytes.*/
	ADD_nuevo_alumnograduacion_fotoacto_validation(){
		if (!(this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto'))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_not_exist_file_KO');
			return "nuevo_alumnograduacion_fotoacto_not_exist_file_KO";
		}
		if (!(this.validations.max_size_file('nuevo_alumnograduacion_fotoacto',2000000))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_max_size_file_KO');
			return "nuevo_alumnograduacion_fotoacto_max_size_file_KO";
		}
		if (!(this.validations.type_file('nuevo_alumnograduacion_fotoacto',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_type_file_KO');
			return "nuevo_alumnograduacion_fotoacto_type_file_KO";
		}
		if (!(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto','[a-zA-Z.{7,40}]'))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_format_name_file_KO');
			return "nuevo_alumnograduacion_fotoacto_format_name_file_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
		return true;

	}

	ADD_submit_alumnograduacion(){

		let result = (
					(this.ADD_alumnograduacion_login_validation) &
					(this.ADD_alumnograduacion_password_validation) &
					(this.ADD_alumnograduacion_nombre_validation) &
					(this.ADD_alumnograduacion_apellidos_validation) &
					(this.ADD_alumnograduacion_titulacion_validation) &
					(this.ADD_alumnograduacion_dni_validation) &
					(this.ADD_alumnograduacion_telefono_validation) &
					(this.ADD_alumnograduacion_direccion_validation) &
					(this.ADD_alumnograduacion_email_validation) &
					(this.ADD_nuevo_alumnograduacion_fotoacto_validation)
					)
		
		result = Boolean(result);

		
		return result;	


	}

	EDIT_alumnograduacion_login_validation(){
		return this.ADD_alumnograduacion_login_validation();
	}

	EDIT_alumnograduacion_password_validation(){
		return this.ADD_alumnograduacion_password_validation();
	}

	EDIT_alumnograduacion_nombre_validation(){
		return this.ADD_alumnograduacion_nombre_validation();
	}

	EDIT_alumnograduacion_apellidos_validation(){
		return this.ADD_alumnograduacion_apellidos_validation();
	}

	EDIT_alumnograduacion_titulacion_validation(){
		return this.ADD_alumnograduacion_titulacion_validation();
	}

	EDIT_alumnograduacion_dni_validation(){
		return this.ADD_alumnograduacion_dni_validation();
	}

	EDIT_alumnograduacion_telefono_validation(){
		return this.ADD_alumnograduacion_telefono_validation();
	}

	EDIT_alumnograduacion_direccion_validation(){
		return this.ADD_alumnograduacion_direccion_validation();
	}

	EDIT_alumnograduacion_email_validation(){
		return this.ADD_alumnograduacion_email_validation();
	}

	EDIT_nuevo_alumnograduacion_fotoacto_validation(){
		if (!(this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto'))){
			this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
			return true;
		}
		if (!(this.validations.max_size_file('nuevo_alumnograduacion_fotoacto',2000))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_max_size_file_KO');
			return "nuevo_alumnograduacion_fotoacto_max_size_file_KO";
		}
		if (!(this.validations.type_file('nuevo_alumnograduacion_fotoacto',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_type_file_KO');
			return "nuevo_alumnograduacion_fotoacto_type_file_KO";
		}
		if (!(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto','[a-zA-Z.{7,40}]'))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_format_name_file_KO');
			return "nuevo_alumnograduacion_fotoacto_format_name_file_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
		return true;
	}

	EDIT_submit_alumnograduacion(){

		let result = (
					(this.EDIT_alumnograduacion_login_validation) &
					(this.EDIT_alumnograduacion_password_validation) &
					(this.EDIT_alumnograduacion_nombre_validation) &
					(this.EDIT_alumnograduacion_apellidos_validation) &
					(this.EDIT_alumnograduacion_titulacion_validation) &
					(this.EDIT_alumnograduacion_dni_validation) &
					(this.EDIT_alumnograduacion_telefono_validation) &
					(this.EDIT_alumnograduacion_direccion_validation) &
					(this.EDIT_alumnograduacion_email_validation) &
					(this.EDIT_nuevo_alumnograduacion_fotoacto_validation)
					)
		
		result = Boolean(result);

		
		return result;

	}

		SEARCH_alumnograduacion_login_validation(){
		if(!this.max_size('alumnograduacion_login', 15)){
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
			return 'alumnograduacion_login_max_size_KO';
		}
		if (!(this.format('alumnograduacion_login', '^[A-Za-z]*$'))){
			return 'alumnograduacion_login_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_password_validation(){
		if(!this.max_size('alumnograduacion_password', 100)){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO')
			return 'alumnograduacion_password_max_size_KO'
		}
		if (!(this.format('alumnograduacion_password', '^[A-Za-z ]*$'))){
			return 'alumnograduacion_password_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_nombre_validation(){
		if(!this.max_size('alumnograduacion_nombre', 25)){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO')
			return 'alumnograduacion_nombre_max_size_KO'
		}
		if(!this.format('alumnograduacion_nombre', '^[a-zA-ZáéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO')
			return 'alumnograduacion_nombre_format_KO'
		}

		return true;
	}

	SEARCH_alumnograduacion_apellidos_validation(){
		if(!this.max_size('alumnograduacion_apellidos', 35)){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO')
			return 'alumnograduacion_apellidos_max_size_KO'
		}
		if(!this.format('alumnograduacion_apellidos', '^[a-zA-ZáéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO')
			return 'alumnograduacion_apellidos_format_KO'
		}

		return true;
	}

	SEARCH_alumnograduacion_titulacion_validation(){
		if(!this.max_size('alumnograduacion_titulacion', 4)){
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_max_size_KO')
			return 'alumnograduacion_titulacion_max_size_KO'
		}
		if(!this.format('alumnograduacion_titulacion', '^[A-Za-z]{4}$')){
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO')
			return 'alumnograduacion_titulacion_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_dni_validation(){
		if(!this.max_size('alumnograduacion_dni', 9)){
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO');
			return 'alumnograduacion_dni_max_size_KO';
		}
		var resp = this.personalize_dni_nie_search('alumnograduacion_dni');
		if (!(resp === true)){
			this.dom.mostrar_error_campo('alumnograduacion_dni',resp);
			return resp;
		}
		return true;
	}

	SEARCH_alumnograduacion_telefono_validation(){
		if(!this.max_size('alumnograduacion_telefono', 9)){
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
			return 'alumnograduacion_telefono_max_size_KO';
		}
		if (!(this.format('alumnograduacion_telefono', '^[0-9]{9}$'))){
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
			return 'alumnograduacion_telefono_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_direccion_validation(){
		if(!this.max_size('alumnograduacion_direccion', 100)){
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO')
			return 'alumnograduacion_direccion_max_size_KO'
		}
		if(!(this.format('alumnograduacion_direccion', '^[A-Za-z0-9áéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$'))){
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO')
			return 'alumnograduacion_direccion_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_email_validation(){
		if(!this.max_size('alumnograduacion_email', 100)){
			this.dom.mostrar_error_campo('alumnograduacion_email','alumnograduacion_email_max_size_KO');
			return 'alumnograduacion_email_max_size_KO'
		}
		if(!this.format('alumnograduacion_email', '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')){
			this.dom.mostrar_error_campo('alumnograduacion_email','alumnograduacion_email_format_KO');
			return 'alumnograduacion_email_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_fotoacto_validation(){
		if(!this.max_size('alumnograduacion_fotoacto', 40)){
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_max_size_KO')
			return 'alumnograduacion_fotoacto_max_size_KO'
		}
		if(!this.format('alumnograduacion_fotoacto', '^[A-Za-z0-9.]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_KO')
			return 'alumnograduacion_fotoacto_format_KO'
		}
		return true;
	}

	SEARCH_submit_alumnograduacion(){

		let result = (
					(this.SEARCH_alumnograduacion_login_validation) &
					(this.SEARCH_alumnograduacion_password_validation) &
					(this.SEARCH_alumnograduacion_nombre_validation) &
					(this.SEARCH_alumnograduacion_apellidos_validation) &
					(this.SEARCH_alumnograduacion_titulacion_validation) &
					(this.SEARCH_alumnograduacion_dni_validation) &
					(this.SEARCH_alumnograduacion_telefono_validation) &
					(this.SEARCH_alumnograduacion_direccion_validation) &
					(this.SEARCH_alumnograduacion_email_validation) &
					(this.SEARCH_alumnograduacion_fotoacto_validation)
					)
		
		result = Boolean(result);

		
		return result;
		
	}


	createForm_EDIT(fila){

		// limpiar poner titulo y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_EDIT');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.EDIT_submit_'+this.nombreentidad);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
		


		// rellenar valores
		this.dom.rellenarvaloresform(fila);
		
		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('alumnograduacion_dni','readonly','true');
		this.dom.assign_property_value('alumnograduacion_fotoacto','readonly','true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();

	}

	createForm_DELETE(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
	
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_DELETE');

		// rellenar y action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_foto_persona (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
		
		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('DELETE');

		setLang();
	}

	createForm_SHOWCURRENT(fila){
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_SHOWCURRENT');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_foto_persona (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
		
		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		//this.colocarboton('SHOWCURRENT');

		setLang();

	}

	createForm_ADD(){

		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_ADD');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.ADD_submit_'+this.nombreentidad+'()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
		
		// poner no visible el campo foto_persona (solo se puede subir fichero)
		this.dom.hide_element_form('alumnograduacion_fotoacto');
		this.dom.hide_element('link_alumnograduacion_fotoacto');

		// rellenar valores
		// en ADD no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');

		// poner inactivos los campos correspondientes
		// en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang();
	}

	createForm_SEARCH(){

		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_SEARCH');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.SEARCH_submit_'+this.nombreentidad);

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
		
		// poner no visible el campo foto_persona (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.hide_element('link_foto_persona');

		// reemplazar enumerados por texto
		// titulacion_persona que es un select
		this.dom.replaceSelectXEmptyInput('titulacion_persona');
		// menu_persona que es un checkbox
		this.dom.replaceEnumNameXEmptyInput('menu_persona');
		// genero_persona que es un radio
		this.dom.replaceEnumNameXEmptyInput('genero_persona');
		
		// rellenar valores
		// en SEARCH no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','SEARCH');

		// colocar boton de submit
		this.dom.colocarboton('SEARCH');

		setLang();
		
	}

	/**
	 * modifica el formato de visualización de un atributo concreto y se devuelve el valor modificado
	 * en el caso de solicitar cambio de formato para un atributo no implementado se lanza una alerta
	 * 
	 * @param {String} atributo string con el nombre del atributo a modificar su valor
	 * @param {String} valorentrada string con el valor de entrada a modificar
	 * @returns 
	 */
	mostrarcambioatributo(atributo, valorentrada){
		
		switch (atributo){
			case 'alumnograduacion_fotoacto':
				var link = 'error';
				if (valorentrada !== ''){
					link = valorentrada+`  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
			case 'default':
				alert('no existe mostrar especial para ese atributo');
				break;
		}
	}

	//
	//ADD
	//
	ADD_alumnograduacion_login_validation(){return true;}
	ADD_alumnograduacion_password_validation(){return true;}
	
	ADD_alumnograduacion_nombre_validation(){return true;}
	ADD_alumnograduacion_apellidos_validation(){return true;}
	ADD_alumnograduacion_titulacion_validation(){return true;}
	ADD_alumnograduacion_dni_validation(){return true;}
	ADD_alumnograduacion_telefono_validation(){return true;}
	ADD_alumnograduacion_email_validation(){return true;}
	ADD_alumnograduacion_direccion_validation(){return true;}
	ADD_nuevo_alumnograduacion_fotoacto_validation(){return true;}




	//
	//EDIT
	//
	EDIT_alumnograduacion_login_validation(){return true;}
	EDIT_alumnograduacion_password_validation(){return true;}
	EDIT_alumnograduacion_nombre_validation(){return true;}
	EDIT_alumnograduacion_apellidos_validation(){return true;}
	EDIT_alumnograduacion_titulacion_validation(){return this.ADD_alumnograduacion_titulacion_validation();}
	EDIT_alumnograduacion_dni_validation(){return true;}
	EDIT_alumnograduacion_telefono_validation(){return true;}
	EDIT_alumnograduacion_email_validation(){return true;}
	EDIT_alumnograduacion_direccion_validation(){return true;}
	EDIT_alumnograduacion_fotoacto_validation(){return true;}
	EDIT_nuevo_alumnograduacion_fotoacto_validation(){return true;}

	
	//
	//SEARCH
	//
	SEARCH_alumnograduacion_login_validation(){return true;}
	SEARCH_alumnograduacion_password_validation(){return true;}
	SEARCH_alumnograduacion_nombre_validation(){return true;}
	SEARCH_alumnograduacion_apellidos_validation(){return true;}
	SEARCH_alumnograduacion_titulacion_validation(){return true;}
	SEARCH_alumnograduacion_dni_validation(){return true;}
	SEARCH_alumnograduacion_telefono_validation(){return true;}
	SEARCH_alumnograduacion_direccion_validation(){return true;}
	SEARCH_alumnograduacion_email_validation(){return true;}
	SEARCH_alumnograduacion_fotoacto_validation(){return true;}
	//
	//submits
	//
	ADD_submit_alumnograduacion(){return true;}
	EDIT_submit_alumnograduacion(){return true;}
	SEARCH_submit_alumnograduacion(){return true;}



}
