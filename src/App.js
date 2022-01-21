import Home from "./Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import {AppProvider} from "./context";


function App() {
  return (
    <AppProvider>
    <Navbar/>
      <Home/>
      <Sidebar/>
      <Submenu/>
    </AppProvider>
  );
}

export default App;
