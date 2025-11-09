class ubicacion extends EntidadAbstracta {

    constructor(esTest) {
        super();

        this.columnasamostrar = ['id_site', 'site_latitud', 'site_longitud', 'site_altitude', 'site_locality', 'site_provider_login'];

        this.mostrarespecial = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];

        this.attributes = [
            'id_site',
            'site_latitud',
            'site_longitud',
            'site_altitude',
            'site_locality',
            'site_provider_login',
            'site_north_photo',
            'site_south_photo',
            'site_east_photo',
            'site_west_photo'
        ];
    }

    manual_form_creation() {
        var form_content = `
        <form id="form_iu" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_ubicacion();" class='formulario'>

			<label class="label_id_site">Id de la ubicación</label>
			<input type='text' id='id_site' name='id_site' onblur=" return entidad.ADD_id_site_validation();"></input>
			<span id="span_error_id_site"><a id="error_id_site"></a></span>
			<br>
			
			<label class="label_site_latitud">Latitud de la ubicación</label>
			<input type='text' id='site_latitud' name='site_latitud' onblur=" return entidad.ADD_site_latitud_validation();"></input>
			<span id="span_error_site_latitud" ><a id="error_site_latitud"></a></span>
			<br>
			
			<label class="label_site_longitud">Longitud de la ubicación</label>
			<input type='text' id='site_longitud' name='site_longitud'></input>
			<span id="span_error_site_longitud" ><a id="error_site_longitud"></a></span>
			<br>
			
			<label class="label_site_altitude">Altitud de la ubicación</label>
			<input type='text' id='site_altitude' name='site_altitude'></input>
			<span id="span_error_site_altitude" ><a id="error_site_altitude"></a></span>
			
			<br>

            <label class="label_site_locality">Localidad</label>
			<input type='text' id='site_locality' name='site_locality'></input>
			<span id="span_error_site_locality" ><a id="error_site_locality"></a></span>
            <br>

			<label class="label_site_provider_login">Login del proveedor de la ubicación</label>
			<input type='text' id='site_provider_login' name='site_provider_login'></input>
			<span id="span_error_site_provider_login" ><a id="error_site_provider_login"></a></span>
			
			<br>

			<label id="label_site_north_photo" class="label_site_north_photo">Foto hacia el norte</label>
			<input type='text' id='site_north_photo' name='site_north_photo'></input>
			<span id="span_error_site_north_photo"><a id="error_site_north_photo"></a></span>
			<a id="link_site_north_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_site_north_photo" class="label_nuevo_site_north_photo">Nueva foto hacia el norte</label>
			<input type='file' id='nuevo_site_north_photo' name='nuevo_site_north_photo'></input>
			<span id="span_error_nuevo_site_north_photo"><a id="error_nuevo_site_north_photo"></a></span>
			<br>

            <label id="label_site_south_photo" class="label_site_south_photo">Foto hacia el sur</label>
            <input type='text' id='site_south_photo' name='site_south_photo'></input>
            <span id="span_error_site_south_photo"><a id="error_site_south_photo"></a></span>
            <a id="link_site_south_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/"><img src="./iconos/FILE.png" /></a>

            <label id="label_nuevo_site_south_photo" class="label_nuevo_site_south_photo">Nueva foto hacia el sur</label>
            <input type='file' id='nuevo_site_south_photo' name='nuevo_site_south_photo'></input>
            <span id="span_error_nuevo_site_south_photo"><a id="error_nuevo_site_south_photo"></a></span>
            <br>

            <label id="label_site_east_photo" class="label_site_east_photo">Foto hacia el este</label>
            <input type='text' id='site_east_photo' name='site_east_photo'></input>
            <span id="span_error_site_east_photo"><a id="error_site_east_photo"></a></span>
            <a id="link_site_east_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/"><img src="./iconos/FILE.png" /></a>

            <label id="label_nuevo_site_east_photo" class="label_nuevo_site_east_photo">Nueva foto hacia el este</label>
            <input type='file' id='nuevo_site_east_photo' name='nuevo_site_east_photo'></input>
            <span id="span_error_nuevo_site_east_photo"><a id="error_nuevo_site_east_photo"></a></span>
            <br>

            <label id="label_site_west_photo" class="label_site_west_photo">Foto hacia el oeste</label>
            <input type='text' id='site_west_photo' name='site_west_photo'></input>
            <span id="span_error_site_west_photo"><a id="error_site_west_photo"></a></span>
            <a id="link_site_west_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/"><img src="./iconos/FILE.png" /></a>

            <label id="label_nuevo_site_west_photo" class="label_nuevo_site_west_photo">Nueva foto hacia el oeste</label>
            <input type='file' id='nuevo_site_west_photo' name='nuevo_site_west_photo'></input>
            <span id="span_error_nuevo_site_west_photo"><a id="error_nuevo_site_west_photo"></a></span>
            <br>

            <br>

			<input id="submit_button" type="submit" value="Submit">

		</form>'
		`
        return form_content;
    }

    ADD_id_site_validation() {
        if (!(this.validations.min_size('id_site', 11))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_min_size_KO');
            return "id_site_min_size_KO";
        }
        if (!(this.validations.max_size('id_site', 11))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_max_size_KO');
            return "id_site_max_size_KO";
        }
        if (!(this.validations.format('id_site', '^[0-9]+$'))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_format_KO');
            return "id_site_format_KO";
        }
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }

    ADD_site_latitud_validation() {
        if (!(this.validations.format('site_latitud', '^[+-]?\\d{1,3}\\.\\d{6}$'))) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_format_KO');
            return "site_latitud_format_KO";
        }
        if (!(this.personalize_latitud_min_value('site_latitud', -90))) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_min_size_KO');
            return "site_latitud_min_size_KO";
        }
        if (!(this.personalize_latitud_max_value('site_latitud', 90))) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_max_size_KO');
            return "site_latitud_max_size_KO";
        }

        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }

    personalize_latitud_min_value(id, min) {
        const el = document.getElementById(id);
        if (!el) return false;
        const value = Number(el.value);
        return value >= min;
    }

    personalize_latitud_max_value(id, max) {
        const el = document.getElementById(id);
        if (!el) return false;
        const value = Number(el.value);
        return value <= max;
    }

    ADD_site_longitud_validation() {
        if (!(this.validations.format('site_longitud', '^[+-]?\\d{1,3}\\.\\d{6}$'))) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_format_KO');
            return "site_longitud_format_KO";
        }
        if (!(this.personalize_longitud_min_value('site_longitud', -180))) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_min_size_KO');
            return "site_longitud_min_size_KO";
        }
        if (!(this.personalize_longitud_max_value('site_longitud', 180))) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_max_size_KO');
            return "site_longitud_max_size_KO";
        }
        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }

    personalize_longitud_min_value(id, min) {
        const el = document.getElementById(id);
        if (!el) return false;
        const value = Number(el.value);
        return value >= min;
    }

    personalize_longitud_max_value(id, max) {
        const el = document.getElementById(id);
        if (!el) return false;
        const value = Number(el.value);
        return value <= max;
    }

    ADD_site_altitude_validation() {
        if (!(this.validations.format('site_altitude', '^[-]?[0-9]+$'))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_format_KO');
            return "site_altitude_format_KO";
        }
        if (!(this.personalize_altitude_min_value('site_altitude', -465))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_min_size_KO');
            return "site_altitude_min_size_KO";
        }
        if (!(this.personalize_altitude_max_value('site_altitude', 8848))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_max_size_KO');
            return "site_altitude_max_size_KO";
        }
        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }

    personalize_altitude_min_value(id, min) {
        const el = document.getElementById(id);
        if (!el) return false;
        const value = Number(el.value);
        return value >= min;
    }

    personalize_altitude_max_value(id, max) {
        const el = document.getElementById(id);
        if (!el) return false;
        const value = Number(el.value);
        return value <= max;
    }

    ADD_site_locality_validation() {
        if (!(this.validations.min_size('site_locality', 3))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_min_size_KO');
            return "site_locality_min_size_KO";
        }
        if (!(this.validations.max_size('site_locality', 40))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO');
            return "site_locality_max_size_KO";
        }
        if (!(this.validations.format('site_locality', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$'))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO');
            return "site_locality_format_KO";
        }
        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }

    ADD_site_provider_login_validation() {
        if (!(this.validations.min_size('site_provider_login', 7))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_min_size_KO');
            return "site_provider_login_min_size_KO";
        }
        if (!(this.validations.max_size('site_provider_login', 30))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO');
            return "site_provider_login_max_size_KO";
        }
        if (!(this.validations.format('site_provider_login', '^[a-zA-Z0-9]+$'))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO');
            return "site_provider_login_format_KO";
        }
        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }

    ADD_nuevo_site_north_photo_validation() {
        if (!(this.validations.not_exist_file('nuevo_site_north_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_not_exists_file_KO');
            return "nuevo_site_north_photo_not_exists_file_KO";
        }
        if (!(this.validations.max_size_file('nuevo_site_north_photo', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_max_size_file_KO');
            return "nuevo_site_north_photo_max_size_file_KO";
        }
        if (!this.validations.type_file('nuevo_site_north_photo', ['image/jpeg'])) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_type_file_KO');
            return "nuevo_site_north_photo_type_file_KO";
        }
        if (!(this.personalized_nuevo_site_north_photo_name_min_size_validation('nuevo_site_north_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_name_min_size_KO');
            return "nuevo_site_north_photo_name_min_size_KO";
        }
        if (!(this.personalized_nuevo_site_north_photo_name_max_size_validation('nuevo_site_north_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_name_max_size_KO');
            return "nuevo_site_north_photo_name_max_size_KO";
        }
        if (!(this.validations.format_name_file('nuevo_site_north_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_name_format_KO');
            return "nuevo_site_north_photo_name_format_KO";
        }

        this.dom.mostrar_exito_campo('nuevo_site_north_photo');
        return true;
    }

    personalized_nuevo_site_north_photo_name_min_size_validation(id) {
        let input = document.getElementById(id);
        let filename = input.files[0].name;
        if (filename.length < 3) {
            return false;
        }
        return true;
    }

    personalized_nuevo_site_north_photo_name_max_size_validation(id) {
        let input = document.getElementById(id);
        let filename = input.files[0].name;
        if (filename.length > 50) {
            return false;
        }
        return true;
    }

    ADD_nuevo_site_south_photo_validation() {
        if (!(this.validations.not_exist_file('nuevo_site_south_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_not_exists_file_KO');
            return "nuevo_site_south_photo_not_exists_file_KO";
        }
        if (!(this.validations.max_size_file('nuevo_site_south_photo', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_max_size_file_KO');
            return "nuevo_site_south_photo_max_size_file_KO";
        }
        if (!this.validations.type_file('nuevo_site_south_photo', ['image/jpeg'])) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_type_file_KO');
            return "nuevo_site_south_photo_type_file_KO";
        }
        if (!(this.personalized_nuevo_site_south_photo_name_min_size_validation('nuevo_site_south_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_name_min_size_KO');
            return "nuevo_site_south_photo_name_min_size_KO";
        }
        if (!(this.personalized_nuevo_site_south_photo_name_max_size_validation('nuevo_site_south_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_name_max_size_KO');
            return "nuevo_site_south_photo_name_max_size_KO";
        }
        if (!(this.validations.format_name_file('nuevo_site_south_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_name_format_KO');
            return "nuevo_site_south_photo_name_format_KO";
        }

        this.dom.mostrar_exito_campo('nuevo_site_south_photo');
        return true;
    }

    personalized_nuevo_site_south_photo_name_min_size_validation(id) {
        let input = document.getElementById(id);
        let filename = input.files[0].name;
        if (filename.length < 3) {
            return false;
        }
        return true;
    }

    personalized_nuevo_site_south_photo_name_max_size_validation(id) {
        let input = document.getElementById(id);
        let filename = input.files[0].name;
        if (filename.length > 50) {
            return false;
        }
        return true;
    }


    ADD_nuevo_site_east_photo_validation() {
        if (!(this.validations.not_exist_file('nuevo_site_east_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_not_exists_file_KO');
            return "nuevo_site_east_photo_not_exists_file_KO";
        }
        if (!(this.validations.max_size_file('nuevo_site_east_photo', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_max_size_file_KO');
            return "nuevo_site_east_photo_max_size_file_KO";
        }
        if (!this.validations.type_file('nuevo_site_east_photo', ['image/jpeg'])) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_type_file_KO');
            return "nuevo_site_east_photo_type_file_KO";
        }
        if (!(this.personalized_nuevo_site_east_photo_name_min_size_validation('nuevo_site_east_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_name_min_size_KO');
            return "nuevo_site_east_photo_name_min_size_KO";
        }
        if (!(this.personalized_nuevo_site_east_photo_name_max_size_validation('nuevo_site_east_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_name_max_size_KO');
            return "nuevo_site_east_photo_name_max_size_KO";
        }
        if (!(this.validations.format_name_file('nuevo_site_east_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_name_format_KO');
            return "nuevo_site_east_photo_name_format_KO";
        }

        this.dom.mostrar_exito_campo('nuevo_site_east_photo');
        return true;
    }

    personalized_nuevo_site_east_photo_name_min_size_validation(id) {
        let input = document.getElementById(id);
        let filename = input.files[0].name;
        if (filename.length < 3) {
            return false;
        }
        return true;
    }

    personalized_nuevo_site_east_photo_name_max_size_validation(id) {
        let input = document.getElementById(id);
        let filename = input.files[0].name;
        if (filename.length > 50) {
            return false;
        }
        return true;
    }

    ADD_nuevo_site_west_photo_validation() {
        if (!(this.validations.not_exist_file('nuevo_site_west_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_not_exists_file_KO');
            return "nuevo_site_west_photo_not_exists_file_KO";
        }
        if (!(this.validations.max_size_file('nuevo_site_west_photo', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_max_size_file_KO');
            return "nuevo_site_west_photo_max_size_file_KO";
        }
        if (!this.validations.type_file('nuevo_site_west_photo', ['image/jpeg'])) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_type_file_KO');
            return "nuevo_site_west_photo_type_file_KO";
        }
        if (!(this.personalized_nuevo_site_west_photo_name_min_size_validation('nuevo_site_west_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_name_min_size_KO');
            return "nuevo_site_west_photo_name_min_size_KO";
        }
        if (!(this.personalized_nuevo_site_west_photo_name_max_size_validation('nuevo_site_west_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_name_max_size_KO');
            return "nuevo_site_west_photo_name_max_size_KO";
        }
        if (!(this.validations.format_name_file('nuevo_site_west_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_name_format_KO');
            return "nuevo_site_west_photo_name_format_KO";
        }

        this.dom.mostrar_exito_campo('nuevo_site_west_photo');
        return true;
    }

    personalized_nuevo_site_west_photo_name_min_size_validation(id) {
        let input = document.getElementById(id);
        let filename = input.files[0].name;
        if (filename.length < 3) {
            return false;
        }
        return true;
    }
    personalized_nuevo_site_west_photo_name_max_size_validation(id) {
        let input = document.getElementById(id);
        let filename = input.files[0].name;
        if (filename.length > 50) {
            return false;
        }
        return true;
    }

    ADD_submit_ubicacion() {
        let result = [
            (this.ADD_id_site_validation) &
            (this.ADD_site_latitud_validation) &
            (this.ADD_site_longitud_validation) &
            (this.ADD_site_atitude_validation) &
            (this.ADD_site_locality_validation) &
            (this.ADD_site_provider_login_validation) &
            (this.ADD_nuevo_site_north_photo_validation) &
            (this.ADD_nuevo_site_south_photo_validation) &
            (this.ADD_nuevo_site_east_photo_validation) &
            (this.ADD_nuevo_site_west_photo_validation)
        ];
        result = Boolean(result);

        return result;
    }

    EDIT_id_site_validation() {
        return this.ADD_id_site_validation();
    }

    EDIT_site_latitud_validation() {
        return this.ADD_site_latitud_validation();
    }

    EDIT_site_longitud_validation() {
        return this.ADD_site_longitud_validation();
    }

    EDIT_site_altitude_validation() {
        return this.ADD_site_altitude_validation();
    }

    EDIT_site_locality_validation() {
        return this.ADD_site_locality_validation();
    }

    EDIT_site_provider_login_validation() {
        return this.ADD_site_provider_login_validation();
    }

    EDIT_nuevo_site_north_photo_validation() {
        if (!(this.validations.not_exist_file('nuevo_site_north_photo'))) {
            return true;
        }
        if (!(this.validations.max_size_file('nuevo_site_north_photo', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_max_size_file_KO');
            return "nuevo_site_north_photo_max_size_file_KO";
        }
        if (!this.validations.type_file('nuevo_site_north_photo', ['image/jpeg'])) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_type_file_KO');
            return "nuevo_site_north_photo_type_file_KO";
        }
        if (!(this.personalized_nuevo_site_north_photo_name_min_size_validation('nuevo_site_north_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_name_min_size_KO');
            return "nuevo_site_north_photo_name_min_size_KO";
        }
        if (!(this.personalized_nuevo_site_north_photo_name_max_size_validation('nuevo_site_north_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_name_max_size_KO');
            return "nuevo_site_north_photo_name_max_size_KO";
        }
        if (!(this.validations.format_name_file('nuevo_site_north_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_name_format_KO');
            return "nuevo_site_north_photo_name_format_KO";
        }

        this.dom.mostrar_exito_campo('nuevo_site_north_photo');
        return true;
    }


    EDIT_nuevo_site_south_photo_validation() {
        if (!(this.validations.not_exist_file('nuevo_site_south_photo'))) {
            return true;
        }
        if (!(this.validations.max_size_file('nuevo_site_south_photo', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_max_size_file_KO');
            return "nuevo_site_south_photo_max_size_file_KO";
        }
        if (!this.validations.type_file('nuevo_site_south_photo', ['image/jpeg'])) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_type_file_KO');
            return "nuevo_site_south_photo_type_file_KO";
        }
        if (!(this.personalized_nuevo_site_south_photo_name_min_size_validation('nuevo_site_south_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_name_min_size_KO');
            return "nuevo_site_south_photo_name_min_size_KO";
        }
        if (!(this.personalized_nuevo_site_south_photo_name_max_size_validation('nuevo_site_south_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_name_max_size_KO');
            return "nuevo_site_south_photo_name_max_size_KO";
        }
        if (!(this.validations.format_name_file('nuevo_site_south_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_name_format_KO');
            return "nuevo_site_south_photo_name_format_KO";
        }

        this.dom.mostrar_exito_campo('nuevo_site_south_photo');
        return true;
    }



    EDIT_nuevo_site_east_photo_validation() {
        if (!(this.validations.not_exist_file('nuevo_site_east_photo'))) {
            return true;
        }
        if (!(this.validations.max_size_file('nuevo_site_east_photo', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_max_size_file_KO');
            return "nuevo_site_east_photo_max_size_file_KO";
        }
        if (!this.validations.type_file('nuevo_site_east_photo', ['image/jpeg'])) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_type_file_KO');
            return "nuevo_site_east_photo_type_file_KO";
        }
        if (!(this.personalized_nuevo_site_east_photo_name_min_size_validation('nuevo_site_east_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_name_min_size_KO');
            return "nuevo_site_east_photo_name_min_size_KO";
        }
        if (!(this.personalized_nuevo_site_east_photo_name_max_size_validation('nuevo_site_east_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_name_max_size_KO');
            return "nuevo_site_east_photo_name_max_size_KO";
        }
        if (!(this.validations.format_name_file('nuevo_site_east_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_name_format_KO');
            return "nuevo_site_east_photo_name_format_KO";
        }

        this.dom.mostrar_exito_campo('nuevo_site_east_photo');
        return true;
    }



    EDIT_nuevo_site_west_photo_validation() {
        if (!(this.validations.not_exist_file('nuevo_site_west_photo'))) {
            return true;
        }
        if (!(this.validations.max_size_file('nuevo_site_west_photo', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_max_size_file_KO');
            return "nuevo_site_west_photo_max_size_file_KO";
        }
        if (!this.validations.type_file('nuevo_site_west_photo', ['image/jpeg'])) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_type_file_KO');
            return "nuevo_site_west_photo_type_file_KO";
        }
        if (!(this.personalized_nuevo_site_west_photo_name_min_size_validation('nuevo_site_west_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_name_min_size_KO');
            return "nuevo_site_west_photo_name_min_size_KO";
        }
        if (!(this.personalized_nuevo_site_west_photo_name_max_size_validation('nuevo_site_west_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_name_max_size_KO');
            return "nuevo_site_west_photo_name_max_size_KO";
        }
        if (!(this.validations.format_name_file('nuevo_site_west_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_name_format_KO');
            return "nuevo_site_west_photo_name_format_KO";
        }

        this.dom.mostrar_exito_campo('nuevo_site_west_photo');
        return true;
    }

    EDIT_submit_ubicacion() {
        let result = [
            (this.EDIT_id_site_validation) &
            (this.EDIT_site_latitud_validation) &
            (this.EDIT_site_longitud_validation) &
            (this.EDIT_site_altitude_validation) &
            (this.EDIT_site_locality_validation) &
            (this.EDIT_site_provider_login_validation) &
            (this.EDIT_nuevo_site_north_photo_validation) &
            (this.EDIT_nuevo_site_south_photo_validation) &
            (this.EDIT_nuevo_site_east_photo_validation) &
            (this.EDIT_nuevo_site_west_photo_validation)
        ];
        result = Boolean(result);

        return result;
    }

    SEARCH_id_site_validation() {
        if (!(this.validations.max_size('id_site', 11))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_max_size_KO');
            return "id_site_max_size_KO";
        }
        if (!(this.validations.format('id_site', '^[0-9]+$'))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_format_KO');
            return "id_site_format_KO";
        }
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }

    SEARCH_site_latitud_validation() {
        if (!(this.validations.format('site_latitud', '^[+-]?\\d{1,3}\\.\\d{6}$'))) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_format_KO');
            return "site_latitud_format_KO";
        }
        if (!(this.personalize_latitud_max_value('site_latitud', 90))) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_max_size_KO');
            return "site_latitud_max_size_KO";
        }
        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }

    SEARCH_site_longitud_validation() {
        if (!(this.validations.format('site_longitud', '^[+-]?\\d{1,3}\\.\\d{6}$'))) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_format_KO');
            return "site_longitud_format_KO";
        }
        if (!(this.personalize_longitud_max_value('site_longitud', 180))) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_max_size_KO');
            return "site_longitud_max_size_KO";
        }

        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }

    SEARCH_site_altitude_validation() {
        if (!(this.validations.format('site_altitude', '^[-]?[0-9]+$'))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_format_KO');
            return "site_altitude_format_KO";
        }
        if (!(this.personalize_altitude_max_value('site_altitude', 8848))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_max_size_KO');
            return "site_altitude_max_size_KO";
        }
        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }

    SEARCH_site_locality_validation() {
        if (!(this.validations.max_size('site_locality', 40))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO');
            return "site_locality_max_size_KO";
        }
        if (!(this.validations.format('site_locality', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$'))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO');
            return "site_locality_format_KO";
        }
        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }

    SEARCH_site_provider_login_validation() {
        if (!(this.validations.max_size('site_provider_login', 30))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO');
            return "site_provider_login_max_size_KO";
        }
        if (!(this.validations.format('site_provider_login', '^[a-zA-Z0-9]+$'))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO');
            return "site_provider_login_format_KO";
        }
        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }

    SEARCH_site_north_photo_validation() {
        if (!(this.validations.max_size('site_north_photo', 50))) {
            this.dom.mostrar_error_campo('site_north_photo', 'site_north_photo_name_max_size_KO');
            return "site_north_photo_name_max_size_KO";
        }
        if (!(this.validations.format('site_north_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('site_north_photo', 'site_north_photo_name_format_KO');
            return "site_north_photo_name_format_KO";
        }
        this.dom.mostrar_exito_campo('site_north_photo');
        return true;
    }

    SEARCH_site_south_photo_validation() {
        if (!(this.validations.max_size('site_south_photo', 50))) {
            this.dom.mostrar_error_campo('site_south_photo', 'site_south_photo_name_max_size_KO');
            return "site_south_photo_name_max_size_KO";
        }
        if (!(this.validations.format('site_south_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('site_south_photo', 'site_south_photo_name_format_KO');
            return "site_south_photo_name_format_KO";
        }
        this.dom.mostrar_exito_campo('site_south_photo');
        return true;
    }

    SEARCH_site_east_photo_validation() {
        if (!(this.validations.max_size('site_east_photo', 50))) {
            this.dom.mostrar_error_campo('site_east_photo', 'site_east_photo_name_max_size_KO');
            return "site_east_photo_name_max_size_KO";
        }
        if (!(this.validations.format('site_east_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('site_east_photo', 'site_east_photo_name_format_KO');
            return "site_east_photo_name_format_KO";
        }
        this.dom.mostrar_exito_campo('site_east_photo');
        return true;
    }

    SEARCH_site_west_photo_validation() {
        if (!(this.validations.max_size('site_west_photo', 50))) {
            this.dom.mostrar_error_campo('site_west_photo', 'site_west_photo_name_max_size_KO');
            return "site_west_photo_name_max_size_KO";
        }
        if (!(this.validations.format('site_west_photo', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('site_west_photo', 'site_west_photo_fname_ormat_KO');
            return "site_west_photo_name_format_KO";
        }
        this.dom.mostrar_exito_campo('site_west_photo');
        return true;
    }

    SEARCH_submit_ubicacion() {
        let result = [
            (this.SEARCH_id_site_validation) &
            (this.SEARCH_site_latitud_validation) &
            (this.SEARCH_site_longitud_validation) &
            (this.SEARCH_site_altitude_validation) &
            (this.SEARCH_site_locality_validation) &
            (this.SEARCH_site_provider_login_validation) &
            (this.SEARCH_site_north_photo_validation) &
            (this.SEARCH_site_south_photo_validation) &
            (this.SEARCH_site_east_photo_validation) &
            (this.SEARCH_site_west_photo_validation)
        ];
        result = Boolean(result);

        return result;
    }

    createForm_EDIT(fila) {

        // limpiar poner titulo y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_EDIT');

        // rellenar onsubmit y action
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_' + this.nombreentidad);
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        //activar el link al fichero
        this.dom.assign_property_value('link_site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_ubicacion/' + fila.site_north_photo);



        // rellenar valores
        this.dom.rellenarvaloresform(fila);

        // poner las validaciones
        this.dom.colocarvalidaciones('form_iu', 'EDIT');

        // poner inactivos los campos correspondientes
        this.dom.assign_property_value('ubicacion_dni', 'readonly', 'true');
        this.dom.assign_property_value('site_north_photo', 'readonly', 'true');

        // colocar boton de submit
        this.dom.colocarboton('EDIT');

        setLang();

    }

    createForm_DELETE(fila) {

        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_DELETE');

        // rellenar y action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

        // poner no visible el campo nuevo_site_north_photo (solo se puede ver el nombre de fichero)
        this.dom.hide_element_form('nuevo_site_north_photo');
        this.dom.assign_property_value('link_site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_ubicacion/' + fila.site_north_photo);
        // poner no visible el campo nuevo_site_south_photo (solo se puede ver el nombre de fichero)
        this.dom.hide_element_form('nuevo_site_south_photo');
        this.dom.assign_property_value('link_site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_ubicacion/' + fila.site_south_photo);
        // poner no visible el campo nuevo_site_east_photo (solo se puede ver el nombre de fichero)
        this.dom.hide_element_form('nuevo_site_east_photo');
        this.dom.assign_property_value('link_site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_ubicacion/' + fila.site_east_photo);
        // poner no visible el campo nuevo_site_west_photo (solo se puede ver el nombre de fichero)
        this.dom.hide_element_form('nuevo_site_west_photo');
        this.dom.assign_property_value('link_site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_ubicacion/' + fila.site_west_photo);
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
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_SHOWCURRENT');

        // rellenar y action
        //this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

        // poner no visible el campo nuevo_site_north_photo (solo se puede ver el nombre de fichero)
        this.dom.hide_element_form('nuevo_site_north_photo');
        this.dom.assign_property_value('link_site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_ubicacion/' + fila.site_north_photo);
        // poner no visible el campo nuevo_site_south_photo (solo se puede ver el nombre de fichero)
        this.dom.hide_element_form('nuevo_site_south_photo');
        this.dom.assign_property_value('link_site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_ubicacion/' + fila.site_south_photo);
        // poner no visible el campo nuevo_site_east_photo (solo se puede ver el nombre de fichero)
        this.dom.hide_element_form('nuevo_site_east_photo');
        this.dom.assign_property_value('link_site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_ubicacion/' + fila.site_east_photo);
        // poner no visible el campo nuevo_site_west_photo (solo se puede ver el nombre de fichero)
        this.dom.hide_element_form('nuevo_site_west_photo');
        this.dom.assign_property_value('link_site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_ubicacion/' + fila.site_west_photo);

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
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_ADD');

        // poner onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_' + this.nombreentidad + '()');

        // poner action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        // poner no visible el campo site_north_photo (solo se puede subir fichero)
        this.dom.hide_element_form('site_north_photo');
        this.dom.hide_element('link_site_north_photo');
        // poner no visible el campo site_south_photo (solo se puede subir fichero)
        this.dom.hide_element_form('site_south_photo');
        this.dom.hide_element('link_site_south_photo');
        // poner no visible el campo site_east_photo (solo se puede subir fichero)
        this.dom.hide_element_form('site_east_photo');
        this.dom.hide_element('link_site_east_photo');
        // poner no visible el campo site_west_photo (solo se puede subir fichero)
        this.dom.hide_element_form('site_west_photo');
        this.dom.hide_element('link_site_west_photo');

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
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_SEARCH');

        // poner onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_' + this.nombreentidad);

        // poner action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

        // poner no visible el campo site_north_photo (solo se puede subir fichero)
        this.dom.hide_element_form('site_north_photo');
        this.dom.hide_element('link_site_north_photo');
        // poner no visible el campo site_south_photo (solo se puede subir fichero)
        this.dom.hide_element_form('site_south_photo');
        this.dom.hide_element('link_site_south_photo');
        // poner no visible el campo site_east_photo (solo se puede subir fichero)
        this.dom.hide_element_form('site_east_photo');
        this.dom.hide_element('link_site_east_photo');
        // poner no visible el campo site_west_photo (solo se puede subir fichero)
        this.dom.hide_element_form('site_west_photo');
        this.dom.hide_element('link_site_west_photo');

        // reemplazar enumerados por texto
        // titulacionque es un select
        this.dom.replaceSelectXEmptyInput('EstadoA');

        // rellenar valores
        // en SEARCH no hay valores que rellenar

        // poner las validaciones
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');

        // colocar boton de submit
        this.dom.colocarboton('SEARCH');

        setLang();

    }


    mostrarcambioatributo(atributo, valorentrada) {

        switch (atributo) {
            case 'site_north_photo':
                var link = 'error';
                if (valorentrada !== '') {
                    link = valorentrada + `  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_ubicacion/` + valorentrada + `"><img src="./iconos/FILE.png" /></a>`;
                }
                return link;
                break;
            case 'site_south_photo':
                var link = 'error';
                if (valorentrada !== '') {
                    link = valorentrada + `  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_ubicacion/` + valorentrada + `"><img src="./iconos/FILE.png" /></a>`;
                }
                return link;
                break;
            case 'site_east_photo':
                var link = 'error';
                if (valorentrada !== '') {
                    link = valorentrada + `  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_ubicacion/` + valorentrada + `"><img src="./iconos/FILE.png" /></a>`;
                }
                return link;
                break;
            case 'site_west_photo':
                var link = 'error';
                if (valorentrada !== '') {
                    link = valorentrada + `  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_ubicacion/` + valorentrada + `"><img src="./iconos/FILE.png" /></a>`;
                }
                return link;
                break;
            case 'default':
                alert('no existe mostrar especial para ese atributo');
                break;
        }
    }






}
