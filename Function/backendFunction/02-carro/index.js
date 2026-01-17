const carro = {
    ligado: false,
    velocidade: 0,

    status: function () {
        const estado = this.ligado ? "Carro ligado" : "Carro desligado";
        console.log(`${estado}. Velocidade: ${this.velocidade}.`);
    },

    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            this.status();
        }
    },

    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
            return;
        }

        if (this.velocidade > 0) {
            console.log("Não é possível desligar o carro em movimento.");
            return;
        }
        this.ligado = false;
        this.status();
    },

    acelerar: function () {
        if (!this.ligado) {
            this.ligar();
        }

        if (this.velocidade < 300) {
            this.velocidade += 10;
        }

        this.status();
    },

    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possivel desacelerar um carro desligado.");
            return;
        }

        this.velocidade -= 10;

        if (this.velocidade <= 0) {
            this.velocidade = 0;
            this.desligar();
        } else {
            this.status();
        }
    }
};


carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();