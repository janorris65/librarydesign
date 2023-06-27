const searchBtn = document.getElementById("searchButton");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let searchqueryInput = document.getElementById("site-search").value;
  console.log(searchqueryInput);
  document.location.replace(`/search/${searchqueryInput}`);
  // fetch(`/search/${searchqueryInput}`, {
  //     method: "GET",
  //   })
  //   .then(() => document.location.replace(`/search/${searchqueryInput}`));
});
// const searchBtnbud = document.getElementById("searchButtonbud");

// searchBtnbud.addEventListener("click", (event) => {
//   event.preventDefault();
//   let searchqueryInput = document.getElementById("site-searchbud").value;
//   console.log(searchqueryInput);
//   document.location.replace(`/bud/${searchqueryInput}`);
//   fetch(`/search/${searchqueryInput}`, {
//       method: "GET",
//     })
//     .then(() => document.location.replace(`/search/${searchqueryInput}`));
// });
