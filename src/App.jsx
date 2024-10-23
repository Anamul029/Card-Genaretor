import NavBar from "./components/NavBar";
import Left_Side from "./components/SideBar/Left_Side";
import Right_Side from "./components/SideBar/Right_Side";
import TestToggle from "./components/TestToggle";

function App() {
  return (
    <>
      <div className="bg-[#2c2929] min-h-screen text-white"> 
        <NavBar />
        <div className="flex flex-col bg-blue-950 mt-3 md:flex-row">
          <Left_Side />
          <Right_Side />
          {/* ab */}
        </div>
        {/* <TestToggle></TestToggle> */}
      </div>
    </>
  );
}

export default App;

//bg-[#2c2929]
