# Criptografia

Uma simples técnica de criptografia, chamada de cifra de substituição, consiste em substituir caracteres por outros, de forma tabelada. Dessa forma, somente o destinatário (a pessoa que deve ler a mensagem) deve ter a tabela para fazer a substituição inversa.

Essa técnica de criptografia foi usada pelo grande líder militar Júlio César, ainda no Império Romano, para comunicar com seus generais.

Seu trabalho é automatizar, dada uma tabela e uma mensagem criptografada, o ato de descriptografar uma mensagem.

Input Format

A entrada será sempre composta por dois parâmetros:

    mensagem: do tipo string contendo uma senha criptografada;

    tabela: do tipo objeto contendo a relação letra criptografada/letra descriptografada.

Output Format

Você deve imprimir na tela uma string com a senha descriptografada.

Sample Input 0

yeyb
{"y":"a", "e":"m", "b":"r"}

Sample Output 0

amar

Explanation 0

A palavra não criptografada é "yeyb". Segundo a tabela, o "y" representa o "a", o "e" representa o "m" e o "b" representa o "r".

Sample Input 1

yerws
{"e":"u", "w":"o", "y":"c", "r":"b", "s":"s"}

Sample Output 1

cubos

Explanation 1

A palavra criptografada é yerws. Segundo a tabela, a letra "y" representa o "c", a letra "e" presenta o "u", a letra "r" representa o "b", a letra "w" representa o ""o e a letra "s" representa ela mesma.