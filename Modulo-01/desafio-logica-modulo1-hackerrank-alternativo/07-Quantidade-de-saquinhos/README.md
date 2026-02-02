# Quantidade de saquinhos

Um pequeno empresário que trabalha fazendo doces para festas percebeu que precisava quantizar a quantidade de saquinhos que ele irá gastar em uma determinada demanda. Ele sabe que, em média, cada saquinho comporta 15 doces.

Você foi contratado para criar um programa que automatize essa quantização. Para isso, seu programa deve, ao receber um objeto contendo a quantidade que foi feito de cada doce, retornar a quantidade estimada de saquinhos que serão necessários.

Esse empresário trabalha com 3 tipos de doces: brigadeiro, beijinho e cajuzinho.

A quantidade estimada de saquinhos é de:

Dica: Cuidado! Não existem, por exemplo, 3.5 saquinhos 😉

Input Format

A entrada do seu programa é uma variável chamada pedido, do tipo objeto, que armazena o nome e a quantidade feita de cada doce.

Output Format

Seu programa deve imprimir a quantidade estimada de saquinhos que serão utilizados naquela demanda.

Sample Input 0

{"brigadeiro": 30, "cajuzinho": 20, "beijinho": 60}

Sample Output 0

8

Explanation 0

A soma dos doces feitos é 30 + 20 + 60 = 110. Em cada saquinho cabem, em média, 15 doces. Ou seja, a quantidade estimada de saquinhos é de 110/15 = 7,33. Temos que arredondar esse número para mais, caso contrário, correremos o risco de teremos doces não embalados.