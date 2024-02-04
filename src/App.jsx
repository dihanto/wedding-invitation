import { useState } from "react";
import "./App.css";
import Hello from "./components/hello";
import Welcome from "./components/welcome";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const handleClickDetail = () => {
    setShowDetail(true);
  };
  return (
    <div className="container">
      <Welcome onClickDetail={handleClickDetail} />
      {showDetail ? <Hello /> : null}
    </div>
  );
}

export default App;
