import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceForm from "./commponents/ServiceForm";
import MultiStepForm from "./commponents/MultiStepFrom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServiceForm />} />
        <Route path="/form" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
}

export default App;
