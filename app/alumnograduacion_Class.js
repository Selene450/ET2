class alumnograduacion extends EntidadAbstracta {

	constructor(esTest) {
		super();

		//definicion de atributos a mostrarn en la tabla de muestra de tuplas al entrar en la gestion de la entidad
		this.columnasamostrar = ['alumnograduacion_login', 'alumnograduacion_nombre', 'alumnograduacion_apellidos', 'alumnograduacion_titulacion', 'alumnograduacion_dni', 'alumnograduacion_telefono', 'alumnograduacion_direccion', 'alumnograduacion_email'];
		//definicion de atributos a cambiar su visualización
		this.mostrarespecial = ['alumnograduacion_password', 'alumnograduacion_fotoacto'];

		// definicion de los atributos del formulario (Necesario para test de unidad)
		this.attributes = ['alumnograduacion_login',
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
	manual_form_creation() {
		var form_content = `
			<form id="form_iu" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_alumnograduacion();" class='formulario'>

			<label class="label_alumnograduacion_login">Login</label>
			<input type='text' id='alumnograduacion_login' name='alumnograduacion_login' onblur=" return entidad.ADD_alumnograduacion_login_validation();"></input>
			<span id="span_error_alumnograduacion_login"><a id="error_alumnograduacion_login"></a></span>
			<br>
			
			<label class="label_alumnograduacion_password">Contraseña</label>
			<input type='password' id='alumnograduacion_password' name='alumnograduacion_password' onblur=" return entidad.ADD_alumnograduacion_password_validation();"></input>
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

			<label class="label_alumnograduacion_titulacion">Titulacion</label>
			<select id='alumnograduacion_titulacion' name='alumnograduacion_titulacion'>
				<option value="GREI">GREI</option>
				<option value="GRIA">GRIA</option>
				<option value="MEI">MEI</option>
				<option value="MIA">MIA</option>
				<option value="PCEO">PCEO</option>
			</select>
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

			<label id="label_alumnograduacion_fotoacto" class="label_alumnograduacion_fotoacto">Fotoacto</label>
			<input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto'></input>
			<span id="span_error_alumnograduacion_fotoacto"><a id="error_alumnograduacion_fotoacto"></a></span>
			<a id="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_alumnograduacion_fotoacto" class="label_nuevo_alumnograduacion_fotoacto">Nuevo alumnograduacion fotoacto</label>
			<input type='file' id='nuevo_alumnograduacion_fotoacto' name='nuevo_alumnograduacion_fotoacto'></input>
			<span id="span_error_nuevo_alumnograduacion_fotoacto"><a id="error_nuevo_alumnograduacion_fotoacto"></a></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">

		</form>
		`
		return form_content;
	}
	ADD_alumnograduacion_login_validation() {
		if (!this.validations.min_size('alumnograduacion_login', 4)) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_min_size_KO');
			return 'alumnograduacion_login_min_size_KO'
		}
		if (!this.validations.max_size('alumnograduacion_login', 15)) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
			return 'alumnograduacion_login_max_size_KO';
		}
		if (!(this.validations.format('alumnograduacion_login', '^[A-Za-z]*$'))) {
			return 'alumnograduacion_login_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_login');
		return true
	}
	/*alfabéticos y espacios sin acentos ni ñ, min 8 max 100 */
	ADD_alumnograduacion_password_validation() {
		if (!this.min_size_password(document.getElementById('alumnograduacion_password').value)) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO')
			return 'alumnograduacion_password_min_size_KO'
		}
		if (!this.max_size_password(document.getElementById('alumnograduacion_password').value)) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO')
			return 'alumnograduacion_password_max_size_KO'
		}
		if (!(this.format_password(document.getElementById('alumnograduacion_password').value))) {
			return 'alumnograduacion_password_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_password');
		return true
	}

	min_size_password(password) {
		// Validar nulos y vacíos
		if (!password) return false;

		// Comprobar longitud mínima (8)
		if (password.length < 8) return false;

		return true;
	}

	max_size_password(password) {
		// Validar nulos y vacíos
		if (!password) return false;

		// Comprobar longitud máxima (100)
		if (password.length > 100) return false;

		return true;
	}

	format_password(password) {
		// 1. Verificar que no es null/undefined
		if (!password) return false;

		// 2. Expresión regular para verificar solo letras y espacios
		// ^ inicio de string
		// $ fin de string
		// [a-zA-Z ] solo letras (mayúsculas y minúsculas) y espacios
		// + uno o más caracteres
		const regex = /^[a-zA-Z ]+$/;

		return regex.test(password);
	}

	/*alfabéticos con acentos, ñ y espacios, min 2 max 25*/
	ADD_alumnograduacion_nombre_validation() {
		if (!this.validations.min_size('alumnograduacion_nombre', 2)) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_min_size_KO')
			return 'alumnograduacion_nombre_min_size_KO'
		}
		if (!this.validations.max_size('alumnograduacion_nombre', 25)) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO')
			return 'alumnograduacion_nombre_max_size_KO'
		}
		if (!this.validations.format('alumnograduacion_nombre', '^[a-zA-ZáéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$')) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO')
			return 'alumnograduacion_nombre_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_nombre');
		return true
	}
	/*alfabéticos con acentos, ñ y espacios, min 2 max 35*/
	ADD_alumnograduacion_apellidos_validation() {
		if (!this.validations.min_size('alumnograduacion_apellidos', 2)) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_min_size_KO')
			return 'alumnograduacion_apellidos_min_size_KO'
		}
		if (!this.validations.max_size('alumnograduacion_apellidos', 35)) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO')
			return 'alumnograduacion_apellidos_max_size_KO'
		}
		if (!this.validations.format('alumnograduacion_apellidos', '^[a-zA-ZáéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$')) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO')
			return 'alumnograduacion_apellidos_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
		return true
	}
	/*valores posibles: 'GREI','GRIA','MEI','MIA','PCEO'*/
	ADD_alumnograduacion_titulacion_validation() {
		const titulacion = document.getElementById('alumnograduacion_titulacion').value;
		const valoresPermitidos = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
		
		// Verificar que no está vacío
		if (!titulacion) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_min_size_KO');
			return 'alumnograduacion_titulacion_min_size_KO';
		}

		// Verificar longitud máxima primero
		if (titulacion.length > 4) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_max_size_KO');
			return 'alumnograduacion_titulacion_max_size_KO';
		}

		// Verificar longitud mínima
		if (titulacion.length < 3) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_min_size_KO');
			return 'alumnograduacion_titulacion_min_size_KO';
		}

		// Verificar que es uno de los valores permitidos
		if (!valoresPermitidos.includes(titulacion)) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
			return 'alumnograduacion_titulacion_format_KO';
		}

		this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
		return true;
	}
	/*formato nif o nie con letras válidas para los números*/
	ADD_alumnograduacion_dni_validation() {
		if (!(this.validations.min_size('alumnograduacion_dni', 9))) {
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_min_size_KO');
			return "alumnograduacion_dni_min_size_KO";
		}
		if (!(this.validations.max_size('alumnograduacion_dni', 9))) {
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO');
			return "alumnograduacion_dni_max_size_KO";
		}

		var resp = this.personalize_dni_nie();
		console.log(resp);
		if (!(resp === true)) {
			this.dom.mostrar_error_campo('alumnograduacion_dni', resp);
			return resp;
		}

		this.dom.mostrar_exito_campo('alumnograduacion_dni');
		return true;
	}

	/**
	 * 
	 * test dni format in the regular expression
	 * @param {string} 
	 * @return {bool} true is regular expression is satified false otherwise  
	 * */

	personalize_dni_nie() {

		var dni = document.getElementById('alumnograduacion_dni').value;
		if (this.personalize_dni_format() == true) {
			if (!(this.personalize_validate_dni(dni))) {
				return "alumnograduacion_dni_nie_format_KO";
			}
		}
		else {
			if (this.personalize_nie_format() === true) {
				if (!(this.personalize_validate_nie(dni))) {
					return "alumnograduacion_dni_nie_format_KO";
				}
			}
			else {
				return "alumnograduacion_dni_nie_format_KO";
			}
		}

		return true;

	}
	/**
	 * get dni as parameter, split letter and numbers, calculate
	 * %23 from number to obtain corresponding letter and compares with letter in dni value
	 * 
	 * @param dni value
	 * @returns true if dni is valid false otherwise
	 */
	personalize_dni_format() {

		if (!(this.validations.format('alumnograduacion_dni', '[0-9]{8}[A-Z]'))) {
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO');
			return "alumnograduacion_dni_nie_format_KO";
		}
		return true;

	}

	personalize_nie_format() {
		if (!(this.validations.format('alumnograduacion_dni', '[XYZ][0-9]{7}[A-Z]'))) {
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_nie_format_KO');
			return "alumnograduacion_dni_nie_format_KO";
		}
		return true;
	}
	personalize_validate_dni(dni) {

		//var dni = document.getElementById('dni').value;
		var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
		var letter = dni_letters.charAt(parseInt(dni, 10) % 23);

		return letter == dni.charAt(8);
	}

	/**
	 * get nie as parameter, split firts letter, calculate
	 * the number from this letter and create dni for validating in 
	 * personalizate method
	 * 
	 * @param nie value
	 * @returns true if nie is valid false otherwise
	 */
	personalize_validate_nie(nie) {

		//var nie = document.getElementById('dni').value;
		// Change the initial letter for the corresponding number and validate as DNI
		var nie_prefix = nie.charAt(0);

		switch (nie_prefix) {
			case 'X': nie_prefix = 0; break;
			case 'Y': nie_prefix = 1; break;
			case 'Z': nie_prefix = 2; break;
		}

		return this.personalize_validate_dni(nie_prefix + nie.substr(1));

	}




	/*9 dígitos (0-9)*/
	ADD_alumnograduacion_telefono_validation() {
		if (!this.validations.min_size('alumnograduacion_telefono', 9)) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_min_size_KO');
			return 'alumnograduacion_telefono_min_size_KO'
		}
		if (!this.validations.max_size('alumnograduacion_telefono', 9)) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
			return 'alumnograduacion_telefono_max_size_KO';
		}
		if (!(this.validations.format('alumnograduacion_telefono', '^[0-9]{9}$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
			return 'alumnograduacion_telefono_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_telefono');
		return true
	}
	/*alfanuméricos con acentos y ñ y espacios*/
	ADD_alumnograduacion_direccion_validation() {
		if (!this.validations.min_size('alumnograduacion_direccion', 1)) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_min_size_KO')
			return 'alumnograduacion_direccion_min_size_KO'
		}
		if (!this.validations.max_size('alumnograduacion_direccion', 100)) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO')
			return 'alumnograduacion_direccion_max_size_KO'
		}
		if (!(this.validations.format('alumnograduacion_direccion', '^[A-Za-z0-9áéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO')
			return 'alumnograduacion_direccion_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_direccion');
		return true
	}
	/*formato email*/
	ADD_alumnograduacion_email_validation() {
		if (!this.validations.min_size('alumnograduacion_email', 1)) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_min_size_KO')
			return 'alumnograduacion_email_min_size_KO'
		}
		if (!this.validations.max_size('alumnograduacion_email', 100)) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO')
			return 'alumnograduacion_email_max_size_KO'
		}
		// Expresión regular razonable para emails (no perfecta pero segura para la mayoría de casos)
		const emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$';
		if (!this.validations.format('alumnograduacion_email', emailPattern)) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
			return 'alumnograduacion_email_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_email');
		return true
	}
	/*alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min 7 max 100. Sólo jpg y tamaño de
	fichero menor de 2.000.000 bytes.*/
	ADD_nuevo_alumnograduacion_fotoacto_validation() {
		if (!(this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto'))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_not_exist_file_KO');
			return "nuevo_alumnograduacion_fotoacto_not_exists_file_KO";
		}
		if (!(this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 2000000))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO');
			return "nuevo_alumnograduacion_fotoacto_max_size_file_KO";
		}
		// Aceptar ambas variantes comunes de MIME para jpeg por compatibilidad con navegadores/tests
		if (!(this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg','image/jpg']))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_type_file_KO');
			return "nuevo_alumnograduacion_fotoacto_type_file_KO";
		}
		// Validación del nombre del fichero: mínimo 7 caracteres
		if (!this.personalize_nuevo_alumnograduacion_fotoacto_name_min_size_validation('nuevo_alumnograduacion_fotoacto')) {
			return 'nuevo_alumnograduacion_fotoacto_name_min_size_KO';
		}
		// Validación del nombre del fichero: máximo 40 caracteres
		if (!this.personalize_nuevo_alumnograduacion_fotoacto_name_max_size_validation('nuevo_alumnograduacion_fotoacto')) {
			return 'nuevo_alumnograduacion_fotoacto_name_max_size_KO';
		}
		if (!(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z.]+$'))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_KO');
			return "nuevo_alumnograduacion_fotoacto_name_format_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
		return true;

	}

	/**
	 * Comprueba que el nombre del fichero subido en 'nuevo_alumnograduacion_fotoacto' no excede
	 * el número máximo de caracteres especificado.
	 * Muestra el mensaje de error correspondiente si falla.
	 *
	 * @param {number} maxChars - número máximo de caracteres permitidos para el nombre del fichero
	 * @returns {boolean} true si cumple la restricción, false en caso contrario
	 */
	personalize_nuevo_alumnograduacion_fotoacto_name_max_size_validation(id) {
		const input = document.getElementById(id);
		const filename = input.files[0].name;
		if (filename.length > 40) { // Máximo 40 caracteres
			return false;
		}

		return true;
	}

	/**
	 * Comprueba que el nombre del fichero subido tiene al menos el número mínimo
	 * de caracteres requerido (7 caracteres).
	 * Muestra el mensaje de error correspondiente si falla.
	 *
	 * @param {string} fieldId - ID del campo de fichero a validar
	 * @returns {boolean} true si cumple la restricción, false en caso contrario
	 */
	personalize_nuevo_alumnograduacion_fotoacto_name_min_size_validation(fieldId) {
		const input = document.getElementById(fieldId);

		const filename = input.files[0].name;
		if (filename.length < 7) { // Mínimo 7 caracteres
			return false;
		}
		return true;
	}

	ADD_submit_alumnograduacion() {

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

	EDIT_alumnograduacion_login_validation() {
		return this.ADD_alumnograduacion_login_validation();
	}

	EDIT_alumnograduacion_password_validation() {
		return this.ADD_alumnograduacion_password_validation();
	}

	EDIT_alumnograduacion_nombre_validation() {
		return this.ADD_alumnograduacion_nombre_validation();
	}

	EDIT_alumnograduacion_apellidos_validation() {
		return this.ADD_alumnograduacion_apellidos_validation();
	}

	EDIT_alumnograduacion_titulacion_validation() {
		return this.ADD_alumnograduacion_titulacion_validation();
	}

	EDIT_alumnograduacion_dni_validation() {
		return this.ADD_alumnograduacion_dni_validation();
	}

	EDIT_alumnograduacion_telefono_validation() {
		return this.ADD_alumnograduacion_telefono_validation();
	}

	EDIT_alumnograduacion_direccion_validation() {
		return this.ADD_alumnograduacion_direccion_validation();
	}

	EDIT_alumnograduacion_email_validation() {
		return this.ADD_alumnograduacion_email_validation();
	}

	EDIT_nuevo_alumnograduacion_fotoacto_validation() {
		if (!(this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto'))) {
			this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
			return true;
		}
		// corregir tamaño máximo a 2MB (2000000) — antes estaba 2000 por error
		if (!(this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 2000000))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO');
			return "nuevo_alumnograduacion_fotoacto_max_size_file_KO";
		}
		// Aceptar ambas variantes comunes de MIME para jpeg por compatibilidad con navegadores/tests
		if (!(this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg','image/jpg']))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_type_file_KO');
			return "nuevo_alumnograduacion_fotoacto_type_file_KO";
		}
		// Validación del nombre del fichero: mínimo 7 caracteres
		if (!this.personalize_nuevo_alumnograduacion_fotoacto_name_min_size_validation('nuevo_alumnograduacion_fotoacto')) {
			return 'nuevo_alumnograduacion_fotoacto_name_min_size_KO';
		}
		// Validación del nombre del fichero: máximo 40 caracteres
		if (!this.personalize_nuevo_alumnograduacion_fotoacto_name_max_size_validation('nuevo_alumnograduacion_fotoacto')) {
			return 'nuevo_alumnograduacion_fotoacto_name_max_size_KO';
		}
		if (!(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z.]+$'))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_KO');
			return "nuevo_alumnograduacion_fotoacto_name_format_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
		return true;
	}

	EDIT_submit_alumnograduacion() {

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

	SEARCH_alumnograduacion_login_validation() {
		if (!this.validations.max_size('alumnograduacion_login', 15)) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
			return 'alumnograduacion_login_max_size_KO';
		}
		if (!(this.validations.format('alumnograduacion_login', '^[A-Za-z]*$'))) {
			return 'alumnograduacion_login_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_password_validation() {
		if (!this.search_max_size_password(document.getElementById('alumnograduacion_password').value)) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO')
			return 'alumnograduacion_password_max_size_KO'
		}
		if (!(this.search_format_password(document.getElementById('alumnograduacion_password').value))) {
			return 'alumnograduacion_password_format_KO'
		}
		return true;
	}

	search_max_size_password(password) {
		// Validar nulos y vacíos
		if (!password) return false;

		// Comprobar longitud máxima (64)
		if (password.length > 100) return false;

		return true;
	}

	search_format_password(password) {
		// 1. Verificar que no es null/undefined
		if (!password) return false;

		// 2. Expresión regular para verificar solo letras y espacios
		// ^ inicio de string
		// $ fin de string
		// [a-zA-Z ] solo letras (mayúsculas y minúsculas) y espacios
		// + uno o más caracteres
		const regex = /^[a-zA-Z ]*$/;

		return regex.test(password);
	}

	SEARCH_alumnograduacion_nombre_validation() {
		if (!this.validations.max_size('alumnograduacion_nombre', 25)) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO')
			return 'alumnograduacion_nombre_max_size_KO'
		}
		if (!this.validations.format('alumnograduacion_nombre', '^[a-zA-ZáéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$')) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO')
			return 'alumnograduacion_nombre_format_KO'
		}

		return true;
	}

	SEARCH_alumnograduacion_apellidos_validation() {
		if (!this.validations.max_size('alumnograduacion_apellidos', 35)) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO')
			return 'alumnograduacion_apellidos_max_size_KO'
		}
		if (!this.validations.format('alumnograduacion_apellidos', '^[a-zA-ZáéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$')) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO')
			return 'alumnograduacion_apellidos_format_KO'
		}

		return true;
	}

	SEARCH_alumnograduacion_titulacion_validation() {
		// En SEARCH el campo puede quedar vacío (búsqueda libre). Si viene vacío, es válido.
		const elem = document.getElementById('alumnograduacion_titulacion');
		if (!elem) return true;
		const valor = elem.value;
		const valoresPermitidos = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];

		// Permitir vacío en SEARCH
		if (!valor) {
			this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
			return true;
		}

		// Comprobar tamaño máximo (más estricto primero)
		if (valor.length > 4) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_max_size_KO');
			return 'alumnograduacion_titulacion_max_size_KO';
		}

		// Comprobar formato: en SEARCH sólo se aceptan los valores del enumerado
		if (!valoresPermitidos.includes(valor)) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
			return 'alumnograduacion_titulacion_format_KO';
		}

		this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
		return true;
	}

	SEARCH_alumnograduacion_dni_validation() {
		if (!this.validations.max_size('alumnograduacion_dni', 9)) {
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO');
			return 'alumnograduacion_dni_max_size_KO';
		}
		var resp = this.personalize_dni_nie_search('alumnograduacion_dni');
		if (!(resp === true)) {
			this.dom.mostrar_error_campo('alumnograduacion_dni', resp);
			return resp;
		}
		return true;
	}

	personalize_dni_nie_search() {
		var dni = document.getElementById('alumnograduacion_dni').value;

		const dniMatch = this.extract_dni_search(dni);
		if (dniMatch) {
			if (!this.personalize_validate_dni_search(dniMatch)) {
				return "alumnograduacion_dni_validate_KO";
			}
			return true;
		}

		const nieMatch = this.extract_nie_search(dni);
		if (nieMatch) {
			if (!this.personalize_validate_nie_search(nieMatch)) {
				return "alumnograduacion_nie_validate_KO";
			}
			return true;
		}

		this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_nie_format_KO');
		return "alumnograduacion_dni_nie_format_KO";
	}

	extract_dni_search(text) {
		const dniRegex = /([0-9]{8}[A-Z])/;
		const match = text.match(dniRegex);
		return match ? match[1] : null;
	}

	extract_nie_search(text) {
		const nieRegex = /([XYZ][0-9]{7}[A-Z])/;
		const match = text.match(nieRegex);
		return match ? match[1] : null;
	}

	personalize_validate_dni_search(dni) {
		const dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
		const number = parseInt(dni.substr(0, 8), 10);
		const letter = dni_letters.charAt(number % 23);
		return letter === dni.charAt(8);
	}

	personalize_validate_nie_search(nie) {
		let nie_prefix = nie.charAt(0);
		switch (nie_prefix) {
			case 'X': nie_prefix = '0'; break;
			case 'Y': nie_prefix = '1'; break;
			case 'Z': nie_prefix = '2'; break;
		}
		const dni_equivalent = nie_prefix + nie.substr(1, 7);
		const full_dni = dni_equivalent + nie.charAt(8);
		return this.personalize_validate_dni_search(full_dni);
	}



	SEARCH_alumnograduacion_telefono_validation() {
		if (!this.validations.max_size('alumnograduacion_telefono', 9)) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
			return 'alumnograduacion_telefono_max_size_KO';
		}
		if (!(this.validations.format('alumnograduacion_telefono', '^[0-9]{9}$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
			return 'alumnograduacion_telefono_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_direccion_validation() {
		if (!this.validations.max_size('alumnograduacion_direccion', 100)) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO')
			return 'alumnograduacion_direccion_max_size_KO'
		}
		if (!(this.validations.format('alumnograduacion_direccion', '^[A-Za-z0-9áéíóúÁÉÍÓÚàèòÀÈÒñÑ ]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO')
			return 'alumnograduacion_direccion_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_email_validation() {
		if (!this.validations.max_size('alumnograduacion_email', 100)) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
			return 'alumnograduacion_email_max_size_KO'
		}
		if (!this.validations.format('alumnograduacion_email', '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
			return 'alumnograduacion_email_format_KO'
		}
		return true;
	}

	SEARCH_alumnograduacion_fotoacto_validation() {
		if (!this.validations.max_size('alumnograduacion_fotoacto', 40)) {
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_max_size_KO')
			return 'alumnograduacion_fotoacto_name_max_size_KO'
		}
		if (!this.validations.format('alumnograduacion_fotoacto', '^[A-Za-z.]*$')) {
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_KO')
			return 'alumnograduacion_fotoacto_name_format_KO'
		}
		return true;
	}

	SEARCH_submit_alumnograduacion() {

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


	createForm_EDIT(fila) {

		// limpiar poner titulo y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');

		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_EDIT');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_' + this.nombreentidad);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/' + fila.alumnograduacion_fotoacto);



		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu', 'EDIT');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('alumnograduacion_dni', 'readonly', 'true');
		this.dom.assign_property_value('alumnograduacion_fotoacto', 'readonly', 'true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();

	}

	createForm_DELETE(fila) {

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

		this.dom.show_element('Div_IU_form', 'block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_DELETE');

		// rellenar y action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_alumnograduacion_fotoacto (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/' + fila.alumnograduacion_fotoacto);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('DELETE');

		setLang();
	}

	createForm_SHOWCURRENT(fila) {
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SHOWCURRENT');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_alumnograduacion_fotoacto (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/' + fila.alumnograduacion_fotoacto);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		//this.colocarboton('SHOWCURRENT');

		setLang();

	}

	createForm_ADD() {

		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_ADD');

		// poner onsubmit
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_' + this.nombreentidad + '()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// poner no visible el campo alumnograduacion_fotoacto (solo se puede subir fichero)
		this.dom.hide_element_form('alumnograduacion_fotoacto');
		this.dom.hide_element('link_alumnograduacion_fotoacto');

		// rellenar valores
		// en ADD no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu', 'ADD');

		// poner inactivos los campos correspondientes
		// en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang();
	}

	createForm_SEARCH() {

		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SEARCH');

		// poner onsubmit
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_' + this.nombreentidad + '()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// poner no visible el campo alumnograduacion_fotoacto (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.hide_element('link_alumnograduacion_fotoacto');

		//Escondemos la password para no permitir buscar por contraseña (se supone que son ocultas)
		this.dom.hide_element_form('alumnograduacion_password');

		// reemplazar enumerados por texto
		// titulacionque es un select
		this.dom.replaceSelectXEmptyInput('alumnograduacion_titulacion');

		// rellenar valores
		// en SEARCH no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu', 'SEARCH');

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
	mostrarcambioatributo(atributo, valorentrada) {

		switch (atributo) {
			case 'alumnograduacion_fotoacto':
				var link = 'error';
				if (valorentrada !== '') {
					link = valorentrada + `  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/` + valorentrada + `"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
			case 'alumnograduacion_password':
				var ocultar = '********';
				return ocultar;
				break;
			case 'default':
				alert('no existe mostrar especial para ese atributo');
				break;
		}
	}





}
