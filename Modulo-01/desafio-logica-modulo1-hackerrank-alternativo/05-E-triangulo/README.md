# É triângulo

Para que uma figura seja um triângulo, além de ter três lados, a soma de dois deles deve ser sempre maior que o outro. Ou seja:

    lado B + lado C > lado A;
    lado A + lado C > lado B;
    lado A + lado B > lado C.

Você deve criar um programa que ao receber um array contendo os lados de uma figura qualquer retorne se essa figura é um triângulo.

Input Format

A entrada será sempre composta por um array de números, chamado lados, que contém as medidas dos lados de uma figura geométrica qualquer.

Output Format

Você deve imprimir

    TRIANGULO: caso a figura seja um triângulo;
    NAO TRIANGULO: caso a figura não seja um triângulo.

Sample Input 0

2 5 10 6

Sample Output 0

NAO TRIANGULO

Explanation 0

A figura possui 4 lados.

Sample Input 1

3 5 4

Sample Output 1

TRIANGULO

Explanation 1

Além de possuir três lados, temos que 3 + 4 > 5, 3 + 5 > 4, 4 + 5 > 3. 