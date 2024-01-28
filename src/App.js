import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import "./App.css"
// import Aboutus from "./Aboutus";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [modeMsg, setmodeMsg] = useState("Enable Night ☽");
  const [alert, setAlert] = useState(null);
  function showAlert(state, heading, message) {
    setAlert({
      state: state,
      heading: heading,
      msg: message
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("success", "Dark Mode Enabled", "");
      setmodeMsg("Enable Day ☼");
      document.body.style.backgroundColor = "#353a3f";
    } else {
      setMode("light");
      // alertitem.classList.remove("hide", "d-none");
      showAlert("success", "Light Mode Enabled", "");
      setmodeMsg("Enable Night ☽");
      document.body.style.backgroundColor = "#fff";
    }
  }
  return (
    <>
      <Navbar title="Text Advancement" modeMsg={modeMsg} toggleMode={toggleMode} mode={mode} search={0} links={["Home"]} />
      <Alert alert={alert} />
      {/* <div className="container py-5">
        <Aboutus />
      </div> */}
      <div className={"container"}>
        <Textform mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
