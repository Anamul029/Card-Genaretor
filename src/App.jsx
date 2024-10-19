import NavBar from "./components/NavBar";
import Left_Side from "./components/SideBar/Left_Side";
import Right_Side from "./components/SideBar/Right_Side";

function App() {
  return (
    <>
      <div className="bg-[#2c2929] text-white">
        <NavBar />
        <div className="flex flex-col bg-[#2c2929] md:h-screen md:flex-row pt-16">
          <Left_Side />
          <Right_Side />
          {/* ab */}
        </div>
      </div>
    </>
  );
}

export default App;
