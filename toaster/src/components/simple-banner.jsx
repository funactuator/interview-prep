import { useEffect, useRef, useState } from "react";
const STEP_TIME = 100;
const SimpleBanner = ({
  text,
  show,
  setShow,
  autoDismiss = false,
  dismissTime = 3000,
}) => {
//   const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  // this is to show the progressbar
  const timerRef = useRef();
  useEffect(() => {
    if (!autoDismiss || !show) return;
    timerRef.current = setInterval(() => {
    //   setProgress((prev) => {
    //     // const newProgress = (((prev + STEP_TIME)/dismissTime) * 100).toFixed(2);
    //     console.log({currentProgress: prev, 
    //         newProgress,
    //         addition: prev + STEP_TIME
    //     })
    //     return newProgress; 
    //   });
        setElapsedTime(prev => prev + STEP_TIME);
    //   console.log(progress);
    }, STEP_TIME);

    return () => {
        timerRef.current = null;
    }
  }, [autoDismiss, show]);

  useEffect(() => {
    if(elapsedTime === dismissTime){
        timerRef.current = null;
    }
    // console.log(progress);
  }, [elapsedTime])
  if (!show) return null;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          border: "1px solid gray",
          padding: "2px",
        }}
      >
        <p>{text}</p>
        <button onClick={() => setShow(false)}>X</button>
      </div>
      <div>
        {show && elapsedTime > 0 && <progress value={elapsedTime/ dismissTime * 100} max={100} />}
      </div>
    </>
  );
};

export { SimpleBanner };
