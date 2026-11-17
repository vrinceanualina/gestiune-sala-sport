console.log("=== Sistem de Gestiune Sală de Sport ===");

const salaSport = {
    nume: "FitZone Gym - Orar 08:00 - 23:00",
    adresa: "Str. Calea Iesilor 6/9",
    membri: []
};

console.log(`Bine ați venit la ${salaSport.nume}!`);

function adaugaMembru(id, nume, tipAbonament) {
    salaSport.membri.push({ id, nume, tipAbonament, activ: true });
    console.log(`Membrul ${nume} a fost adăugat.`);
}

adaugaMembru(1, "Simona Isac", "Lunar");
adaugaMembru(2, "Jasmina Varzari", "Anual");

function listeazaMembri() {
    console.log("Lista membrilor:", salaSport.membri);
}
listeazaMembri();
salaSport.incasariTotale = 0;
function inregistreazaPlata(suma) { salaSport.incasariTotale += suma; }
console.log('TEST GRESIT');
