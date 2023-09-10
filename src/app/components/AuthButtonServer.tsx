import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButton } from "./AuthButtonClient";

export async function AuthButtonServer() {

    // validamos la sesión en el servidor
    const supabase = createServerComponentClient({ cookies })

    const { data: { session } } = await supabase.auth.getSession()


    return <AuthButton session={session} />
}