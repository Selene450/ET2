class articulo extends EntidadAbstracta {

    constructor(esTest) {
        super();

        this.columnasamostrar = [ 'CodigoA', 'AutoresA', 'TituloA', 'TituloR', 'ISSN','VolumenR', 'PagIniA', 'PagFinA', 'EstadoA'];

        this.mostrarespecial = ['FechaPublicacionR', 'FicheropdfA'];


        this.attributes = [
            'CodigoA', 
            'AutoresA', 
            'TituloA', 
            'TituloR', 
            'ISSN',
            'VolumenR', 
            'PagIniA', 
            'PagFinA', 
            'FechaPublicacionR', 
            'FicheropdfA', 
            'EstadoA',
        ]
    }

    manual_form_creation() {
        var form_content= `
        <form id="form_iu" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_articulo();" class='formulario'>

			<label id="label_CodigoA">Codigo del arículo</label>
			<input type='text' id='CodigoA' name='codigoA' onblur=" return entidad.ADD_CodigoA_validation();"></input>
			<span id="span_error_CodigoA"><a id="error_CodigoA"></a></span>
			<br>
			
			<label class="label_AutoresA">Autores de artículo</label>
			<input type='text' id='AutoresA' name='AutoresA' onblur=" return entidad.ADD_AutoresA_validation();"></input>
			<span id="span_error_AutoresA" ><a id="error_AutoresA"></a></span>
			<br>
			
			<label class="label_TituloA">Título del artículo</label>
			<input type='text' id='TituloA' name='TituloA'></input>
			<span id="span_error_TituloA" ><a id="error_TituloA"></a></span>
			<br>
			
			<label class="label_TituloR">Título de la revista</label>
			<input type='text' id='TituloR' name='TituloR'></input>
			<span id="span_error_TituloR" ><a id="error_TituloR"></a></span>
			
			<br>

            <label class="label_ISSN">ISSN</label>
			<input type='text' id='ISSN' name='ISSN'></input>
			<span id="span_error_ISSN" ><a id="error_ISSN"></a></span>
            <br>

			<label class="label_VolumenR">Volumen de la revista</label>
			<input type='text' id='VolumenR' name='VolumenR'></input>
			<span id="span_error_VolumenR" ><a id="error_VolumenR"></a></span>
			
			<br>

			<label class="label_PagIniA">Página inicial del artículo</label>
			<input type='text' id='PagIniA' name='PagIniA'></input>
			<span id="span_error_PagIniA" ><a id="error_PagIniA"></a></span>

			<br>

            <label class="label_PagFinA">Página final del artículo</label>
			<input type='text' id='PagFinA' name='PagFinA'></input>
			<span id="span_error_PagFinA" ><a id="error_PagFinA"></a></span>

			<br>

            <label class="label_FechaPublicacionR">Fecha de publicación</label>
			<input type='date' id='FechaPublicacionR' name='FechaPublicacionR'></input>
			<span id="span_error_FechaPublicacionR" ><a id="error_FechaPublicacionR"></a></span>

			<br>

			<label id="label_FicheropdfA" class="label_FicheropdfA">Fichero pdf del artículo</label>
			<input type='text' id='FicheropdfA' name='FicheropdfA'></input>
			<span id="span_error_FicheropdfA"><a id="error_FicheropdfA"></a></span>
			<a id="link_FicheropdfA" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_FicheropdfA" class="label_nuevo_FicheropdfA">Nuevo articulo</label>
			<input type='file' id='nuevo_FicheropdfA' name='nuevo_FicheropdfA'></input>
			<span id="span_error_nuevo_FicheropdfA"><a id="error_nuevo_FicheropdfA"></a></span>
			<br>

            <label class="label_EstadoA">Estado del artículo</label>
            <select id="EstadoA" name="EstadoA">
                <option class="opcion_enviado" value="Enviado">Enviado</option>
                <option class="opcion_revision" value="Revision">Revisión</option>
                <option class="opcion_publicado" value="Publicado">Publicado</option>
            </select>
            <span id="span_error_EstadoA" ><a id="error_EstadoA"></a></span>
            <br>

			<input id="submit_button" type="submit" value="Submit">

		</form>'
		`
		return form_content;
    }

    ADD_CodigoA_validation() {
        if(!(this.validations.min_size('CodigoA', 11))) {
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_min_size_KO');
            return "CodigoA_min_size_KO";
        }
        if(!(this.validations.max_size('CodigoA', 11))) {
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_max_size_KO');
            return "CodigoA_max_size_KO";
        }
        if(!this.validations.format('CodigoA', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_format_KO');
            return "CodigoA_format_KO";
        }
        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }

    ADD_AutoresA_validation() {
        if(!(this.validations.min_size('AutoresA', 3))) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_min_size_KO');
            return "AutoresA_min_size_KO";
        }
        if(!(this.validations.max_size('AutoresA', 100))) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO');
            return "AutoresA_max_size_KO";
        }
        if(!this.validations.format('AutoresA', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$')) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO');
            return "AutoresA_format_KO";
        }
        this.dom.mostrar_exito_campo('AutoresA');
        return true;
    }

    ADD_TituloA_validation() {
        if(!(this.validations.min_size('TituloA', 3))) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_min_size_KO');
            return "TituloA_min_size_KO";
        }
        if(!(this.validations.max_size('TituloA', 100))) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO');
            return "TituloA_max_size_KO";
        }
        if(!this.validations.format('TituloA', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9 ]+$')) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO');
            return "TituloA_format_KO";
        }
        this.dom.mostrar_exito_campo('TituloA');
        return true;
    }

    ADD_TituloR_validation() {
        if(!(this.validations.min_size('TituloR', 3))) {
            this.dom.mostrar_error_campo('TituloR', 'TituloR_min_size_KO');
            return "TituloR_min_size_KO";
        }
        if(!(this.validations.max_size('TituloR', 100))) {
            this.dom.mostrar_error_campo('TituloR', 'TituloR_max_size_KO');
            return "TituloR_max_size_KO";
        }
        if(!this.validations.format('TituloR', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$')) {
            this.dom.mostrar_error_campo('TituloR', 'TituloR_format_KO');
            return "TituloR_format_KO";
        }
        this.dom.mostrar_exito_campo('TituloR');
        return true;
    }

    ADD_ISSN_validation() {
        if(!this.validations.format('ISSN', '^\\d{4}-\\d{3}[\\dX]$')) {
            this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO');
            return "ISSN_format_KO";
        }
        this.dom.mostrar_exito_campo('ISSN');
        return true;
    }

    ADD_VolumenR_validation() {
        if(!(this.validations.min_size('VolumenR', 1))) {
            this.dom.mostrar_error_campo('VolumenR', 'VolumenR_min_size_KO');
            return "VolumenR_min_size_KO";
        }
        if(!(this.validations.max_size('VolumenR', 4))) {
            this.dom.mostrar_error_campo('VolumenR', 'VolumenR_max_size_KO');
            return "VolumenR_max_size_KO";
        }
        if(!this.validations.format('VolumenR', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('VolumenR', 'VolumenR_format_KO');
            return "VolumenR_format_KO";
        }
        this.dom.mostrar_exito_campo('VolumenR');
        return true;
    }

    ADD_PagIniA_validation() {
        if(!(this.validations.min_size('PagIniA', 1))) {
            this.dom.mostrar_error_campo('PagIniA', 'PagIniA_min_size_KO');
            return "PagIniA_min_size_KO";
        }
        if(!(this.validations.max_size('PagIniA', 4))) {
            this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO');
            return "PagIniA_max_size_KO";
        }
        if(!this.validations.format('PagIniA', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('PagIniA', 'PagIniA_format_KO');
            return "PagIniA_format_KO";
        }
        this.dom.mostrar_exito_campo('PagIniA');
        return true;
    }

    ADD_PagFinA_validation() {
        if(!(this.validations.min_size('PagFinA', 1))) {
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_min_size_KO');
            return "PagFinA_min_size_KO";
        }
        if(!(this.validations.max_size('PagFinA', 4))) {
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_max_size_KO');
            return "PagFinA_max_size_KO";
        }
        if(!this.validations.format('PagFinA', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_format_KO');
            return "PagFinA_format_KO";
        }
        this.dom.mostrar_exito_campo('PagFinA');
        return true;
    }

    ADD_FechaPublicacionR_validation() {
        if(!(this.validations.format('FechaPublicacionR', '^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$'))) {
            this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO');
            return "FechaPublicacionR_format_KO";
        }
        //Validar fecha si es necesario
        this.dom.mostrar_exito_campo('FechaPublicacionR');
        return true;
    }

    ADD_nuevo_FicheropdfA_validation() {
        if(!(this.validations.not_exist_file('nuevo_FicheropdfA'))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_not_exists_file_KO');
            return "nuevo_FicheropdfA_not_exists_file_KO";
        }
        if(!(this.validations.max_size_file('nuevo_FicheropdfA', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_size_file_KO');
            return "nuevo_FicheropdfA_max_size_file_KO";
        }
        if(!this.validations.type_file('nuevo_FicheropdfA', ['application/pdf'])) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_type_file_KO');
            return "nuevo_FicheropdfA_type_file_KO";
        }
        if(!(this.personalized_nuevo_FicheropdfA_name_min_size_validation('nuevo_FicheropdfA'))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_min_size_KO');
            return "nuevo_FicheropdfA_name_min_size_KO";
        }
        if(!(this.personalized_nuevo_FicheropdfA_name_max_size_validation('nuevo_FicheropdfA'))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_max_size_KO');
            return "nuevo_FicheropdfA_name_max_size_KO";
        }
        if(!(this.validations.format_name_file('nuevo_FicheropdfA', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_KO');
            return "nuevo_FicheropdfA_name_format_KO";
        }
        
        this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
        return true;
        
    }

    personalized_nuevo_FicheropdfA_name_min_size_validation(id) {
        const input = document.getElementById(id);
		const filename = input.files[0].name;
		if (filename.length < 3) { // Mínimo 3 caracteres
			return false;
		}
		return true;
    }

    personalized_nuevo_FicheropdfA_name_max_size_validation(id) {
        const input = document.getElementById(id);

		const filename = input.files[0].name;
		if (filename.length > 20) { // Máximo 20 caracteres
			return false;
		}
		return true;
    }

    ADD_EstadoA_validation() {
        const estados_validos = ['Enviado', 'Revision', 'Publicado'];
        if(!(estados_validos.includes(document.getElementById('EstadoA').value))) {
            this.dom.mostrar_error_campo('EstadoA', 'EstadoA_format_KO');
            return "EstadoA_format_KO";
        }
        this.dom.mostrar_exito_campo('EstadoA');
        return true;
    }


    ADD_submit_articulo() {
        let result = [
        (this.ADD_CodigoA_validation) &
        (this.ADD_AutoresA_validation) &
        (this.ADD_TituloA_validation) &
        (this.ADD_TituloR_validation) &
        (this.ADD_ISSN_validation) &
        (this.ADD_VolumenR_validation) &
        (this.ADD_PagIniA_validation) &
        (this.ADD_PagFinA_validation) &
        (this.ADD_FechaPublicacionR_validation) &
        (this.ADD_nuevo_FicheropdfA_validation) &
        (this.ADD_EstadoA_validation)

        ];
        result = Boolean(result)

        return result;
    }

    EDIT_CodigoA_validation() {
        return this.ADD_CodigoA_validation();
    }

    EDIT_AutoresA_validation() {
        return this.ADD_AutoresA_validation();
    }

    EDIT_TituloA_validation() {
        return this.ADD_TituloA_validation();
    }

    EDIT_TituloR_validation() {
        return this.ADD_TituloR_validation();
    }

    EDIT_ISSN_validation() {
        return this.ADD_ISSN_validation();
    }

    EDIT_VolumenR_validation() {
        return this.ADD_VolumenR_validation();
    }

    EDIT_PagIniA_validation() {
        return this.ADD_PagIniA_validation();
    }

    EDIT_PagFinA_validation() {
        return this.ADD_PagFinA_validation();
    }

    EDIT_FechaPublicacionR_validation() {
        return this.ADD_FechaPublicacionR_validation();
    }

    EDIT_EstadoA_validation() {
        return this.ADD_EstadoA_validation();
    }

    EDIT_nuevo_FicheropdfA_validation() {
        if(!(this.validations.not_exist_file('nuevo_FicheropdfA'))) {
            return true;
        }
        if(!(this.validations.max_size_file('nuevo_FicheropdfA', 2000000))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_size_file_KO');
            return "nuevo_FicheropdfA_max_size_file_KO";
        }
        if(!this.validations.type_file('nuevo_FicheropdfA', ['application/pdf'])) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_type_file_KO');
            return "nuevo_FicheropdfA_type_file_KO";
        }
        if(!(this.personalized_nuevo_FicheropdfA_name_min_size_validation('nuevo_FicheropdfA'))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_min_size_KO');
            return "nuevo_FicheropdfA_name_min_size_KO";
        }
        if(!(this.personalized_nuevo_FicheropdfA_name_max_size_validation('nuevo_FicheropdfA'))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_max_size_KO');
            return "nuevo_FicheropdfA_name_max_size_KO";
        }
        if(!(this.validations.format_name_file('nuevo_FicheropdfA', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$'))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_KO');
            return "nuevo_FicheropdfA_name_format_KO";
        }
        
        this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
        return true;
    }

    EDIT_submit_articulo() {
        let result = [
        (this.EDIT_CodigoA_validation) &
        (this.EDIT_AutoresA_validation) &
        (this.EDIT_TituloA_validation) &
        (this.EDIT_TituloR_validation) &
        (this.EDIT_ISSN_validation) &
        (this.EDIT_VolumenR_validation) &
        (this.EDIT_PagIniA_validation) &
        (this.EDIT_PagFinA_validation) &
        (this.EDIT_FechaPublicacionR_validation) &
        (this.EDIT_nuevo_FicheropdfA_validation) &
        (this.EDIT_EstadoA_validation)

        ];
        result = Boolean(result)

        return result;
    }

    SEARCH_CodigoA_validation() {
        if(!(this.validations.max_size('CodigoA', 11))) {
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_max_size_KO');
            return "CodigoA_max_size_KO";
        }
        if(!this.validations.format('CodigoA', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_format_KO');
            return "CodigoA_format_KO";
        }
        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }

    SEARCH_AutoresA_validation() {
        if(!(this.validations.max_size('AutoresA', 100))) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO');
            return "AutoresA_max_size_KO";
        }
        if(!this.validations.format('AutoresA', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$')) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO');
            return "AutoresA_format_KO";
        }
        this.dom.mostrar_exito_campo('AutoresA');
        return true;
    }

    SEARCH_TituloA_validation() {
        if(!(this.validations.max_size('TituloA', 100))) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO');
            return "TituloA_max_size_KO";
        }
        if(!this.validations.format('TituloA', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9 ]+$')) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO');
            return "TituloA_format_KO";
        }
        this.dom.mostrar_exito_campo('TituloA');
        return true;
    }

    SEARCH_TituloR_validation() {
        if(!(this.validations.max_size('TituloR', 100))) {
            this.dom.mostrar_error_campo('TituloR', 'TituloR_max_size_KO');
            return "TituloR_max_size_KO";
        }
        if(!this.validations.format('TituloR', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$')) {
            this.dom.mostrar_error_campo('TituloR', 'TituloR_format_KO');
            return "TituloR_format_KO";
        }
        this.dom.mostrar_exito_campo('TituloR');
        return true;
    }

    SEARCH_ISSN_validation() {
        if(!this.validations.format('ISSN', '^\\d{4}-\\d{3}[\\dX]$')) {
            this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO');
            return "ISSN_format_KO";
        }
        this.dom.mostrar_exito_campo('ISSN');
        return true;
    }

    SEARCH_VolumenR_validation() {
        if(!(this.validations.max_size('VolumenR', 4))) {
            this.dom.mostrar_error_campo('VolumenR', 'VolumenR_max_size_KO');
            return "VolumenR_max_size_KO";
        }
        if(!this.validations.format('VolumenR', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('VolumenR', 'VolumenR_format_KO');
            return "VolumenR_format_KO";
        }
        this.dom.mostrar_exito_campo('VolumenR');
        return true;
    }

    SEARCH_PagIniA_validation() {
        if(!(this.validations.max_size('PagIniA', 4))) {
            this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO');
            return "PagIniA_max_size_KO";
        }
        if(!this.validations.format('PagIniA', '^[0-9-]+$')) {
            this.dom.mostrar_error_campo('PagIniA', 'PagIniA_format_KO');
            return "PagIniA_format_KO";
        }
        this.dom.mostrar_exito_campo('PagIniA');
        return true;
    }

    SEARCH_PagFinA_validation() {
        if(!(this.validations.max_size('PagFinA', 4))) {
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_max_size_KO');
            return "PagFinA_max_size_KO";
        }
        if(!this.validations.format('PagFinA', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_format_KO');
            return "PagFinA_format_KO";
        }
        this.dom.mostrar_exito_campo('PagFinA');
        return true;
    }

    SEARCH_FechaPublicacionR_validation() {
        if(!this.validations.format('FechaPublicacionR', '^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$')) {
            this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO');
            return "FechaPublicacionR_format_KO";
        }
        //Validar fecha si es necesario
        this.dom.mostrar_exito_campo('FechaPublicacionR');
        return true;
    }

    SEARCH_FicheropdfA_validation() {
        if(!this.validations.max_size('FicheropdfA', 20)) {
            this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_max_size_KO');
            return "FicheropdfA_max_size_KO";
        }
        if(!this.validations.format('FicheropdfA', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$')) {
            this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_format_KO');
            return "FicheropdfA_format_KO";
        }
        this.dom.mostrar_exito_campo('FicheropdfA');
        return true;
    }


    SEARCH_EstadoA_validation() {
        const estados_validos = ['Enviado', 'Revision', 'Publicado'];
        if(!(estados_validos.includes(document.getElementById('EstadoA').value))) {
            this.dom.mostrar_error_campo('EstadoA', 'EstadoA_format_KO');
            return "EstadoA_format_KO";
        }
        this.dom.mostrar_exito_campo('EstadoA');
        return true;
    }

    SEARCH_submit_articulo() {
        let result = [
        (this.SEARCH_CodigoA_validation) &
        (this.SEARCH_AutoresA_validation) &
        (this.SEARCH_TituloA_validation) &
        (this.SEARCH_TituloR_validation) &
        (this.SEARCH_ISSN_validation) &
        (this.SEARCH_VolumenR_validation) &
        (this.SEARCH_PagIniA_validation) &
        (this.SEARCH_PagFinA_validation) &
        (this.SEARCH_FechaPublicacionR_validation) &
        (this.SEARCH_FicheropdfA_validation) &
        (this.SEARCH_EstadoA_validation)

        ];
        result = Boolean(result)

        return result;
    }

    createForm_EDIT(fila) {

		// limpiar poner titulo y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');

		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_EDIT');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_' + this.nombreentidad + '()');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_articulo/' + fila.FicheropdfA);



		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu', 'EDIT');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('CodigoA', 'readonly', 'true');
		this.dom.assign_property_value('FicheropdfA', 'readonly', 'true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();

	}

	createForm_DELETE(fila) {

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

		this.dom.show_element('Div_IU_form', 'block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_DELETE');

		// rellenar y action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_FicheropdfA (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_FicheropdfA');
		this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/' + fila.FicheropdfA);

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_SHOWCURRENT');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_FicheropdfA (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_FicheropdfA');
		this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/' + fila.FicheropdfA);
        this.dom.asign_property_value('CodigoA', 'readonly', true)

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_ADD');

		// poner onsubmit
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_' + this.nombreentidad + '()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// poner no visible el campo FicheropdfA (solo se puede subir fichero)

        this.dom.hide_element_form('CodigoA');
		this.dom.hide_element_form('FicheropdfA');
		this.dom.hide_element('link_FicheropdfA');

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_SEARCH');

		// poner onsubmit
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_' + this.nombreentidad + '()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// poner no visible el campo FicheropdfA (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_FicheropdfA');
		this.dom.hide_element('link_FicheropdfA');

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
			case 'FicheropdfA':
				var link = 'error';
				if (valorentrada !== '') {
					link = valorentrada + `  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/` + valorentrada + `"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
			case 'FechaPublicacionR':
				var elementos = valorentrada.split('-');

				var day = elementos[2];
				var month = elementos[1];
				var year = elementos[0];
				
				return day+'/'+month+'/'+year;
				break;
			case 'default':
				alert('no existe mostrar especial para ese atributo');
				break;
		}
	}





}