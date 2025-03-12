import "./Heading.css";
import Modes from "./Modes";

export default function Heading() {
  return (
    <>
      <div className="head">
        <h1>Weather App</h1>
        <div className="mode">
          <Modes />
        </div>
      </div>
    </>
  );
}
