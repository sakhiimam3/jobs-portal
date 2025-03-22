import "./App.css";
import Navbar from "./layout/navbar";
import MainLayout from "./layout/mainLayout";
function App() {
  return (
    <>
     <Navbar />
     <div bg="red-500" >
      <MainLayout />
     </div>
    </>
  );
}

export default App;
