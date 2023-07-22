import { useState, useEffect } from "react";
import './App.css';
import {Button} from '@mui/material';
import Box from '@mui/material/Box';

const App1 = () => {
  const [users, setUsers] = useState("");
  const [author, setAuthor] = useState("");

  const fetchUserData = () => {
    const url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const fetch1 = fetch(url);

    fetch1
      .then((res) => res.json())
      .then((d) => {
        const dataQuotes = d.quotes;
        const randomNum = Math.floor(Math.random() * dataQuotes.length);
        const randomQuote = dataQuotes[randomNum];
        //console.log(randomNum);
        //console.log(randomQuote);
        const quote = randomQuote["quote"];
        const author1 = randomQuote["author"];
        //const q1 =
        setUsers(quote);
        setAuthor(author1);
        //console.log(quote);
        //console.log(q1);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const changeIt = () => {
    fetchUserData();

    //setUsers("ww")
    //console.log(users);
    //console.log(2);
  };
  return (
    <div>
  <Box display="flex"    
  justifyContent="center"
  alignItems="center" m="auto" backgroundColor= 'white'  minHeight="10vh" padding={5}>
    <Box   backgroundColor= 'white' >
    <p id="text">{users}</p>

<p id="author">{author} - Author</p>
<Button variant = "outlined" id="new-quote" onClick={changeIt}>
 New quote
</Button>
    </Box>
    </Box>

      
    </div>
  );
};


function App() {
  return (
    <div className="App">
<Box display="flex"    
justifyContent="center"
alignItems="center"
minHeight="100vh">
    <App1/>
    </Box>
    </div>
  );
}

export default App;
