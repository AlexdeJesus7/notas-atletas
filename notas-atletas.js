let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// Função para calcular a média das notas, excluindo a maior e menor
function calcularMedia(notas) {
  // Ordena as notas em ordem crescente
  let notasOrdenadas = notas.sort((a, b) => a - b);
  // Remove a menor e a maior nota
  let notasValidas = notasOrdenadas.slice(1, 4);
  // Calcula a média
  let soma = notasValidas.reduce((total, nota) => total + nota, 0);
  return soma / notasValidas.length;
}

// Função para exibir os resultados
function exibirResultados(atletas) {
  atletas.forEach(atleta => {
    let media = calcularMedia(atleta.notas);
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
    console.log(`Média Válida: ${media.toFixed(6)}`);
    console.log('-----------------------------');
  });
}

exibirResultados(atletas);
