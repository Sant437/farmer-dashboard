// import Farmer from './Farmer';

import CropMonitoring from "./CropMonitoring";
import CropSelection from "./CropSelection";
import Farmer from "./Farmer";
import Navbar from "./Navbar";
import Regulation from "./Regulation";

function App() {
  return (
    <div className="App bg-slate-50">
      <Navbar/>
      <Farmer/>
      <CropSelection/>
      <CropMonitoring/>
      <Regulation/>
      
    </div>
  );
}

export default App;
   