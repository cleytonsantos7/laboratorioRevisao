# Lançamento de Granada

O lançamento de granada é uma das modalidades do pentatlo militar, competição tradicional nas Forças Armadas. Essa prova consiste em lançar dispositivos que pesam 575 gramas (prova masculina) ou 375 gramas (prova feminina), e que simulam granadas, em dois tipos diferentes de situação, sendo uma delas o lançamento de precisão, que consiste em:

    Cada concorrente tem à disposição 16 granadas que serão lançadas em quatro círculos situados à distâncias diferentes;

    Na competição masculina, os círculos estão situados às seguintes distâncias: 20/25/30/35 metros; na feminina: 15/20/25/30 metros;

    São lançadas 4 granadas em cada um dos círculos;

    A pontuação por granada acertada em cada círculo cresce de acordo com a distância que aquele círculo se encontra, sendo de 1 ponto para o primeiro círculo, de 2 pontos para o segundo, 3 pontos para o terceiro e 4 pontos para o quarto.

Você deve criar um programa que ao receber o gabarito, documento que mostra quantas granadas foram acertadas em cada círculo, de um competidor retorne quantos pontos ele fez.

Input Format

A entrada será sempre um array, denominado gabarito, em que:

    As 4 primeiras posições representam acertos (true) ou erros (false) em arremessos feitos no primeiro círculo;

    As posições de 5 à 8 representam acertos (true) ou erros (false) em arremessos feitos no segundo círculo;

    As posições de 9 à 12 representam acertos (true) ou erros (false) em arremessos feitos no terceiro círculo;

    As últimas 4 posições representam acertos (true) ou erros (false) em arremessos feitos no quarto círculo.

Output Format

Você deve imprimir na tela a pontuação total do atleta.

Sample Input 0

true false true true
false false true true
false false false true
true false true false

Sample Output 0

18

Explanation 0

Fora três acertos no primeiro círculo, somando 3 pontos; dois acertos no segundo, somando 4; um no terceito, somando 3; dois no quarto, somando 8. No total, temos 3 + 4 + 3 + 8 = 18.