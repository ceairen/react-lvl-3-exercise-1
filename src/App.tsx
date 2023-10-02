import "./App.css";
import Todos from "./components/Todos/Todos";
import TodosForm from "./components/TodosForm/TodosForm";
import { StorageProvider } from "./store/StorageContext";

function App() {
  return (
    <StorageProvider>
      <div className="App">
        <TodosForm />
        <Todos />
      </div>
    </StorageProvider>
  );
}

export default App;
