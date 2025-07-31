import { useEffect, useRef, useState } from "react";
const STEP_TIME = 100;
// type can be "info" | "error" | "warning"
const SimpleBanner = ({
  data,
  autoDismiss = false,
  dismissTime = 3000,
  closeBanner=() => {},
}) => {
//   const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
//   console.log(data.text)
  // this is to show the progressbar
  const timerRef = useRef();
  useEffect(() => {
    if (!autoDismiss) return;
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
  }, [autoDismiss]);

  useEffect(() => {
    if(elapsedTime >= dismissTime){
        timerRef.current = null;
        closeBanner(data.id);
    }
    // console.log(progress);
  }, [elapsedTime])


  const getCSS = (type) => {
    switch(type){
         case "info": 
            return {backgroundColor: "#E8FFD7", color: "black"};
        case "error":
            return {backgroundColor: "#FFD8D8", color: "black"};
        case "warning":
            return {backgroundColor: "#FEFFC4", color: "black"};
        default:
            return {backgroundColor: "#F2F2F2", color: "black"};

    }
  }
//   if (!show) return null;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          border: "1px solid gray",
          padding: "2px",
          ...getCSS(data.type) 
        }}
      >
        <p>{data.message}</p>
        <button onClick={() => closeBanner(data.id)}>X</button>
      </div>
      <div>
        {elapsedTime > 0 && <progress value={elapsedTime/ dismissTime * 100} max={100} />}
      </div>
    </>
  );
};

export { SimpleBanner };
