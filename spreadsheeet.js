const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./json/credentials.json');

let googleId = '100-Tqn1aVq5TAj3zBm-2Upfw-5XoUOAl6jWiRY77yS4'

async function accessSpreadsheet() {
    
    const doc = new GoogleSpreadsheet(googleId);
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[6];
    return sheet;
}

accessSpreadsheet();

module.exports = {
    accessSpreadsheet:accessSpreadsheet,
}