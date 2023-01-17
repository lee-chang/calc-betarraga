const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./json/credentials.json');

let googleId = '1ONFTrTr0U4C6M_O1YjZSa6E4-CV9vmnW7DgJh4SlD8k'

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