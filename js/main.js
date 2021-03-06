let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {

    //function cacularImc(paciente){

    /* [Código Legado] - usado antes de criar a função criar calcularImc após a extinta função anonima
        for (var i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i]*/

    //pegar peso 
    let peso = paciente.querySelector(".info-peso").textContent;
    //pegar a altura
    let altura = paciente.querySelector(".info-altura").textContent;

    let pesoValido = true;
    let alturaValida = true;

    let tdIMC = paciente.querySelector(".info-imc");
    //validar dados
    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0) {
        alturaValida = false;
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        //calcular o IMC
        let imc = peso / altura ** 2;
        //escrever o IMC na Tabela
        tdIMC.textContent = imc.toFixed(2);
    }
});

let botao = document.querySelector("#botao-cadastrar");

botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    let formulario = document.querySelector("#form-paciente");
    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura = formulario.altura.value;
    let gordura = formulario.gordura.value;

    //criar linha
    let table = document.querySelector("#tabela-pacientes")
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    //criar td
    let tdNome = document.createElement("td");
    tdNome.textContent = nome;

    let tdPeso = document.createElement("td");
    tdPeso.textContent = peso;

    let tdAltura = document.createElement("td");
    tdAltura.textContent = altura;

    let tdGordura = document.createElement("td");
    tdGordura.textContent = gordura;






    tr.appendChild(tdNome);
    tr.appendChild(tdPeso);
    tr.appendChild(tdAltura);
    tr.appendChild(tdGordura);
    table.appendChild(tr);


    //console.log(tr);
});






/*let titulo = document.querySelector("#titulo");
titulo.addEventListener("click", mostrarMensagem);
titulo.addEventListener("click", trocarCor);

function mostrarMensagem(){
    console.log("evento aconteceu");
}

function trocarCor(){
    let cor = parseInt(Math.random()*255);
    //titulo.style.color = "rgb(" +cor+ "," +cor+ "," +cor+ ")";
    titulo.style.color = `rgb(${cor}, ${cor}, ${cor})`
}
*/

