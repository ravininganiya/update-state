import React, { useEffect, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(null);
  const [inputVal, setInputVal] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    // const interval = setInterval(() => {
    //   setTimer((prev) => prev + 1);
    // }, 1000);
    // return clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    let val = e.target.value;
    setInputVal(val);
  };
  const handleClick = () => {
    let id = 0;
    let tempData = {
      id: id + 1,
      inputVal
    };
    // var joined = data.concat(tempData);
    setData((prev) => [tempData, ...prev]);
    console.log(data);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />
      {/* <h1>count timer {timer}</h1> */}
      <button onClick={() => handleClick()}>click</button>
    </div>
  );
};
export default App;
