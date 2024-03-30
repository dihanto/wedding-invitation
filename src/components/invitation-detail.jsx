import Hello from "./hello";
import Message from "./message";
import Quotes from "./quotes";
import Schedule from "./schedule";
import Story from "./story";
import Thanks from "./thanks";

export default function InvitationDetail() {
  return (
    <div id="detail">
      <Hello />
      <Schedule />
      <Story />
      <Quotes />
      <Message />
      <Thanks />
    </div>
  );
}
