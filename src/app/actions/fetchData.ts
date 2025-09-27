"use server";

import { Logger } from "@/utils/logger";

const logger = new Logger("ServerAction:Todo");

export type Todo = {
  id: number;
  content: string;
  completed: boolean;
};

export async function fetchTodos() {
  try {
    logger.info("fetchTodos - Started fetching todos");

    const baseUrl =
      typeof window === "undefined"
        ? process.env.NEXTAUTH_URL ||
          (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
        : "";
    const url = `${baseUrl}/api/auth/todo`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      logger.warn("fetchTodos - Failed to fetch todos from API");
      return [];
    }

    const todos = await res.json();

    logger.info("fetchTodos - Successfully fetched todos", {
      count: todos.length,
    });

    return todos;
  } catch (error) {
    logger.error("fetchTodos - Failed to fetch todos", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    throw error;
  }
}

export async function toggleTodo(id: number) {
  try {
    logger.info("toggleTodo - Started toggling todo", { id });

    const baseUrl =
      process.env.NEXTAUTH_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

    const res = await fetch(`${baseUrl}/api/auth/todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      logger.warn("toggleTodo - Failed to toggle todo in API", { id });
      throw new Error(`Failed to toggle todo with id ${id}`);
    }

    const todos = await res.json();

    logger.info("toggleTodo - Successfully toggled todo", {
      id,
    });

    return todos;
  } catch (error) {
    logger.error("toggleTodo - Failed to toggle todo", {
      id,
      error: error instanceof Error ? error.message : "Unknown error",
    });
    throw error;
  }
}

export async function createTodo(content: string) {
  try {
    logger.info("createTodo - Started creating todo", { content });

    if (!content.trim()) {
      logger.warn("createTodo - Empty title provided");
      throw new Error("Todo title cannot be empty");
    }

    const baseUrl =
      process.env.NEXTAUTH_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

    const res = await fetch(`${baseUrl}/api/auth/todo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    if (!res.ok) {
      logger.warn("createTodo - Failed to create todo in API");
      throw new Error("Failed to create todo");
    }

    const todos = await res.json();

    logger.info("createTodo - Successfully created todo");

    return todos;
  } catch (error) {
    logger.error("createTodo - Failed to create todo", {
      content,
      error: error instanceof Error ? error.message : "Unknown error",
    });
    throw error;
  }
}
