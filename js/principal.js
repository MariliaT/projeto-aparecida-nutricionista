var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	//var paciente = document.querySelector("#primeiro-paciente"); //seleciona o primeiro paciente
	var tdPeso = paciente.querySelector(".info-peso"); //com o primeiro paciente selecionado consigo buscar o peso
	//para selecionar o peso do paciente eu preciso de uma variável, no caso tdPeso
	//dentro da variável paciente que ja foi selecionada eu faço a busca do peso
	var peso = tdPeso.textContent;
	//após a seleção eu consigo imprimir o texto com text.Content

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso); //true ou false
	var alturaEhValida = validaAltura(altura);

	//o ponto de exclamação é para negação
	if(!pesoEhValido) {
		console.log("Peso inválido!");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}
	// qnd a altura não for válida ele entra nesse if
	if(!alturaEhValida) {
		console.log("Altura inválida!");
		alturaEhValida = false;
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
	}

	if(alturaEhValida && pesoEhValido) {
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;
	}

}
//console.log(imc);
//console.log(paciente); // tr
//console.log(tdPeso); // td que tem o peso

function validaPeso(peso) {
	if(peso >= 0 && peso < 1000) {
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura) {
	if(altura >=0 && altura <= 3.0) {
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso,altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}