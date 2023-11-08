console.log("%c aufgabe 1_1", "color:red");

const person = {};
person.name = "soufian";
person.alter = "37";
person.sagNameAlter = function () {
  alert("name:" + this.name + "alter" + this.alter);
};
console.log("name:", person.name);
console.log("alter", person.alter);
person.sagNameAlter();

const aufgabe2 = 1;
console.log("%c aufgabe 1_2", "color:red");

let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];
let nala = unsereHaustiere[0].names[1];
console.log(nala);
let Droopy = unsereHaustiere[1].names[2];
console.log(Droopy);

let hundename = unsereHaustiere[1].names.join(" , ");
console.log(hundename);

function hundenamenAendern(neueNamen) {
  unsereHaustiere[1].names = neueNamen;
}

let neueHundenamen = ["Bello", "Rex", "Lucky"];
hundenamenAendern(neueHundenamen);

// Überprüfen, ob die Hundenamen geändert wurden
console.log(unsereHaustiere);
console.log("%c aufgabe 1_3", "color:red");
let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};
console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Obere Schublade"].Ordner1);
console.log(unserLager.schrank["Untere Schublade"]);

console.log("%c aufgabe 1_4", "color:red");
let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

let outputDiv = document.getElementById("output");

myMusic.forEach(function (album) {
  outputDiv.innerHTML += `Artist: ${album.artist}<br>`;
  outputDiv.innerHTML += `Title: ${album.title}<br>`;
  outputDiv.innerHTML += `Medium: ${album.medium.join(", ")}<br><br>`;
});

console.log("%c aufgabe 1_5", "color:red");
let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

function displayStudentInfo(student) {
  console.log("Name: " + student.name);
  console.log("Coop: " + student.coop);
  console.log("City: " + student.address.city);
  console.log("Emails: " + student.emails.join(", "));
}

// Durchlaufe das Array und rufe die Funktion für jedes Objekt auf
studentData.forEach(displayStudentInfo);
console.log("%c aufgabe 2_1", "color:red");

let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

//Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.ruft für jeden Wert des Arrays eine Callback-Funktion auf, der es diesen Wert übergibt.
let names = [];
edelMetallPreise.forEach((item) => {
  names.push(item.name);
});
console.log(names);
//Verwende map() und greife auf alle name zu..map() erstellt ein Array durch den Aufruf einer bestimmten Funktion für jedes Element im übergeordneten Array.
let namexx = edelMetallPreise.map((item) => item.name);
console.log(namexx);
// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese in ein neues Array.
let prices = [];
edelMetallPreise.forEach((item) => {
  prices.push(item.preiseGramEuro);
});
console.log(prices);
//Verwende map() und greife auf alle preiseGramEuro zu
let pricexxx = edelMetallPreise.map((item) => item.preiseGramEuro);
console.log(pricexxx);
//verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array
let changes = [];
edelMetallPreise.forEach((item) => {
  changes.push(item.veraenderung);
});
console.log(changes);
//Verwende map() und greife auf alle veraenderung zu.
let change = edelMetallPreise.map((item) => item.veraenderung);
console.log(change);
//Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu.
let expensivePrices = edelMetallPreise.filter(
  (item) => item.preiseGramEuro > 50
);
console.log(expensivePrices);
//---------------------
let namexxx = edelMetallPreise.map((item) => item.name);
console.log(namexxx);

let prix = edelMetallPreise.map((item) => item.preiseGramEuro);
console.log(prix);

let changer = edelMetallPreise.map((item) => item.veraenderung);
console.log(changer);

let expensivePrix = edelMetallPreise.filter((item) => item.preiseGramEuro > 50);
console.log(expensivePrix);
//-------------------------
let dataContainer = document.getElementById("data");
edelMetallPreise.forEach((item) => {
  let row = document.createElement("tr");

  let nameCell = document.createElement("td");
  nameCell.textContent = item.name;
  row.appendChild(nameCell);

  let priceCell = document.createElement("td");
  priceCell.textContent = item.preiseGramEuro;
  row.appendChild(priceCell);

  let changeCell = document.createElement("td");
  changeCell.textContent = item.veraenderung;
  row.appendChild(changeCell);

  dataContainer.appendChild(row);
});
