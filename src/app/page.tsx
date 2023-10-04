import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// import { AuthButton } from "./components/AuthButtonClient";
import { AuthButtonServer } from "./components/AuthButtonServer";
import { redirect } from "next/navigation";
import { PostLists } from "./components/PostsList";
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
		// nombreobjet:tablaSupabase
		supabase.from('posts').select('*, user:users(*)')

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<section className="max-w-[800px] mx-auto border-l border-r border-white/20 min-h-screen" >
				<AuthButtonServer />
				<PostLists posts={posts} />
			</section>
			Project de Twitter
		</main>
	);
}
