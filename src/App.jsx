
import { useState } from 'react';
import './App.css';
import data from "./resources/countryData.json";

function App() {
  const [count, setCount] = useState("");
  const [autoVisible, setAutoVisible] = useState(false);

  const handleChange = (event) => {
    const Termsearch = event.target.value;
    setCount(Termsearch);
    setAutoVisible(Termsearch.length > 0);
  }

  const search = (Termsearch) => {
    setCount(Termsearch);
    setAutoVisible(false);
  }

  const handleKey = (e) => {
    if (e.key === "Escape") {
      console.log("Escape key pressed");
      setAutoVisible(false);
    } else {
      setAutoVisible(count.length > 0);
    }
  }

  const filtered = data.filter((item) => {
    const Termsearch = count.toLowerCase();
    const name = item.name.toLowerCase();
    return name.startsWith(Termsearch);
  });

  const handleButton = () => {
    console.log("Escape");
    search(count);
  }

  return (
    <>
      <div>
         <h1>Search</h1>
         <div>
           <input type="text" value={count} onChange={handleChange} onKeyDown={handleKey} />
           <button onClick={handleButton}>Search</button>
         </div>
         <div id='autocomplete' style={{ display: autoVisible ? 'block' : 'none' }}>
           {filtered.length > 0 ? (
             <ul>
               {filtered.map((item) => (
                 <li key={item.name} onClick={() => search(item.name)}>
                   {item.name}
                 </li>
               ))}
             </ul>
           ) : (
             <p>No matching results</p>
           )}
         </div>
      </div>
    </>
  )
}

export default App;