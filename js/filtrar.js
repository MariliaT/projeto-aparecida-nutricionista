var campoFiltro = document.querySelector("#filtrar-tabela");

//console.log(campoFiltro);
campoFiltro.addEventListener("input", function(){
	//console.log("Digitaram do campo");
	//console.log(campoFiltro.value);
	console.log(this.value);
	var pacientes = document.querySelectorAll(".paciente");
	
	if( this.value.length > 0){
		for (var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;
			var expressao = new RegExp(this.value,"i"); // o que vc quer que ela busque(texto), e como (flags)
			// o "i" é de contentInsert
			if( !expressao.test(nome)) {
				paciente.classList.add("invisivel");
			}else{
				paciente.classList.remove("invisivel");
			}
		}
	}else{
		for (var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			paciente.classList.remove("invisivel");
		}
	}
});

//A função addEventListener() recebe dois parâmetros, o nome do 
//evento a ser escutado e uma função com a ação que deve executar. 