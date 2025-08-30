const url = "https://official-joke-api.appspot.com/random_joke";
fetch(url)
  .then((res) => {
    console.log("this is res");
    console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });

/*
import Axios from "axios";

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    let url = "https://catfact.ninja/fact";
    Axios.get(url).then((res) => {
      console.log(res);
      setJoke(res.data.fact);
    });
    fetch(url).then((res) => {
      res.json();
    }).then(());
  };
  */
