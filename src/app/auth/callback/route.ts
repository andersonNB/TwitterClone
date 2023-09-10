// Así se crea un endpoint en Nextjs
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

// Esto es una opción de Next.js, para evitar que cachee de forma
// estática la ruta, y que siempre se ejecuta en el servidor
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  // creamos una instancia de URL y obtenemos el code la url
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code !== null) {
    // Cliente de supabase
    const supabase = createRouteHandlerClient({ cookies });
    // usando el código que le hemos pasado por url
    // nos devuelve la sesión del usuario
    await supabase.auth.exchangeCodeForSession(code);
  }
  // Cuando se haga la redirección lo devolvera a donde estaba inicialmente
  return NextResponse.redirect(requestUrl.origin);
}
