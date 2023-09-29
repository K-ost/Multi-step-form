import { Route, Routes } from "react-router-dom"
import Step1 from "./pages/Step1"
import Step3 from "./pages/Step3"
import Step2 from "./pages/Step2"
import Step4 from "./pages/Step4"
import Step5 from "./pages/Step5"
import MainRoute from "./pages/MainRoute"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="container">
    
      <div className="app">
        <Sidebar />
        <div className="app-content">
      
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route element={<MainRoute />}>
              <Route path="/step2" element={<Step2 />} />
              <Route path="/step3" element={<Step3 />} />
              <Route path="/step4" element={<Step4 />} />
              <Route path="/step5" element={<Step5 />} />
            </Route>
          </Routes>

        </div>
      </div>
      
    </div>
  )
}

export default App
