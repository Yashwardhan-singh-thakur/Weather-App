import "./Heading.css";
import Modes from "./Modes";

export default function Heading() {
  return (
    <>
      <div className="head">
        <h1>Live Weather</h1>
        <div className="mode">
          <Modes />
        </div>
      </div>
    </>
  );
}
