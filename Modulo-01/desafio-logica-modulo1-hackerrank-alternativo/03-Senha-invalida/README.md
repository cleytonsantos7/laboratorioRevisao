# Senha Inválida

Uma empresa resolveu padronizar as senhas dos clientes. Para que o cliente consiga criar uma senha, que contém apenas números, ela deve ter:

    No mínimo 8 algarismos;
    Não pode conter 3 ou mais algarismos consecutivos.

Você, como programador deste banco, deve implementar a funcionalidade responsável por avisar o cliente se a senha que ele decidiu criar é válida ou não.

Input Format

A entrada será sempre um array de números, denominado senhaDigitada, em que cada item é um número digitado pelo cliente para compor sua senha.

Output Format

Você deverá imprimir na tela:

    VALIDA: caso a senha digita atenda os requisitos da empresa para criação da senha;
    INVALIDA: caso não atenda.

Sample Input 0

5 3 8 5 5 5 7 8 9

Sample Output 0

INVALIDA

Explanation 0

Apesar da senha conter mais de 8 números, ela possui 3 números em sequência (7, 8 e 9).