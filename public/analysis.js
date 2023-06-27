// code for button clicks
const listener1 = async (event) => {
  event.preventDefault();
  console.log(searchoffset);
  document.location.replace(`/call/${searchoffset}`);
};

const listener2 = async (event) => {
  event.preventDefault();
  console.log(searchabsolute);
  document.location.replace(`/call/${searchabsolute}`);
};
const listener3 = async (event) => {
  event.preventDefault();
  let searchqueryInput = document.getElementById("site-search").value;
  console.log(searchqueryInput);
  document.location.replace(`/call/${searchqueryInput}`);
};

// code for ai keyword generator
const listener4 = async (event) => {
  event.preventDefault();
  let book = document.getElementById("book").innerHTML;
  let dewey = document.getElementById("dewey").innerHTML;
  console.log(book, dewey);
  const response = await fetch(`/keywords`, {
    method: "POST",
    body: JSON.stringify({ book, dewey }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    let words = await response.json();
    let keywords = document.getElementById("keywords");
    keywords.innerHTML = words.results2;
  } else {
    alert("Failed");
  }
};
let searchoffset;
let searchabsolute;
//Following Code for Setting Relative and Absolute Offset Spans From Sliders
const relativeanswer = document.getElementById("relativeRange");
const insertA = document.getElementById("relative");
insertA.innerHTML = relativeanswer.value;

const absoluteanswer = document.getElementById("absoluteRange");
const insert = document.getElementById("absolute");
insert.innerHTML = absoluteanswer.value;

relativeanswer.oninput = function () {
  insertA.innerHTML = this.value;
  const offsetresult = document.getElementById("offsetresult");
  const dewey = document.getElementById("dewey");
  offsetresult.innerHTML = Number(dewey.innerHTML) + Number(insertA.innerHTML);
  let mathfloor = Math.floor(offsetresult.innerHTML);
  searchoffset = mathfloor;
};
absoluteanswer.oninput = function () {
  insert.innerHTML = this.value;
  let mathfloor = Math.floor(insert.innerHTML);
  searchabsolute = mathfloor;
};
// Code for Search Buttons
const searchRelative = document.getElementById("searchButtonOffset");
searchRelative.addEventListener("click", listener1);
const searchAbsolutebtn = document.getElementById("searchButtonAbsolute");
searchAbsolutebtn.addEventListener("click", listener2);
const searchCustom = document.getElementById("searchButtonCustom");
searchCustom.addEventListener("click", listener3);
const getkeywords = document.getElementById("getkeywords");
getkeywords.addEventListener("click", listener4);
