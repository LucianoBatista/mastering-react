const person = {
  name: "Luba",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk;

// console.log(walk);
walk();

// calling this outside of a context return a window object [global]
