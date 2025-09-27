
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { TodoList } from "../components/TodoList";
import { fetchTodos } from "../actions/fetchData";
import { signOut } from "next-auth/react";
import { LogoutButton } from "./logout";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const todos = await fetchTodos();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold leading-relaxed bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-center text-transparent bg-clip-text animate-fade-in-up">
            To-Do List WOW
          </h1>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-xl animate-fade-in-up animation-delay-200">
              Plan less, do more.
            </h1>
            <p className="mt-4 text-lg text-zinc-400 animate-fade-in-up animation-delay-400">
              Your life, your rules. Plan less, do more. Just add, check, and move on. To-Do List WOW makes staying productive feel easy.
            </p>
            
          </div>
        </div>

        <div className="mt-16">
          <div className="overflow-hidden rounded-2xl bg-white/[0.05] shadow-xl ring-1 ring-white/[0.1]">
            <div className="p-6">
              <TodoList />
            </div>
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
