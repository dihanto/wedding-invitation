import Hello from "./hello";
import Message from "./message";
import Schedule from "./schedule";
import Story from "./story";
import Thanks from "./thanks";

export default function InvitationDetail() {
  return (
    <div id="detail">
      <Hello />
      <Schedule />
      <Story />
      <Message />
      <Thanks />
    </div>
  );
}
