import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// import { AuthButton } from "./components/AuthButtonClient";
import { AuthButtonServer } from "./components/AuthButtonServer";
import { redirect } from "next/navigation";
// para conectarnos a Supabase, primero debemo utilizar el createServerComponentClient y las cookies
// por que tendremos un cliente desde supabase a un componente creado en el servidor con Nextjs
// ademas las cookies tienen la info que supabse necesita para saber si un usuario esta logeado o no
export default async function Home() {
	const supabase = createServerComponentClient({ cookies });
	const { data: { session } } = await supabase.auth.getSession()
	if (session === null) {
		redirect('/login')
	}

	const { data: posts } = await
		supabase.from('posts').select('*, users(*)')

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Project de Twitter
			<AuthButtonServer />
			<pre>
				{
					JSON.stringify(posts, null, 2)
				}

			</pre>
		</main>
	);
}
