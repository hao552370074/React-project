var url = "http//";
var data = { username: "example" };

fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
//   headers: { "Content-Type": "application/json" }
})
  .then(response => {
    return response.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });
