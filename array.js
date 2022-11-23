// way to create an array
const nme = ["a", "b", "c", "d"];

console.log(nme);
// loop statements

for (index in nme) {
  console.log(nme[index]);
}

// filter just output what is asked based on the conditions provided

console.log(nme.filter((name) => name.length === 1));

// map requires to tell what to do based on the conditions provided to it

console.log(nme.map((name) => name.length === 4));

