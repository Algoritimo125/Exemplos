/*

- PARÂMETROS:
   São valores enviados para dentro de uma função (ao chamar 'alert()', passamos um texto como parâmetro, por exemplo).
   Eles são definidos entre parênteses na declaração da função e podem ser utilizados como variáveis internas.

-  RETORNO:
   É o valor que a função devolve quando é invocada/chamada (ao chamar 'Math.random()', retorna um número, por exemplo).
   Utiliza-se a palavra-chave `return` para retornar um valor que vier a seguir.
   Após o retorno, o código da função será interrompido, finalizando sua execução.

- FUNÇÕES COMO PARÂMETROS:
   Também chamadas de funções de "ordem superior", são funções que recebem outras funções como argumento e as executam.
   Possuem a capacidade de receber outras funções e manipulá-las apropriadamente.

*/


// Função que exibe duas mensagens no console, exibindo os 2 valores que espera receber 
function cumprimentar(mensagem1, mensagem2) {
   console.log(`1º parametro: ${mensagem1}`); // (exibe 'undefined' caso não receba primeiro  o valor)
   console.log(`2º parametro: ${mensagem2}`); // (exibe 'undefined' caso não receba segundo o valor)
}

// Chamadas com uma e duas mensagens
console.log("\n\n-- executando function cumprimentar(mensagem1, mensagem2)");
cumprimentar("Bem-vindo ao sistema!", "Esperamos que aproveite!");
cumprimentar("Olá, usuário!"); // exibe a primeira mensagem e a segunda ficará 'undefined'





// Função que exibe uma ou mais mensagens no console
function cumprimentarDinamico(...mensagens) {
   // acima, estamos utilizando o SPREAD OPERATOR (...) para obter TODOS OS PARÂMETROS PASSADOS como se fosse uma lista, sem a necessidade de identificar cada parâmetro
  for (let i = 0; i < mensagens.length; i++) {
   // percorre a lista de argumentos recebidos como parâmetro, caso não tenha recebido nenhum parâmetro, o length será 0!
    console.log(`Mensagem ${i + 1}: ${mensagens[i]}`);
  }
}

// Chamadas com uma e duas mensagens
console.log("\n\n-- executando function cumprimentarDinamico(...mensagens)");
cumprimentarDinamico("Olá, usuário!");
cumprimentarDinamico("Bem-vindo ao sistema!", "Esperamos que aproveite!");





// Função que multiplica dois valores e retorna o resultado
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Exemplo com retorno armazenado em variável
const multiplicacao = multiplicar(10, 20); // retorna o valor da multiplicação, que pode ser armazenado em variável
console.log("\n\n-- executando function multiplicar(num1, num2)");
console.log(`Multiplicação 10 x 20 = ${multiplicacao}`);





// Função que soma dois valores e retorna o resultado
function somar(a, b) {
  return Number(a) + Number(b);
}

// Exemplo com retorno direto no console
console.log("\n\n-- executando function somar(a, b)");
console.log(`Soma 10 + 20 = + ${ somar(10, 20) }`); // retorna o valor da soma, que pode ser exibido diretamente, sem armazenar





// Função que recebe uma lista e imprime seus elementos numerados
function listarItens(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`${i + 1}. ${lista[i]}`);
  }
}


// Usando a função com uma lista de frutas
console.log("\n\n-- executando function listarItens(lista)");
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
listarItens(frutas); // listarItens(["Maçã", "Banana", "Laranja", "Uva"])





// Função que filtra apenas os números pares e retorna uma nova lista
function filtrarPares(lista) {
  const pares = []; // lista auxiliar para armazenar os pares temporariamente durante a execução da função

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      pares.push(lista[i]);
    }
  }

  return pares;
}

// Testando a filtragem de pares
const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const somentePares = filtrarPares(numeros);
console.log("Números pares:", somentePares);
console.log("Lista original:", numeros);


// ----------------------------
// FUNÇÕES COM OUTRAS FUNÇÕES COMO PARÂMETROS (FUNÇÃO DE ORDEM SUPERIOR)
// ----------------------------

// Função que executa outra função recebida como parâmetro
function executar(imprimirNumero, valor) {
  console.log("Executando uma função recebida como parâmetro:");
  imprimirNumero(valor); // Chama a função passando o valor
}

// Função que será passada como argumento
function imprimirNumero(numero) {
  console.log("Número recebido:", numero);
}

// Usando a função executora, que recebe a função a ser executada e o valor a ser passado
executar(imprimirNumero, 42);
