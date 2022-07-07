const fetch= require("fetch-node");
fetch(genres_list_http+new URLSearchParams({
  api_key:api_key
}))
.then((res)=>res.json())
.then((res)=>console.log(res));
