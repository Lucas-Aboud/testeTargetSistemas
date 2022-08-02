// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
// próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número,
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let entreComValor = 2584 //coloque seu valor aqui

const fibonacci = (consulta, valor1 = 1, valor0 = 0) => {
    if (valor1 < consulta) {
        return fibonacci(consulta, valor1 + valor0, valor1);
    };
    if (valor1 === consulta) {
        return console.log('Faz parte da sequencia Fibonacci');
    }
    return console.log('Não faz parte da sequencia Fibonacci');
};
console.log(fibonacci(entreComValor));
