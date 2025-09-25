import Image from "next/image";
import { TodoList } from "../components/TodoList";
import { fetchTodos } from "../actions/fetchData";

export default async function Home() {
  const todos = await fetchTodos();

  return (
    <div className="min-h-screen bg-green-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white text-center">
            To-Do List WOW
          </h1>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-xl">
              Plan less, do more.
            </h1>
            <p className="mt-4 text-lg text-zinc-400">
              Your life, your rules. Plan less, do more. Just add, check, and move on. To-Do List WOW makes staying productive feel easy.
            </p>

            {/*
            <a
              href="/example"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-white/[0.1] px-4 py-2 text-sm font-medium text-white hover:bg-white/[0.15] transition-colors"
            >
              View Data Fetching Example →
            </a>
            */}
          </div>
        </div>

        <div className="mt-16">
          <div className="overflow-hidden rounded-2xl bg-white/[0.05] shadow-xl ring-1 ring-white/[0.1]">
            <div className="p-6">
              <TodoList initialTodos={todos} />
            </div>
          </div>

          {/* Code Example*/}
          {/*
          <div className="mt-8 rounded-lg bg-zinc-900 p-4">
            <h3 className="text-sm font-medium text-zinc-400">How it works</h3>
            <pre className="mt-2 overflow-x-auto text-sm text-zinc-300">
              <code>{`// Server Action (app/actions/fetchData.ts)
"use server"

async function toggleTodo(id: number) {
  // Runs on the server
  // Safe to access database
  const todo = await db.todo.update(...)
  return todo
}`}</code>
            </pre>
          </div>
          */}

          {/* Resources */}
          {/*
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-white/[0.1] px-5 py-4 transition-colors hover:border-zinc-700 hover:bg-zinc-800/50"
            >
              <h2 className="mb-3 text-xl font-semibold text-white">
                Documentation{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="text-sm text-zinc-400">
                Learn more about Server Actions in the official Next.js
                documentation.
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-white/[0.1] px-5 py-4 transition-colors hover:border-zinc-700 hover:bg-zinc-800/50"
            >
              <h2 className="mb-3 text-xl font-semibold text-white">
                Examples{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="text-sm text-zinc-400">
                Discover more Next.js examples and starter templates.
              </p>
            </a>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
