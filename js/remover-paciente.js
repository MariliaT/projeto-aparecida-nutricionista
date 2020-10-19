//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
	//var alvoEvento = event.target;
	//var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
	//paiDoAlvo.remove();
//});
	
//as linhas 7 e 8 podem ser substituidas por uma unica linha
//event.target.parentNode.remove();


		//event.target.parentNode
		//console.log(event.target);
		//console.log(this);
	//});
//pacientes.forEach(function(paciente){
//	paciente.addEventListener("dblclick", function(){
//		console.log("Fui clicado com um duplo clique");
//		this.remove();
//	});
//});

	event.target.parentNode.classList.add("fadeOut");
	
	setTimeout(function(){
		event.target.parentNode.remove();
	},500);
});