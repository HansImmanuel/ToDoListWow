"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

type Todo = {
  id: number;
  content: string;
  completed: boolean;
};

export function TodoList() {
  const [isMounted, setIsMounted] = useState(false); // untuk fix hydration
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [updatingTodoId, setUpdatingTodoId] = useState<number | null>(null);

  // Client-only: ambil todos dari localStorage
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("todos");
    setTodos(saved ? JSON.parse(saved) : [
      { id: 1, content: "Test 1", completed: false },
      { id: 2, content: "Test 2", completed: false },
    ]);
  }, []);

  // Simpan todos ke localStorage setiap update
  useEffect(() => {
    if (isMounted) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, isMounted]);

  function handleToggle(id: number) {
    setUpdatingTodoId(id);
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setUpdatingTodoId(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newItem: Todo = {
      id: Date.now(), // unique ID client-only
      content: newTodo,
      completed: false,
    };

    setTodos(prev => [...prev, newItem]);
    setNewTodo("");
  }

  function handleDelete(id: number) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  // Jangan render apa-apa di SSR
  if (!isMounted) return null;

  return (
    <div className="w-full animate-fade-in-up">
      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 rounded-lg bg-white/[0.05] px-4 py-2 text-sm text-white placeholder-zinc-400 ring-1 ring-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/[0.3]"
          />
          <button
            type="submit"
            disabled={!newTodo.trim()}
            className="rounded-lg bg-white/[0.1] px-4 py-2 text-sm font-medium text-white hover:bg-white/[0.15] focus:outline-none focus:ring-2 focus:ring-white/[0.3] disabled:opacity-50"
          >
            Add
          </button>
        </div>
      </form>

      {/* Todo List */}
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center gap-3 rounded-lg bg-white/10 p-4 ring-1 ring-white/[0.1] backdrop-blur-md"
          >
            <div className="relative">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                disabled={updatingTodoId === todo.id}
                className="h-5 w-5 rounded border-zinc-600 bg-zinc-900 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
              />
              {updatingTodoId === todo.id && (
                <Loader2 className="absolute left-0 top-0 h-5 w-5 animate-spin text-blue-500" />
              )}
            </div>

            <span
              className={`flex-1 text-sm ${
                todo.completed ? "text-zinc-500 line-through" : "text-white"
              }`}
            >
              {todo.content}
            </span>

            {/* Tombol Hapus */}
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              🗑
            </button>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {todos.length === 0 && (
        <div className="rounded-lg border border-dashed border-zinc-700 p-8 text-center">
          <p className="text-sm text-zinc-500">No todos yet. Add one above!</p>
        </div>
      )}
    </div>
  );
}
