# Cubos Academy School

Com o intuito de fazer uma correção de provas de questões abertas mais justa, a Cubos Academy School, escola da Cubos destinada a ensino de programação em escolas, utiliza um sistema de correção diferente. Nesse tipo de correção, vários professores corrigem a mesma prova e dão uma nota. Depois disso, verifica-se:

    Se a diferença entre a maior nota dada e a menor nota for maior que 2 pontos, é necessário uma recorreção da prova, pois indica que não houve consenso entre os corretores;

    Caso contrário, a nota do aluno será a média das notas dadas pelos corretores.

A média é calculada por

é

Você, como consultor de programação, foi contratado para automatizar esse processo criando um programa.

Input Format

Sua entrada será um array de notas, chamado notas, em que cada posição representa uma nota dada por um corretor diferente.

Output Format

Você deve imprimir na tela:

    RECORRIGIR PROVA: caso a diferença entre a maior e a menor nota dada for maior que dois pontos;
    A média da nota do aluno, caso contrário.

Sample Input 0

10 9 8 7

Sample Output 0

RECORRIGIR PROVA

Explanation 0

A maior nota dada foi 10 e a menor 7. A diferença, portanto, foi de 10 - 7 = 3. Como a diferença foi maior que 2 pontos, é necessário a recorreção da prova.

Sample Input 1

10 10 9 9

Sample Output 1

9.5

Explanation 1

A diferença entre a maior e a menor nota foi de 10 - 9 = 1, ou seja, não há necessidade de recorreção da prova. Portanto, o programa deve imprimir a média, que é de (10+10+9+9)/4 = 9.5.