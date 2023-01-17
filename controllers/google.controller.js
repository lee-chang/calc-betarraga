let googleSheet = require("../spreadsheeet");

const obtenerData = async (req, res) => {
  sheet = await googleSheet.accessSpreadsheet();
  //por celdas
  await sheet.loadCells("C1:F7");

  //SELECCIONAR CELDA d4

  const reg = {
    BCE: sheet.getCell(1, 3).value,
    VANE: sheet.getCell(2, 3).value,
    TIRE: sheet.getCell(3, 3).value,
    BCF: sheet.getCell(4, 3).value,
    VANF: sheet.getCell(5, 3).value,
    TIRF: sheet.getCell(6, 3).value,
  };

  //actualizar celda F2
  const updateQ = sheet.getCell(1, 5);
  //   updateQ.value = 100;

  res.render("index", { reg });
};

const updateDataQ = async (req, res) => {
    const newQ = req.params.Q;

    sheet = await googleSheet.accessSpreadsheet();
    await sheet.loadCells("C1:F11");

    const updateQ = sheet.getCell(1, 5);
    updateQ.value = newQ;
    await sheet.saveUpdatedCells();

    //esperar a que se actualice la hoja
    await sheet.loadCells("C1:F7");
    
    const indicadores = {
        BCE: sheet.getCell(1, 3).value,
        VANE: sheet.getCell(2, 3).value,
        TIRE: sheet.getCell(3, 3).value,
        BCF: sheet.getCell(4, 3).value,
        VANF: sheet.getCell(5, 3).value,
        TIRF: sheet.getCell(6, 3).value,
        CF: sheet.getCell(8, 3).value,
        CV: sheet.getCell(9, 3).value,
        IT: sheet.getCell(10, 3).value,
        CT: sheet.getCell(8, 3).value + sheet.getCell(9, 3).value,
        PE: sheet.getCell(8, 3).value / (sheet.getCell(10, 3).value - sheet.getCell(9, 3).value)
    }

    res.json(indicadores)
};

module.exports = {
  obtenerData,
  updateDataQ,
};
