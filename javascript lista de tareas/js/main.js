
(function(){  /* FUNCION AUTO INVOCADA*/
	// Variables
	var lista = document.getElementById("lista"),//ENTRA LA LISTA EN UNA VARIABLE
		tareaInput = document.getElementById("tareaInput"),//ALMACENA LA ENTRADA DE TEXTO EN UNA VARIABLE
		btnNuevaTarea = document.getElementById("btn-agregar");//ALMACENA LA ACCION A EJECUTAR

	// Funciones
	//ESTA FUNCION CREA UNA NUEVA TAREA
	var agregarTarea = function(){
		
			elemnto_li = document.createElement("li"),//CREA Y ALMACENA UN ELEMNTO LI EN nuevaTarea
			enlace = document.createElement("a"),//CREA UN ENLACE (a) Y LO ALMACENA EN enlace
			contenido = document.createTextNode(tareaInput.value);//ALMACENA LA ENTRADA DE LA TAREA EN LA VARIABLE CONTENIDO
			
		//SE EJECUTA SI NO HAY NINGUNA ENTRADA
		if (tareaInput.value === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido); //EL CONTENIDO YA CON EL NODO SE AGREGA AL ENLACE O ELEMTO a
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");//SE LE ASIGNA AL ENLACE UN href y un #
		// Agrergamos el enlace (a) a la nueva tarea (li)
		elemnto_li.appendChild(enlace); // nuevaTarea ES UN ELEMENTO li AL CUAL SE LE AGREGA UN ELEMENTO A
		// Agregamos la nueva tarea a la lista
		lista.appendChild(elemnto_li); // EL ELEMENTO li O nuevaTarea SE ENLAZA CON LA LISTA

		tareaInput.value = ""; //EL INPUT SE QUEDA EN BLANCO

		//SE HACE UN RECORRIDO A LOS ELEMENTOS  EXISTENTES
		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){//SE RECORREN TODOS LOS li Y SE LE APLICA UNA FUNCION
				this.parentNode.removeChild(this);//CADA VEZ QUE DETECTA UN ELEMENTO LO ELIMINA
			});
		}

	};
	
	//ESTE CODIGO NUNCA SE EJECUTA
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	//ESTA FUNCION ELIMINA TAREAS CREADAS
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	//CUANDO PRECIONAMOS EL btnNuevaTarea EL CUAL CONTIENE EL id(btn-agregar)
	//SE EJECUTA UN EVENTO (agregarTarea)
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	//ESTE CODIGO NUNCA SE EJECUTA
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	//HACEMOS UN RECORRIDO DE LOS NUEVOS ELEMNTOS Y EJECUTAMOS EL EVENTO ELIMINAR TAREA
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());