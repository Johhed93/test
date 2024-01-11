const gruppe1 = ["Jostein", "Elisabet", "Petter", "Vilde"];
const gruppe1_leder = gruppe1[3];

gruppe1.push("Kari");
gruppe1[5] = "Vidar";

console.log(
    "gruppemedlemmer:",
    gruppe1,
    "antall:",
    gruppe1.length,
    "gruppe leder:",
    gruppe1_leder
);

let fjerner_elev = gruppe1.pop();

console.log(gruppe1, "fjernet:", fjerner_elev);

fjerner_elev = gruppe1.pop();
console.log(gruppe1, "fjernet:", fjerner_elev);

fjerner_elev = gruppe1.pop();
console.log(gruppe1, "fjernet:", fjerner_elev);