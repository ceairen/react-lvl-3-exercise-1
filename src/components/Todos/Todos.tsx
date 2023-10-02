import { useEffect, useState } from "react";
import { useStorage } from "../../store/StorageContext";

export default function Todos() {
  const { getStorageItem, rmStorageItem, storage } = useStorage();

  const [todos, setTodos] = useState<string[] | null>(null);

  function loadTodos() {
    const item = getStorageItem("todos");
    setTodos((todos) => (item === null ? null : item.value));
  }

  useEffect(() => {
    if (storage === undefined) return;
    loadTodos();
  }, [storage]);

  function handleClearTodos() {
    rmStorageItem("todos");
  }

  return (
    <section>
      {todos === null ? (
        "Pas de todos pour le moment."
      ) : (
        <div>
          <ul>
            {todos.map((todo, todoIndex) => {
              return <li key={todoIndex}>{todo}</li>;
            })}
          </ul>
          <button onClick={handleClearTodos}>Clear</button>
        </div>
      )}
    </section>
  );
}
