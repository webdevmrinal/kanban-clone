import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
function App() {
  return (
    <>
      <Header />
      <div className="flex justify-between">
        <Sidebar />
        <Board />
      </div>
    </>
  );
}

export default App;
