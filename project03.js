console.clear();
console.log();
const prompt = require("prompt-sync")();

// Variáveis

var personagem = {};
var escolhaEM;
var escolhaFac;
var escolhaJob0;
var escTrab;
var profDias = 1;
var engDias = 1;
var comDias = 1;
var escolhaOpc;
var escLoja;

// Criação de Personagem

function criarPersonagem(a) {
  personagem = {
    nome: a,
    dinheiro: 1000,
    inteligencia: 0,
    emprego: 0,
    profissao: "Desempregado",
    bens: [],
  };
}

// Escolhas durante a escola

function escola() {
  console.log(
    `Olá ${personagem.nome}! Você acaba de entrar no ensino médio, o que você pretende fazer?`
  );
  console.log();
  console.log(`
    1- Estudar bastante
    2- Fazer o mínimo
    3- Largar a escola
    `);
  console.log();

  do {
    escolhaEM = +prompt();

    if (escolhaEM == 1) {
      personagem.inteligencia = 10;
      console.clear();
      return faculdade1();
    } else if (escolhaEM == 2) {
      personagem.inteligencia = 5;
      console.clear();
      return faculdade2();
    } else if (escolhaEM == 3) {
      personagem.inteligencia = 0;
      console.clear();
      console.log("Você largou a escola!");
      return opcoes();
    } else {
      console.clear();
      console.log("Opção não reconhecida, tente novamente!");
      console.log();
      console.log(`
    1- Estudar bastante
    2- Fazer o mínimo
    3- Largar a escola
    `);
    }
  } while (escolhaEM > 3 || escolhaEM == 0);
}

// Caso escolha "Estudar bastante"

function faculdade1() {
  console.log(
    `Depois de muita dedicação e esforço, você foi aprovado para uma bolsa em Harvard! Parabéns ${personagem.nome}!`
  );
  console.log();
  personagem.inteligencia = personagem.inteligencia + 50;
  console.log("Depois de 4 longos anos, você se formou!");

  return opcoes();
}

// Caso escolha "Fazer o mínimo"

function faculdade2() {
  console.log(
    `Você fez o mínimo na escola e deve pagar uma faculdade particular, qual delas você deseja ir ${personagem.nome}?`
  );
  console.log(`Lembre-se você tem $${personagem.dinheiro}`);
  console.log();
  console.log(`
    1- Santa Úrsula ($100)
    2- UnigranRio($200)
    3- PUC-RJ($500)
    `);
  console.log();
  do {
    escolhaFac = +prompt();

    if (escolhaFac == 1) {
      personagem.dinheiro = personagem.dinheiro - 100;
      personagem.inteligencia = personagem.inteligencia + 10;
      console.clear();
      console.log("Depois de 4 longos anos, você se formou!");
    } else if (escolhaFac == 2) {
      personagem.dinheiro = personagem.dinheiro - 200;
      personagem.inteligencia = personagem.inteligencia + 20;
      console.clear();
      console.log("Depois de 4 longos anos, você se formou!");
    } else if (escolhaFac == 3) {
      personagem.dinheiro = personagem.dinheiro - 500;
      personagem.inteligencia = personagem.inteligencia + 30;
      console.clear();
      console.log("Depois de 4 longos anos, você se formou!");
    } else {
      console.clear();
      console.log("Opção não reconhecida, tente novamente!");
      console.log(`
      1- Santa Úrsula ($100)
      2- UnigranRio($200)
      3- PUC-RJ($500)
      `);
    }
  } while (escolhaFac > 3 || escolhaFac == 0);

  return opcoes();
}

// Menu de opções

function opcoes() {
  console.log(`
    --------------------------
    Status do seu personagem:

    Inteligência: ${personagem.inteligencia}
    Dinheiro: $${personagem.dinheiro}
    Emprego: ${personagem.profissao}
    Saúde do emprego: ${personagem.emprego}/5
    Bens: ${personagem.bens}
    --------------------------
    `);
  console.log();
  console.log(`O que você quer fazer agora?

    1- Estudar
    2- Roubar
    3- Procurar emprego
    4- Ir as compras
    9- Sair do jogo
    `);
  escolhaOpc = +prompt();
  if (escolhaOpc == 1) {
    return estudar();
  } else if (escolhaOpc == 2) {
    return roubar();
  } else if (escolhaOpc == 3) {
    console.clear();
    return escolhaJob();
  } else if (escolhaOpc == 4) {
    console.clear();
    return lojas();
  } else if (escolhaOpc == 9) {
    console.clear();
    return fimDeJogo;
  } else {
    console.clear();
    console.log("Comando não existe. Escolha outro!");
    return opcoes();
  }
}

// Opção: Procurar emprego

function escolhaJob() {
  console.log(`
    --------------------------
    Status do seu personagem:

    Inteligência: ${personagem.inteligencia}
    Dinheiro: $${personagem.dinheiro}
    Emprego: ${personagem.profissao}
    Saúde do emprego: ${personagem.emprego}/5
    Bens: ${personagem.bens}
    --------------------------
    `);
  console.log();
  console.log(`
    1- Engenheiro da Apple (Salário: $1000)
    2- Professor (Salário: $500)
    3- Comerciante (Salário: $100)
    4- Voltar ao início
    `);
  escolhaJob0 = +prompt("");

  if (escolhaJob0 == 1) {
    if (personagem.inteligencia < 50) {
      console.clear();
      console.log(
        "Você não tem inteligencia o suficiente para este emprego! Escolha outro:"
      );
      return escolhaJob();
    } else {
      console.clear();
      console.log("Você foi contratado para vaga de 'Engenheiro da Apple'!");
      personagem.emprego = 5;
      personagem.profissao = "Eng. da Apple";
      return engenheiroApple();
    }
  } else if (escolhaJob0 == 2) {
    if (personagem.inteligencia < 20) {
      console.clear();
      console.log(
        "Você não tem inteligencia o suficiente para este emprego! Escolha outro:"
      );
      return escolhaJob();
    } else {
      console.clear();
      console.log("Você foi contratado para vaga de 'Professor'!");
      personagem.emprego = 5;
      personagem.profissao = "Professor";
      return professor();
    }
  } else if (escolhaJob0 == 3) {
    if (personagem.inteligencia < 10) {
      console.clear();
      console.log(
        "Você não tem inteligencia o suficiente para este emprego! Escolha outro:"
      );
      return escolhaJob();
    } else {
      console.clear();
      console.log("Você foi contratado para vaga de 'Comerciante'!");
      personagem.emprego = 5;
      personagem.profissao = "Comerciante";
      return comerciante();
    }
  } else if (escolhaJob0 == 4) {
    console.clear();
    return opcoes();
  } else {
    console.clear();
    console.log("Essa profissão não existe. Tente novamente!");
    return escolhaJob();
  }
}

// Profissão

function engenheiroApple() {
  do {
    console.log();
    console.log(`Bom dia, é seu ${engDias}º dia como Engenheiro da Apple!`);
    console.log();
    console.log(`Você vai trabalhar?`);
    console.log(`
        1- Sim
        2- Não
        3- Ir as compras
        `);
    escTrab = +prompt("");

    if (escTrab == 1) {
      return profEng();
    } else if (escTrab == 2) {
      console.clear();
      console.log("Você não foi trabalhar e não recebeu seu salário!");
      personagem.emprego = personagem.emprego - 1;
      engDias++;
      console.log(`
      --------------------------
      Status do seu personagem:
  
      Inteligência: ${personagem.inteligencia}
      Dinheiro: $${personagem.dinheiro}
      Emprego: ${personagem.profissao}
      Saúde do emprego: ${personagem.emprego}/5
      Bens: ${personagem.bens}
      --------------------------
      `);
    } else if (escTrab == 3) {
      console.clear();
      return lojas();
    } else {
      return engenheiroApple();
    }
  } while (personagem.emprego > 0);
  console.log();
  console.log("Você foi demitido!");
  personagem.profissao = "Desempregado";
  console.log("Quer procurar outro emprego?");
  console.log(`
      1- Sim
      2- Não
      `);
  let procEmp;
  do {
    procEmp = +prompt("");
    if (procEmp == 1) {
      console.clear();
      return escolhaJob();
    } else {
      console.clear();
      return opcoes();
    }
  } while (procEmp < 0 && procEmp > 2);
}

// Profissão

function professor() {
  do {
    console.log();
    console.log(`Bom dia, é seu ${profDias}º dia como professor!`);
    console.log();
    console.log(`Você vai dar aula?`);
    console.log(`
    1- Sim
    2- Não
    3- Ir as compras
    `);
    escTrab = +prompt("");

    if (escTrab == 1) {
      return profEng();
    } else if (escTrab == 2) {
      console.clear();
      console.log("Você não foi trabalhar e não recebeu seu salário!");
      personagem.emprego = personagem.emprego - 1;
      profDias++;
      console.log(`
    --------------------------
    Status do seu personagem:

    Inteligência: ${personagem.inteligencia}
    Dinheiro: $${personagem.dinheiro}
    Emprego: ${personagem.profissao}
    Saúde do emprego: ${personagem.emprego}/5
    Bens: ${personagem.bens}
    --------------------------
    `);
    } else if (escTrab == 3) {
      console.clear();
      return lojas();
    } else {
      return professor();
    }
  } while (personagem.emprego > 0);
  console.log();
  console.log("Você foi demitido!");
  personagem.profissao = "Desempregado";
  console.log("Quer procurar outro emprego?");
  console.log(`
  1- Sim
  2- Não
  `);
  let procEmp;
  do {
    procEmp = +prompt("");
    if (procEmp == 1) {
      console.clear();
      return escolhaJob();
    } else {
      console.clear();
      return opcoes();
    }
  } while (procEmp < 0 && procEmp > 2);
}

// Profissão

function comerciante() {
  do {
    console.log();
    console.log(`Bom dia, é seu ${comDias}º dia como comerciante!`);
    console.log();
    console.log(`Você vai trabalhar?`);
    console.log(`
        1- Sim
        2- Não
        3- Ir as compras
        `);
    escTrab = +prompt("");

    if (escTrab == 1) {
      return estudar();
    } else if (escTrab == 2) {
      console.clear();
      console.log("Você não foi trabalhar e não recebeu seu salário!");
      personagem.emprego = personagem.emprego - 1;
      comDias++;
      console.log(`
    --------------------------
    Status do seu personagem:

    Inteligência: ${personagem.inteligencia}
    Dinheiro: $${personagem.dinheiro}
    Emprego: ${personagem.profissao}
    Saúde do emprego: ${personagem.emprego}/5
    Bens: ${personagem.bens}
    --------------------------
    `);
    } else if (escTrab == 3) {
      console.clear();
      return lojas();
    } else {
      return comerciante();
    }
  } while (personagem.emprego > 0);
  console.log();
  console.log("Você foi demitido!");
  personagem.profissao = "Desempregado";
  console.log("Quer procurar outro emprego?");
  console.log(`
      1- Sim
      2- Não
      `);
  let procEmp;
  do {
    procEmp = +prompt("");
    if (procEmp == 1) {
      console.clear();
      return escolhaJob();
    } else {
      console.clear();
      return opcoes();
    }
  } while (procEmp < 0 && procEmp > 2);
}

// Opção loja

function lojas() {
  console.log(`
    --------------------------
    Status do seu personagem:

    Inteligência: ${personagem.inteligencia}
    Dinheiro: $${personagem.dinheiro}
    Emprego: ${personagem.profissao}
    Saúde do emprego: ${personagem.emprego}/5
    Bens: ${personagem.bens}
    --------------------------
    `);
  console.log();
  console.log(`O que você quer comprar?

    1- Casa ($500.000)
    2- Carro ($100.000)
    3- Lancha ($65.000)
    4- PS5 ($5.000)
    5- Voltar
    `);
  console.log();
  escLoja = +prompt("");

  if (escLoja == 1) {
    if (personagem.dinheiro < 500000) {
      console.clear();
      console.log("Você não tem dinheiro para isso!");
      return lojas();
    } else {
      escLoja = " Casa";
      personagem.bens.push(escLoja);
      console.clear();
      console.log("Você comprou uma casa!");
      personagem.dinheiro = personagem.dinheiro - 500000;
      return lojas();
    }
  } else if (escLoja == 2) {
    if (personagem.dinheiro < 100000) {
      console.clear();
      console.log("Você não tem dinheiro para isso!");
      return lojas();
    } else {
      escLoja = " Carro";
      personagem.bens.push(escLoja);
      console.clear();
      console.log("Você comprou o carro!");
      personagem.dinheiro = personagem.dinheiro - 100000;
      return lojas();
    }
  } else if (escLoja == 3) {
    if (personagem.dinheiro < 65000) {
      console.clear();
      console.log("Você não tem dinheiro para isso!");
      return lojas();
    } else {
      escLoja = " Lancha";
      personagem.bens.push(escLoja);
      console.clear();
      console.log("Você comprou a lancha!");
      personagem.dinheiro = personagem.dinheiro - 65000;
      return lojas();
    }
  } else if (escLoja == 4) {
    if (personagem.dinheiro < 5000) {
      console.clear();
      console.log("Você não tem dinheiro para isso!");
      return lojas();
    } else {
      escLoja = " PS5";
      personagem.bens.push(escLoja);
      console.clear();
      console.log("Você comprou o PS5!");
      personagem.dinheiro = personagem.dinheiro - 5000;
      return lojas();
    }
  } else if (escLoja == 5) {
    console.clear();
    if (personagem.profissao == "Eng. da Apple") {
      return engenheiroApple();
    } else if (personagem.profissao == "Professor") {
      console.clear();
      return professor();
    } else if (personagem.profissao == "Comerciante") {
      console.clear();
      return comerciante();
    } else {
      return opcoes();
    }
  } else {
    console.clear();
    console.log("Comando não reconhecido!");
    return lojas();
  }
}

// Minigame opção Estudo e Comerciante

function estudar() {
  console.clear();
  var questao = Math.ceil(Math.random() * 100);
  let num1 = questao;
  questao = Math.ceil(Math.random() * 100);
  let num2 = questao;

  console.log(`Quanto é ${num1} + ${num2}?`);
  console.log();
  let resposta = +prompt("");

  if (resposta == num1 + num2) {
    console.clear();
    personagem.inteligencia = personagem.inteligencia + 1;
    console.log("Parabéns você acertou!");
    if (personagem.profissao == "Comerciante") {
      console.clear();
      console.log("Você foi trabalhar e recebeu seu salário!");
      personagem.dinheiro = personagem.dinheiro + 100;
      personagem.inteligencia = personagem.inteligencia + 0.5;
      console.log(`
    --------------------------
    Status do seu personagem:

    Inteligência: ${personagem.inteligencia}
    Dinheiro: $${personagem.dinheiro}
    Emprego: ${personagem.profissao}
    Saúde do emprego: ${personagem.emprego}/5
    Bens: ${personagem.bens}
    --------------------------
    `);
      comDias++;
      return comerciante();
    } else {
      return opcoes();
    }
  } else {
    if (personagem.profissao == "Comerciante") {
      console.clear();
      console.log("Você foi trabalhar mas parecia estar totalmente perdido...");
      console.log(`
    --------------------------
    Status do seu personagem:

    Inteligência: ${personagem.inteligencia}
    Dinheiro: $${personagem.dinheiro}
    Emprego: ${personagem.profissao}
    Saúde do emprego: ${personagem.emprego}/5
    Bens: ${personagem.bens}
    --------------------------
    `);
      comDias++;
    } else {
      console.clear();
      console.log("Você errou!");
      return opcoes();
    }
  }
}

// Minigame Prof e Engenheiro

function profEng() {
  console.clear();
  var questao = Math.ceil(Math.random() * 10);
  let num1 = questao;
  questao = Math.ceil(Math.random() * 10);
  let num2 = questao;

  console.log(`Quanto é ${num1} x ${num2}?`);
  console.log();
  let resposta = +prompt("");

  if (resposta == num1 * num2) {
    if (personagem.profissao == "Eng. da Apple") {
      console.clear();
      console.log("Você foi trabalhar e recebeu seu salário!");
      personagem.dinheiro = personagem.dinheiro + 1000;
      personagem.inteligencia = personagem.inteligencia + 2;
      console.log(`
      --------------------------
      Status do seu personagem:
  
      Inteligência: ${personagem.inteligencia}
      Dinheiro: $${personagem.dinheiro}
      Emprego: ${personagem.profissao}
      Saúde do emprego: ${personagem.emprego}/5
      Bens: ${personagem.bens}
      --------------------------
      `);
      engDias++;
      return engenheiroApple();
    } else {
      console.clear();
      console.log("Você foi trabalhar e recebeu seu salário!");
      personagem.dinheiro = personagem.dinheiro + 500;
      personagem.inteligencia = personagem.inteligencia + 1;
      console.log(`
    --------------------------
    Status do seu personagem:

    Inteligência: ${personagem.inteligencia}
    Dinheiro: $${personagem.dinheiro}
    Emprego: ${personagem.profissao}
    Saúde do emprego: ${personagem.emprego}/5
    Bens: ${personagem.bens}
    --------------------------
    `);
      profDias++;
      return professor();
    }
  } else {
    if (personagem.profissao == "Eng. da Apple") {
      console.clear();
      console.log("Você foi trabalhar mas parecia estar totalmente perdido...");
      console.log(`
      --------------------------
      Status do seu personagem:
  
      Inteligência: ${personagem.inteligencia}
      Dinheiro: $${personagem.dinheiro}
      Emprego: ${personagem.profissao}
      Saúde do emprego: ${personagem.emprego}/5
      Bens: ${personagem.bens}
      --------------------------
      `);
      engDias++;
      return engenheiroApple();
    } else {
      if (personagem.profissao == "Professor") {
        console.clear();
        console.log(
          "Você foi trabalhar mas parecia estar totalmente perdido..."
        );
        console.log(`
      --------------------------
      Status do seu personagem:
  
      Inteligência: ${personagem.inteligencia}
      Dinheiro: $${personagem.dinheiro}
      Emprego: ${personagem.profissao}
      Saúde do emprego: ${personagem.emprego}/5
      Bens: ${personagem.bens}
      --------------------------
      `);
        profDias++;
        return professor();
      }
    }
  }
}

// Minigame opção roubar

function roubar() {
  console.clear();
  let num = Math.ceil(Math.random() * 20);
  let num2;
  let contador = 0;
  console.log(
    "Você deve invadir um cofre... Vamos começar! Escolha um número de 1 a 20"
  );
  do {
    console.log();
    num2 = +prompt("");
    console.log();
    contador++;
    if (num > num2) {
      console.log(`O número é maior que ${num2}! Tente outro número:`);
    } else if (num < num2) {
      console.log(`O número é menor que ${num2}! Tente outro número:`);
    }
    if (contador == 7) {
      break;
    }
  } while (num != num2);

  if (contador == 7) {
    let policia = Math.ceil(Math.random() * 20);
    if (policia <= 4) {
      console.clear();
      console.log("Você foi preso!");
      return fimDeJogo();
    } else {
      console.clear();
      console.log("Você escapou por pouco! Tome cuidado da próxima vez");
      return opcoes();
    }
  } else {
    console.clear();
    console.log("Você descobriu a senha do cofre e roubou $1000!");
    personagem.dinheiro = personagem.dinheiro + 1000;
    return opcoes();
  }
}

// Opção Fim de jogo

function fimDeJogo() {
  console.log("FIM DE JOGO!");
}

// -------------------------------------------

let nome = prompt("Qual seu nome? ");

criarPersonagem(nome);
console.clear();
escola();
