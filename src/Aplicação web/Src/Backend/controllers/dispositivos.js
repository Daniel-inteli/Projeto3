const service = require("../services/dispositivos");
require("express-async-errors");

const novosDispositivos = (req, res) => {
  const { nome, predio, sala, codigo_patrimonio, data_hora } = req.body;
  const dispositivo = new service.Dispositivo(nome, predio, sala, codigo_patrimonio, data_hora);

  dispositivo.createDispositivo().then((resul) => {
    if (resul.type === "error") {
      res.status(500).json({
        error: resul.message,
      });
    } else {
      res.status(200).json({
        message: resul.message,
      });
    }
  });

  return dispositivo;
};

// essa parte está tornando a função pública
module.exports = {novosDispositivos};