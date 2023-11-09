import React, { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";
import { useEffect } from "react";

function App() {
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));
  }, []);

  return (
    <React.Fragment>
      <h1 className="text-white text-center mt-6 text-3xl uppercase">
        Maaş Otomasyonu
      </h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </React.Fragment>
  );
}

export default App;
