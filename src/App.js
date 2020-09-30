import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import trump1 from './images/TrumpHeads/trump1.png';
import trump2 from './images/TrumpHeads/trump2.png';
import trump3 from './images/TrumpHeads/trump3.png';
import trump4 from './images/TrumpHeads/trump4.png';



function App() {
  const [quote, setQuote] = useState();
  const [trumpPic, setTrumpPic] = useState(trump1);


  const trumpHeads = [trump1, trump2, trump3, trump4 ];

  useEffect(() => {
    if (!quote) {
      newQuote();
    }
  });

  const newQuote = () => {
    let randomNum = Math.floor(Math.random() * 4)
    Axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
      .then(res => {
        setTrumpPic(trumpHeads[randomNum]);
        setQuote(res.data);
      })
  };



  return (
    
    <div className="App">

<h1><b>Trump Quote Generator</b></h1>

<div className='quoteContainer'>
<p>{quote && quote.message}</p>
</div>

<div className='imgArea'>
 <img id='pic' src={trumpPic} alt='Donald Trump'/> 
</div>
<button className='randomQuote' onClick={() => newQuote()}>Random Quote</button>
    </div>
  );
}

export default App;
