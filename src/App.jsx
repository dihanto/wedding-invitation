import { useState } from "react";
import "./App.css";
import Welcome from "./components/welcome";
import InvitationDetail from "./components/invitation-detail";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const handleClickDetail = () => {
    setShowDetail(true);
  };
  return (
    <div className="container">
      <Welcome onClickDetail={handleClickDetail} />
      {showDetail ? <InvitationDetail /> : null}
    </div>
  );
}

export default App;
