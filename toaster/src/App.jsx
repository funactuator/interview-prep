import { useRef, useState } from "react";
import "./App.css";
import { SimpleBanner } from "./components/simple-banner";

// TODO
// 1. Create Banner which can be dismissed
// 2. Create a banner which can be auto dismiss
// 3. Create such that multiple banner can be trigged and they can be dismissed
// 4. Type variants
//5. Trigger from anywhere
//6. Accessibility
//7. Animation and Performance
//8. Cross team applicability

function App() {
  // const [show, setShow] = useState(false);
  const DISMISS_TIME = 5000;

  const [toasts, setToasts] = useState([])

  // const timer = useRef();

  // do you think this is required?  especially setting timeout, can't it be done inside the component itself
  // const bannerTrigger = () => {
  //   setShow(true);
  //   setTimeout(() => {
  //     setShow(false);
  //   }, DISMISS_TIME);
  // };

  const addBannerTrigger = (e, message = "Banner Opened successfully", autoDismiss = true) => {
    setToasts((prev) => ([
      ...prev, 
      {id: Date.now(), autoDismiss, message}
    ]))
  }

  const closeBanner = (id) => {
    console.log(id);
    setToasts((prev) => prev.filter((p) => {
      return p.id !== id;
    }))
  }



  // how can we add progressbar with timer thingy?

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <button onClick={addBannerTrigger}>Trigger Banner</button>
        {/* <button onClick={bannerTrigger}>Trigger Banner with AutoDismiss</button> */}
      </div>

{/* do we require show and setShow */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        {toasts.map((t) => 
          <SimpleBanner
          key={t.id}
          autoDismiss = {t.autoDismiss}
          dismissTime = {DISMISS_TIME}
          closeBanner = {closeBanner}
          // show={t.show}
          // setShow={setShow}
          data = {t}
        />
        )}
      </div>
    </div>
  );
}

export default App;
