const url = "https://official-joke-api.appspot.com/random_joke";
fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.setup);
    console.log(data.punchline);
  })
  .catch(console.error);
