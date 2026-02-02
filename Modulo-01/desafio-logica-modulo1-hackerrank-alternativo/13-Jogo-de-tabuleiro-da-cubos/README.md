# Jogo de tabuleiro da cubos

A cubos está desenvolvemento um jogo de tabuleiro que consiste em avançar casas e obter lucros ou prejuizos ao longo do caminho. A cada casa, pode-se ter um lucro ou prejuízo, dependendo da suas sorte. Cada novo jogo iniciado, os valores das casas e o dinheiro inicial de cada jogador são atualizados computacionalmente de forma aleatória. Abaixo encontra-se informações sobre o jogo:

    O jogo possui ao todo 20 casas;

    Ganha o jogador que conseguir PASSAR da casa 20 primeiro;

    Caso o jogador não tenha mais dinheiro, ele perde;

    A cada rodada um dado de três faces (acredite, esse dado existe! 😁) é lançado para saber quantas casas o jogador vai avançar;

    As casas estão numeradas de 1 a 20.

Você deve implementar a função que atualiza o dinheiro do participante depois dele ter feito uma jogada (girar o dado).

Input Format

Sua entrada será composta por quatro variáveis:

    dinheiro: variável numérica que armazena o dinheiro do participante antes da jogada;
    casaAtual: casa do tabuleiro que o jogador se encontra;
    numeroDoDado: mostra a quantidade de casas que o jogador vai andar (número tirado no dado);
    lucroPrejuizoCasas: array numérico que armazena o lucro ou o prejuízo das casas do jogo.

Output Format

Você deve imprimir na tela:

    GANHOU: caso o jogador tenha chegado ao final do jogo;
    PERDEU: caso o jogador tenha ficado sem dinheiro;
    A quantidade de dinheiro que o jogador possui após jogar o dado, caso contrário.

Sample Input 0

5
5
2
3 -1 -4 20 6 2 -7 9 -8 9 5 8 3 2 -1 -1 -3 4 8 10

Sample Output 0

PERDEU

Explanation 0

O jogador tirou 2 no dado e, portanto, ele avançará 2 casas. Como ele se encontrava na casa 5, após andar o número de casas no dado, ele irá para a casa 7. A casa 7 dará a ele um prejuizo de 7 reais, representado pelo -7 no array. Sendo assim, como ele tinha 5 reais antes de jogar o dado, agora ele terá 5 - 7 = -2. Como seu dinheiro acabou, ele perdeu.

Sample Input 1

20
18
3
30 -4 -4 10 -6 -2 -7 -9 -8 19 25 8 3 2 -10 5 -300 40 80 10

Sample Output 1

GANHOU

Explanation 1

O jogador estava na casa 18 e tirou 3 no dado. Portanto, ele deve ir para a casa 18 + 3 = 21. Como o jogo possui somente 20 casas, ele ganhou a partida.