
import { useState } from 'react';
import './App.css';
import data from "./resources/countryData.json";

function App() {
  const [count, setCount] = useState("");
  const [autoVisible, setAutoVisible] = useState(false);

  const handleDataChange = (event) => {
    const TermFinding
     = event.target.value;
    setCount(TermFinding
      );
    setAutoVisible(TermFinding
      .length > 0);
  }

  const Finding
   = (TermFinding
    ) => {
    setCount(TermFinding
      );
    setAutoVisible(false);
  }

  const handleVisibilityChange
   = (e) => {
    if (e.key === "Escape") {
      console.log("Escape key pressed");
      setAutoVisible(false);
    } else {
      setAutoVisible(count.length > 0);
    }
  }

  const Filtaratio = data.filter((item) => {
    const TermFinding
     = count.toLowerCase();
    const name = item.name.toLowerCase();
    return name.startsWith(TermFinding
      );
  });

  const handleEscape = () => {
    console.log("Escape key pressed");
    Finding(count);
  }

  return (
    <>
      <div>
         <h1>Finding Country</h1>
         <div>
           <input type="text" value={count} onChange={handleDataChange} onKeyDown={handleVisibilityChange} />
           <button onClick={handleEscape}>Finding
           </button>
         </div>
         <div id='auto' style={{ display: autoVisible ? 'block' : 'none' }}>
           {Filtaratio.length > 0 ? (
             <ul>
               {Filtaratio.map((item) => (
                 <li key={item.name} onClick={() => Finding
                 (item.name)}>
                   {item.name}
                 </li>
               ))}
             </ul>
           ) : (
             <p>No match found</p>
           )}
         </div>
      </div>
    </>
  )
}

export default App;
