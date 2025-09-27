import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    const trimmedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({ where: { email: trimmedEmail } });
    if (!user) {
      return NextResponse.json({ error: "Email is not registered" }, { status: 404 });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    return NextResponse.json({ id: user.id, email: user.email }); 
    }
      catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
} 

