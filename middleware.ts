// middleware.ts (na raiz do projeto)
import { NextRequest, NextResponse } from "next/server";
import aj from "@/lib/arcjet";

export async function middleware(request: NextRequest) {
  const decision = await aj.protect(request);
  if (decision.isDenied()) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

// Opcional: define rotas a serem protegidas
export const config = {
  matcher: ["/api/:path*", "/login", "/cadastro"], // rotas a proteger
};
