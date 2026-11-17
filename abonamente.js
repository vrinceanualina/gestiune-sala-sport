const preturiAbonamente = { Lunar: 150, Trimestrial: 400, Anual: 1400 };
function calculeazaPret(tip) {
    return preturiAbonamente[tip] || 0;
}
module.exports = { calculeazaPret };
function aplicaReducereStudent(pret) { return pret * 0.8; }
