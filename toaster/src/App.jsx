import { useRef, useState } from "react";
import "./App.css";
import { SimpleBanner } from "./components/simple-banner";

// TODO
// 1. Create Banner which can be dismissed
// 2. Create a banner which can be auto dismiss
// 3. Create such that multiple banner can be trigged and they can be dismissed

function App() {
  const [show, setShow] = useState(false);
  const DISMISS_TIME = 5000;

  // const timer = useRef();

  const bannerTrigger = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, DISMISS_TIME);
  };

  // how can we add progressbar with timer thingy?

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <button onClick={() => setShow(true)}>Trigger Banner</button>
        <button onClick={bannerTrigger}>Trigger Banner with AutoDismiss</button>
      </div>

      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        <SimpleBanner
          autoDismiss = {true}
          dismissTime = {DISMISS_TIME}
          show={show}
          setShow={setShow}
          text="Banner opened successFully"
        />
      </div>
    </div>
  );
}

export default App;
