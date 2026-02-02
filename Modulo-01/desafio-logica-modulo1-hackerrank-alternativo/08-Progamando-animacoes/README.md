# Programando animações

Para quem está iniciando na programação de jogos, uma parte desafiadora é a implementação da lógica da mudança de animação de um personagem. Você, como funcionário da Ubsoft, uma das maiores empresas de desenvolvimentos de jogos do mundo, deve implementar a função que fará a troca de animação do Mário, na nova franquia de jogos que será lançada. A lógica é a seguinte:

    PARADO: se o player estiver no chão e com velocidade zero;
    ANDANDO: se tiver no chão e com velocidade de máximo 30;
    CORRENDO: se estiver no chão e com velocidade maior que 30;
    PULANDO: não estiver no chão;
    ATACANDO: se eles estiver atacando. Essa animação sobrepõem às demais.

Input Format

A entrada do seu programa será composta por três variáveis:

    velocidade: do tipo number. Mostra a velocidade do player;
    atacando: do tipo booleano. Indica se o player está ou não atacando;
    pulando: do tipo booleano. Indica se o player está ou não pulando.

Output Format

A programa deve imprimir:

    PARADO: se o player estiver no chão e com velocidade zero;
    ANDANDO: se tiver no chão e com velocidade de máximo 30;
    CORRENDO: se estiver no chão e com velocidade maior que 30;
    PULANDO: não estiver no chão;
    ATACANDO: se eles estiver atacando. Essa animação sobrepõem às demais.

Sample Input 0

30
true
false

Sample Output 0

PULANDO

Explanation 0

Apesar do player pussuir uma velocidade, ele está pulando.

Sample Input 1

20
true
true

Sample Output 1

ATACANDO

Explanation 1

Ele tem uma velocidade, está pulando e atacando. A animação de atacar se sobrepõem às demais.