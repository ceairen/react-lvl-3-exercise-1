import { useState } from "react";
import { useStorage } from "../../store/StorageContext";

export default function TodosForm() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoError, setTodoError] = useState<string | null>(null);

  const { setStorageItem } = useStorage();

  function handleUpdateTodos() {
    setTodoError((todoError) => null);
    if (todoTitle === "") {
      setTodoError((todoError) => "Title could not be null.");
      return;
    }
    setStorageItem({
      key: "todos",
      value: todoTitle,
    });
  }

  return (
    <section>
      <div>
        {todoError && <p>{todoError}</p>}
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button onClick={handleUpdateTodos}>Add todos</button>
      </div>
    </section>
  );
}
