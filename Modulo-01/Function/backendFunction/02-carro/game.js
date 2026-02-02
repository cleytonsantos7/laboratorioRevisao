const readline = require("readline");

class Carro {
    constructor() {
        // Estado base
        this.ligado = false;
        this.velocidade = 0;
        this.marcha = 0; // ponto morto
        this.temperatura = 20; // motor frio
        this.combustivel = 100; // porcentagem
        this.historico = [];

        // Configurações gerais
        this.VELOCIDADE_MAX = 300;
        this.ACELERACAO_BASE = 10;
        this.DESACELERACAO_BASE = 10;

        // Sistema de marchas
        this.MARCHAS = {
            0: { max: 0, acel: 0 },   // ponto morto
            1: { max: 40, acel: 8 },
            2: { max: 80, acel: 10 },
            3: { max: 140, acel: 12 },
            4: { max: 200, acel: 14 },
            5: { max: 260, acel: 16 },
            6: { max: 300, acel: 18 }
        };

        // Sistema de modos
        this.modo = "normal"; 
        this.MODOS = {
            normal: 1,
            esporte: 1.4,
            economico: 0.7
        };

        // Turbo
        this.turboDisponivel = true;
    }

    // ================================
    // Métodos internos utilitários
    // ================================

    _log(msg) {
        this.historico.push(msg);
        console.log(msg);
    }

    _status() {
        console.log(
            `[STATUS] Ligado: ${this.ligado ? "Sim" : "Não"} | Vel: ${this.velocidade} | Marcha: ${this.marcha} | Temp: ${this.temperatura}°C | Comb.: ${this.combustivel}% | Modo: ${this.modo}`
        );
    }

    _gastarCombustivel(qtd) {
        this.combustivel = Math.max(0, this.combustivel - qtd);
        if (this.combustivel === 0) {
            this._log("O combustível acabou. O carro apagou.");
            this.ligado = false;
            this.velocidade = 0;
            this.marcha = 0;
        }
    }

    _aquecerMotor() {
        if (this.ligado) {
            this.temperatura = Math.min(110, this.temperatura + 0.5);
        } else {
            this.temperatura = Math.max(20, this.temperatura - 1);
        }
    }

    _ajustarMarchaAutomaticamente() {
        const vel = this.velocidade;

        for (let m = 1; m <= 6; m++) {
            if (vel <= this.MARCHAS[m].max) {
                this.marcha = m;
                return;
            }
        }

        this.marcha = 6;
    }

    _forcarLigamento() {
        if (!this.ligado) {
            this.ligado = true;
            this._log("O carro ligou automaticamente.");
        }
    }

    _forcarDesligamento() {
        if (this.velocidade === 0 && this.ligado) {
            this.ligado = false;
            this._log("O carro desligou automaticamente.");
        }
    }

    // ================================
    // Controles principais
    // ================================

    ligar() {
        if (this.ligado) return this._log("O carro já está ligado.");
        if (this.combustivel <= 0) return this._log("Sem combustível para ligar.");

        this.ligado = true;
        this._log("Carro ligado.");
        this._status();
    }

    desligar() {
        if (!this.ligado) return this._log("O carro já está desligado.");
        if (this.velocidade > 0) return this._log("Não é possível desligar em movimento.");

        this.ligado = false;
        this._log("Carro desligado.");
        this._status();
    }

    acelerar() {
        this._forcarLigamento();
        if (this.combustivel === 0) return;

        // Ajuste de marcha
        this._ajustarMarchaAutomaticamente();

        const configMarcha = this.MARCHAS[this.marcha];
        const fatorModo = this.MODOS[this.modo];

        let incremento = configMarcha.acel * fatorModo;

        this.velocidade += incremento;
        if (this.velocidade > configMarcha.max) {
            this.velocidade = configMarcha.max;
        }
        if (this.velocidade > this.VELOCIDADE_MAX) {
            this.velocidade = this.VELOCIDADE_MAX;
        }

        this._log(`Acelerando (+${Math.round(incremento)}).`);
        this._gastarCombustivel(0.3);
        this._aquecerMotor();
        this._status();
    }

    desacelerar() {
        if (!this.ligado) return this._log("O carro está desligado.");

        this.velocidade -= this.DESACELERACAO_BASE;
        if (this.velocidade < 0) this.velocidade = 0;

        this._log("Desacelerando...");
        this._gastarCombustivel(0.1);
        this._aquecerMotor();

        if (this.velocidade === 0) this._forcarDesligamento();

        this._status();
    }

    // ================================
    // Sistema de Turbo
    // ================================

    turbo() {
        if (!this.ligado) return this._log("O turbo não funciona com o carro desligado.");
        if (!this.turboDisponivel) return this._log("Turbo em recarga!");
        if (this.combustivel < 2) return this._log("Pouco combustível para turbo.");

        this.velocidade += 40;
        if (this.velocidade > this.VELOCIDADE_MAX) {
            this.velocidade = this.VELOCIDADE_MAX;
        }

        this.turboDisponivel = false;
        this._log("TURBO ativado! +40 km/h");

        this._gastarCombustivel(2);
        this._aquecerMotor();
        this._status();

        // Turbo recarrega depois de 5s
        setTimeout(() => {
            this.turboDisponivel = true;
            this._log("Turbo recarregado.");
        }, 5000);
    }

    // ================================
    // Modos de direção
    // ================================

    setModo(modo) {
        if (!this.MODOS[modo]) return this._log("Modo inválido.");
        this.modo = modo;

        this._log(`Modo alterado para: ${modo}`);
        this._status();
    }

    // ================================
    // Controle manual da velocidade
    // ================================

    setVelocidade(valor) {
        if (valor < 0 || valor > this.VELOCIDADE_MAX) {
            return this._log("Velocidade inválida.");
        }

        this.velocidade = valor;
        this._ajustarMarchaAutomaticamente();
        this._status();
    }

    getStatus() {
        this._status();
    }

    verHistorico() {
        console.log("===== HISTÓRICO =====");
        this.historico.forEach(e => console.log(e));
    }
}


const carro = new Carro();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function menu() {
    console.log("\n=== COMANDOS DISPONÍVEIS ===");
    console.log("ligar");
    console.log("desligar");
    console.log("acelerar");
    console.log("desacelerar");
    console.log("turbo");
    console.log("modo normal");
    console.log("modo esporte");
    console.log("modo economico");
    console.log("status");
    console.log("sair\n");
}

function interpretar(comando) {
    comando = comando.trim().toLowerCase();

    if (comando === "ligar") carro.ligar();
    else if (comando === "desligar") carro.desligar();
    else if (comando === "acelerar") carro.acelerar();
    else if (comando === "desacelerar") carro.desacelerar();
    else if (comando === "turbo") carro.turbo();
    else if (comando.startsWith("modo ")) {
        const modo = comando.split(" ")[1];
        carro.setModo(modo);
    }
    else if (comando === "status") carro.getStatus();
    else if (comando === "sair") {
        console.log("\nEncerrando o jogo...");
        process.exit();
    }
    else {
        console.log("Comando inválido");
    }
}

function loop() {
    rl.question("> ", (cmd) => {
        interpretar(cmd);
        loop();
    });
}

menu();
loop();