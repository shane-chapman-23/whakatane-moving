import "./App.css";
import GridLayout from "./components/GridLayout";

function App() {
  return (
    <main className="app-shell">
      <GridLayout columns={12} rowHeight={80} gap={16} className="w-full">
        hi
      </GridLayout>
    </main>
  );
}

export default App;
