import Hello from "./hello";
import Message from "./message";
import Example from "./navbar";
import Quotes from "./quotes";
import Schedule from "./schedule";
import Story from "./story";
import Thanks from "./thanks";

export default function InvitationDetail() {
  return (
    <div id="detail">
      <Example />
      <Hello />
      <Schedule />
      <Story />
      <Quotes />
      <Message />
      <Thanks />
    </div>
  );
}
