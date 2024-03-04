const form = document.getElementById("form-atividade");
const imgAprovado = "<img src='/images/aprovado.png' alt='Emoji celebrando' />";
const imgReprovado = "<img src='/images/reprovado.png' alt='Emoji desapontado' />";
const tbody = document.querySelector("tbody");
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

form.addEventListener("submit", (e) => {
e.preventDefault();

    adicionaLinha();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if(atividades.includes(inputNomeAtividade.value)) {
        alert("Já existe uma atividade com este nome!");
        return;
    } 
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
    if (inputNomeAtividade.value && inputNotaAtividade.value) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${inputNomeAtividade.value}</td>
        <td>${inputNotaAtividade.value}</td>
        <td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        tbody.appendChild(newRow);
        }
    }

    tbody.appendChild(newRow);
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado  : spanReprovado;

}

function calculaMediaFinal() {
    let  somatorioNotas = 0;

    for (let i=0; i<notas.length; i++) {
        somatorioNotas +=  notas[i];
    }
    
    return somatorioNotas / notas.length;
}