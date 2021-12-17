import React from "react";

export default function CatFact() {
  const [facts, setFacts] = React.useState({});
  const [used, setUsed] = React.useState(false);
  const switchUsed = () => {
    setUsed(!used);
  };

  React.useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => {
        var parsedData = {};
        Object.entries(data).forEach(([key, value]) => {
          if (used === data[key]["used"]) {
            parsedData[data[key]["text"]] = data[key]["status"]["verified"];
          }
        });
        setFacts(parsedData);
      });
  }, [used]);

  return (
    <div>
      <h1>Effect Hook</h1>
      <h2>Cat fact</h2>
      <button onClick={switchUsed}>Used:{used.toString()}</button>
      <ul>
        {Object.keys(facts).map((fact) => (
          <li>
            {fact}
            {facts[fact] ? <b>This is true</b> : <b>This is false</b>}
          </li>
        ))}
      </ul>
    </div>
  );
}
