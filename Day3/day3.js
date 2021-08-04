function nameandcity() {
  let name=document.querySelector("#name").value;
  let city=document.querySelector("#city").value;
  document.querySelector(".gautam").innerHTML=`<h1>Name: ${name} City: ${city} </h1>`;
}
