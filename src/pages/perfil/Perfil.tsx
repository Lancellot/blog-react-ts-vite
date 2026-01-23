import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"

function Perfil() {
	const navigate = useNavigate()
	const { usuario } = useContext(AuthContext)

	useEffect(() => {
		if (!usuario.token) {
			alert("Você precisa estar logado")
			navigate("/")
		}
	}, [usuario.token, navigate])

	return (
		<main className="flex justify-center mx-4">
			<section className="container mx-auto my-4 rounded-2xl overflow-hidden">
				
				<header>
					<img
						className="w-full h-72 object-cover border-b-8 border-white"
						src="https://i.imgur.com/ZZFAmzo.jpg"
						alt="Capa do perfil"
					/>
				</header>

				<figure className="flex justify-center">
					<img
						className="rounded-full w-56 mt-[-8rem] border-8 border-white relative z-10"
						src={usuario.foto}
						alt={`Foto de perfil de ${usuario.nome}`}
					/>
				</figure>

				<article
					className="relative mt-[-6rem] h-72 flex flex-col 
					bg-sky-500 text-white text-2xl items-center justify-center"
				>
					<p>
						<strong>Nome:</strong> {usuario.nome}
					</p>
					<p>
						<strong>Email:</strong> {usuario.email}
					</p>
				</article>

			</section>
		</main>
	)
}

export default Perfil
