const programari = [];
function programeazaAntrenament(membru, antrenor, ora) {
    programari.push({ membru, antrenor, ora });
}
module.exports = { programari, programeazaAntrenament };
function marcheazaPlatit(index) { if (programari[index]) programari[index].platit = true; }
