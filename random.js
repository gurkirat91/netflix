const fetch=require("node-fetch")
let url="https://api.themoviedb.org/3/genre/movie/list?";
let api_key="0033f20501c8f92f063c20a642f5829a";
fetch(url+new URLSearchParams({
  api_key:api_key
}))
.then((res)=>res.json())
.then((res)=>console.log(res));
