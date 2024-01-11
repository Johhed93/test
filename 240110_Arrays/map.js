const gruppe = ["Jostein", "Elisabet", "Petter", "Vilde"];

gruppe.forEach(navn => {
    /* kode som kjøres for alle elementer */
    navn = navn + "_ok";
    console.log(navn);
});

const foreach_liste = gruppe.forEach((navn) => { /* forEach endrer på hver verdi i arrayet og sender de endrede verdiene ut */
    return "something";
});

const endret_liste = gruppe.map((navn) => { /* Map manipulerer arrayet og lagrer disse endringene i et nytt array */
    /* manipulerer database */
    return navn.toLocaleUpperCase();
})

console.log(gruppe, endret_liste, foreach_liste);

const persons = [
{
    name: "Petter",
    age: 20,
    profession: "gartner"
},{
    name: "Hans",
    age: 21,
    profession: ""
},{
    name: "Lars",
    age: 34,
    profession: "teacher"
}];

const personsName = persons.map(person => person.name)

console.log("De " + persons.length + " guttene " + personsName.join(", ") + " er kompiser. ");