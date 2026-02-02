function processData(input) {
        const linhas = input.trim().split('\n');
    const N = Number(linhas[0]);

    if (N < 2) {
        console.log(0);
        return;
    }

    const pontos = [];

    for (let i = 1; i <= N; i++) {
        const [x, y] = linhas[i].split(' ').map(Number);
        pontos.push({ x, y });
    }

    let maiorDistancia = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            const dx = pontos[i].x - pontos[j].x;
            const dy = pontos[i].y - pontos[j].y;
            const distancia = Math.sqrt(dx * dx + dy * dy);

            if (distancia > maiorDistancia) {
                maiorDistancia = distancia;
            }
        }
    }

    console.log(maiorDistancia);
} 

const input0 = `3
0 0
0 3
4 0`;

const input1 = `5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7`;

processData(input0);
processData(input1);