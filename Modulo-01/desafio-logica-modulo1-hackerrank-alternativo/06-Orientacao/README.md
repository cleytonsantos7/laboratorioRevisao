# Orientação

Orientação é um esporte cujo objetivo é percorrer uma determinada distância em terreno variado e desconhecido em que o atleta tem que passar obrigatoriamente por determinados pontos no terreno, chamados de postos de controle, descritos em um mapa que é dado a cada concorrente. O atleta pode utilizar apenas o mapa e uma bússola para se orientar.

O tempo gasto para percorrer o trajeto são função da capacidade física dos participantes, do treinamento de leitura do mapa e da rapidez em se orientar utilizando técnicas que são adquiridas com a experiência, além da capacidade de adaptação ao terreno e da escolha correta dos itinerários.

Uma modalidade deste esporte consiste em o atleta, necessariamente, passar pelos pontos marcados no mapa em ordem. Uma forma de saber se o atleta passou pelos postos de controle é fazer com que o atleta escreva em uma folha as frases que estão escritas nesses postos.

Sua empresa foi contratada pela CBO (Confederação Brasileira de Orientação) para desenvolver o software que será utilizado no Campeonato Mundial de Orientação. Você ficou responsável por criar a lógica que irá mostrar aos juizes se um atleta passou, em ordem, por todos os postos.

Input Format

A entrada do seu programa será composta de duas variável:

    anotacaoAtleta: array de strings contendo o itinerário percorrido pelo atleta;
    gabarito: array de strings contendo o itinerário correto que deveria ter sido seguido pelo atleta.

Output Format

Você deverá imprimir na tela:

    PROVA COMPLETA: se o atleta tiver passado por todos os postos e em ordem;
    PROVA INCOMPLETA: se o atleta não tiver passado por todos os postos ou tiver passado na ordem errada.

Sample Input 0

["cavalo", "pedra", "tartaruga"]
["cavalo", "pedra", "morcego"]

Sample Output 0

PROVA INCOMPLETA

Explanation 0

O último posto que o atleta passou está errado.

Sample Input 1

["aviao", "cadeira", "caneco"]
["pedra", "limpeza", "tigre", "macaco"]

Sample Output 1

PROVA INCOMPLETA

Explanation 1

O atleta não conseguiu passar por todos os postos. Além disso, ele errou completamente os 3 primeiros postos que deveria ter passado.

Sample Input 2

["lambari", "campanhia", "namoro"]
["lambari", "campanhia", "namoro"]

Sample Output 2

PROVA COMPLETA

Explanation 2

O atleta passou por todos os posto e na ordem correta.