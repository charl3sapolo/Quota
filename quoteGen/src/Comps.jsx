import "./Comps.css";
import { useState, useEffect } from "react";

export function Title() {
  return (
    <div>
      <div className="qtitle">
        <h1>
          QUOTA...<q></q>
        </h1>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export function Qwrapper({ children }) {
  return <div className="qWrapper">{children}</div>;
}
export function Quotes() {
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState(null);
  useEffect(() => {
    const fetchedQ = async () => {
      const url =
        "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "b1e21259f0mshc280d0d3dd4e7cap192a8bjsn062e0308460d",
          "x-rapidapi-host":
            "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const query = JSON.parse(result);
        setQuery(query);
        console.log(query);
      } catch (error) {
        console.error(error);
      }
    };
    fetchedQ();
  }, []);

  
  function handleQuotes() {
    setIndex(Math.floor(Math.random() * 201));
  }

  let myQ = null; // Initialize myQ to null
  if (query) {
    myQ = query[index];
  }

  return (
    <div className="theQuotes">
      <p className="staticQuotes">
        <q>go through ready quotes from the finest minds</q>
        <br />
        <p className="staticQuotes">-John Pemberton-</p>
        <br />
        <br />
        {/* Only render the quote if myQ is not null and has a text property */}
        {myQ && myQ.text && (
          <p className="dynamicQuotes">
            <q>{myQ.text}</q>
          </p>
        )}
      </p>
      <button onClick={handleQuotes}>Generate Quote</button>
    </div>
  );
}
export function NameQ() {
  return (
    <div className="qname">
      <p className="staticQuotes">by...</p>
      <h2>- IGOR VALINOV -</h2>
      <br />
      <p className="staticQuotes">RUSSIAN OPS</p>
      <br />
    </div>
  );
}
