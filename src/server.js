const express = require('express');
const app = express();
const path = require('path');
const ofx = require('ofx-convertjs');
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {  

const file = fs.readFileSync('abril-04-2022.ofx', 'utf8')
const data = ofx.toJson(file);
console.log(data.OFX.BANKMSGSRSV1.BANKTRANLIST.STMTTRN); 

});
app.listen(3333, (req, res) => {
    console.log('Servidor inicializado');
});