console.log("=== Sistem de Gestiune Sală de Sport ===");

const salaSport = {
    nume: "FitZone Gym",
    adresa: "Str. Calea Iesilor 6/9",
    membri: []
};

console.log(`Bine ați venit la ${salaSport.nume}!`);

function adaugaMembru(id, nume, tipAbonament) {
    salaSport.membri.push({ id, nume, tipAbonament, activ: true });
    console.log(`Membrul ${nume} a fost adăugat.`);
}