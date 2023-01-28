import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import { Route, Routes } from "react-router-dom";
import JoinNow from "./Pages/JoinNow/JoinNow";
function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage/>} />
      <Route path="/join" element={<JoinNow />} />
    </Routes>
    
  );
}

export default App;
