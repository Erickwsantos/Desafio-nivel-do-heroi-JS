
const readline = require('readline');

// Criando uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perguntando o nome do herói
rl.question('Digite o nome do herói: ', (nome) => {
  // Perguntando a quantidade de XP do herói
  rl.question('Digite a quantidade de XP do herói: ', (xp) => {
    // Convertendo a entrada para um número inteiro
    const xpInt = parseInt(xp);

    // Utilizando a estrutura de decisão para classificar o nível do herói
    let nivel;
    if (xpInt < 1000) {
      nivel = 'Ferro';
    } else if (xpInt <= 2000) {
      nivel = 'Bronze';
    } else if (xpInt <= 5000) {
      nivel = 'Prata';
    } else if (xpInt <= 7000) {
      nivel = 'Ouro';
    } else if (xpInt <= 8000) {
      nivel = 'Platina';
    } else if (xpInt <= 9000) {
      nivel = 'Ascendente';
    } else if (xpInt <= 10000) {
      nivel = 'Imortal';
    } else {
      nivel = 'Radiante';
    }

    // Exibindo a mensagem final
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

    // Fechando a interface de leitura
    rl.close();
  });
});
