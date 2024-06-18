import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <label htmlFor="password">Password</label>
      <input id="password" type={isVisible === true ? "text" : "password"} />
      <span
        className="visibility-icon"
        onClick={() => setIsVisible(isVisible ? false : true)}
      >
        {isVisible ? "🙈" : "👁️"}
        {/* cmd + ctrl + SPACE for emojis */}
      </span>
    </>
  );
}

export default App;
