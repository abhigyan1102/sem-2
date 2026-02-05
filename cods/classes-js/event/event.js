let Grandparent = document.querySelector("#grandparent");
let Parent = document.querySelector("#parent");
let Child = document.querySelector("#child");
let eventlog = document.querySelector("#events");

Grandparent.addEventListener(
  "click",
  (e) => {
    console.log(" Grandparent CLicked!");
    let p = document.createElement("p");
    p.textContent = " Grandparent - Capturing";
    eventlog.appendChild(p);
  },
  false,
);
Parent.addEventListener(
  "click",
  (event) => {
    console.log(" Parent CLicked!");
    let p = document.createElement("p");
    p.textContent = " Parent - Capturing";
    eventlog.appendChild(p);
    event.stopPropagation();
  },
  false,
);
Child.addEventListener(
  "click",
  (e) => {
    console.log(" Child CLicked!-1");
    let p = document.createElement("p");
    p.textContent = " Child - Capturing";
    eventlog.appendChild(p);
    e.stopImmediatePropagation();
  },
  false,
);
Child.addEventListener(
  "click",
  (e) => {
    console.log(" Child CLicked!-2");
    let p = document.createElement("p");
    p.textContent = " Child CLicked!-2";
    eventlog.appendChild(p);
  },
  false,
); 