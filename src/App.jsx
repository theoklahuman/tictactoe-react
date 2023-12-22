import Header from "./components/Header";
import Playerboard from "./components/Playerboard";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <Playerboard />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
