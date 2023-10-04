import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Private Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
