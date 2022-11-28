const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");
const { open } = require("sqlite");
class Dispositivo {
    constructor(nome, predio, sala, codigo_patrimonio, data_hora) {
        this.nome = nome;
        this.predio = predio;
        this.sala = sala;
        this.codigo_patrimonio = codigo_patrimonio;
        this.data_hora = data_hora;
    }

    async createDispositivo() {
        // Pegando a instancia do db
        const db = await sqlite.open({
            filename: "./database/dispositivos.db",
            driver: sqlite3.Database,
        });
        this.data_hora = "2022-11-23 18:58:27";
        // Inserindo as informações no db
        console.log(this.codigo_patrimonio);
        const inserction = await db.run(
            "INSERT INTO equipamentos (nome, predio, sala, data_hora, codigo_patrimonio) VALUES (?,?,?,CURRENT_TIMESTAMP, ?)",
            [this.nome, this.predio, this.sala, this.codigo_patrimonio]
        );
        await db.close()

        // Checando se todas as informações foram inseridas no db
        if (inserction.changes === 0) {
            const error = {
                type: "error",
                message: "Database error",
            };
            return error;
        }

        const sucess = {
            type: "sucess",
            message: "User created with sucess",
        };

        return sucess;
    }
}

module.exports = { Dispositivo };