import { AuthButtonServer } from "@/app/components/AuthButtonServer";

// Creando una ruta protegida
export default function Login() {
    return (
        <section className="grid place-content-center min-h-screen" >
            <h1 className="text-xl font-bold mb-4" >Inicia sesión en DevTer</h1>
            <AuthButtonServer />
        </section>
    )
}