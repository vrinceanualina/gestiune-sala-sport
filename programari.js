const programari = [];
function programeazaAntrenament(membru, antrenor, ora) {
    programari.push({ membru, antrenor, ora });
}
module.exports = { programari, programeazaAntrenament };