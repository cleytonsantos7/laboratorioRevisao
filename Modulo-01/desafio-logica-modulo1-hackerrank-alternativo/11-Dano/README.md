# Dano

Você foi contratado pela Electronic Arts, uma das maiores empresas de jogos eletrônicos do mundo e produtora do famoso jogo de futebol FIFA, para implementar a função que será acionada toda vez que o personagem de um jogo de plataforma baseado na vida de um programador encostrar em um bug (problema no código).

Essa função, que atualiza a vida do personagem e verifica se é fim de jogo, é chamada toda vez que ele encosta em um bug, perdendo um ponto de vida.

Input Format

A entrada do seu programa é composta por uma variável chamada personagem, do tipo objeto, e que armazena as informações do personagem nas seguintes propriedades propriedades:

    nome: do tipo string. Armazena o nome do personagem;
    classe: do tipo string. Armazena a classe do personagem do jogo (back-end, front-end ou full-stack);
    vida: do tipo number. Armazena a vida do personagem.

Output Format

Você deve imprimir na tela:

    FIM DE JOGO: caso a vida do personagem, após encostar no inimigo, seja menor ou igual a zero;
    Exibir a nova vida do personagem, caso contrário.

Sample Input 0

{"nome":"Kratos","classe":"back-end","vida":15}

Sample Output 0

14

Explanation 0

O personagem Kratos possuia 15 ponto de vida. Após encostar no inimigo, sua vida foi para 14 pontos.