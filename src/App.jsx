import { useState } from "react";
import "./App.css";
import Welcome from "./components/welcome";
import InvitationDetail from "./components/invitation-detail";
import getQueryValue from "./helper/getQueryValue";

function App() {
  const [showDetail, setShowDetail] = useState(false);

  const guestName = decodeURIComponent(getQueryValue(location, "to" || ""));
  const handleClickDetail = () => {
    setShowDetail(true);
  };
  return (
    <div>
      <Welcome onClickDetail={handleClickDetail} guestName={guestName} />
      {showDetail ? <InvitationDetail /> : null}
    </div>
  );
}

export default App;
