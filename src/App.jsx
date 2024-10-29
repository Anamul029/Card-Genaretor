import NavBar from "./components/NavBar";
import Left_Side from "./components/SideBar/Left_Side";
import Right_Side from "./components/SideBar/Right_Side";
import './styles/customFonts.css';


function App() {
  return (
    <>
      <div className="bg-[#2c2929] font-immortal mx-auto min-h-screen text-white"> 
        <NavBar />
        <div className="flex flex-col min-h-screen bg-blue-950 mt-1  md:flex-row">
          <Left_Side />
          <Right_Side />
          {/* ab */}
        </div>
      </div>
    </>
  );
}

export default App;

//bg-[#2c2929]
