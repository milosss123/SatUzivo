// Pomoćna funkcija za prikazivanje vremena u odabranoj vremenskoj zoni
function prikaziVreme(zona) {
  const sada = new Date();
  
  // Koristimo Intl.DateTimeFormat da konvertujemo vreme u željenu vremensku zonu
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: zona
  });

  const vreme = formatter.format(sada);
  
  // Ažuriramo prikaz na stranici
  document.getElementById("sat").textContent = vreme;

  // Prikazivanje datuma
  let dan = String(sada.getDate()).padStart(2, "0");
  let mesec = String(sada.getMonth() + 1).padStart(2, "0");
  let godina = sada.getFullYear();

  document.getElementById("datum").textContent = `${dan}.${mesec}.${godina}`;
}

// Postavi inicijalnu vremensku zonu na Beograd
let trenutnaZona = "Europe/Belgrade";
prikaziVreme(trenutnaZona);

// Funkcija za prebacivanje teme (svetla/mračna)
function prebacivanjeTeme() {
  document.body.classList.toggle("mracna-tema");
}

// Dodaj događaj za dugme koje prebacuje temu
document.getElementById("prebaci-temu").addEventListener("click", prebacivanjeTeme);

// Funkcija za promenu vremenske zone
document.getElementById("vremenska-zona").addEventListener("change", function() {
  trenutnaZona = this.value;  // Ažuriraj izabranu vremensku zonu
  prikaziVreme(trenutnaZona);  // Pozovi funkciju sa novom vremenskom zonom
});

// Pozivaj funkciju za vreme svakih 1000 ms (1 sekunda) da osvežavaš sat
setInterval(() => prikaziVreme(trenutnaZona), 1000);
