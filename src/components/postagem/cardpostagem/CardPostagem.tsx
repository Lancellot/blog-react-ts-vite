import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem';

interface CardPostagemProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagemProps) {
    return (
        <article className="border border-slate-900 flex flex-col rounded overflow-hidden justify-between">
            
            <header className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                <img
                    src={postagem.usuario?.foto}
                    alt={`Foto de perfil de ${postagem.usuario?.nome}`}
                    className="h-12 rounded-full"
                />
                <h3 className="text-lg font-bold uppercase">
                    {postagem.usuario?.nome}
                </h3>
            </header>

            <section className="p-4">
                <h4 className="text-lg font-semibold uppercase">
                    {postagem.titulo}
                </h4>

                <p>
                    {postagem.texto}
                </p>

                <p>
                    Tema: {postagem.tema?.descricao}
                </p>

                <p>Data: {new Intl.DateTimeFormat("pt-BR", {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}
                </p>
            </section>

            <footer className="flex">
                <Link
                    to=""
                    className="w-full text-white bg-indigo-400 hover:bg-indigo-800 
                            flex items-center justify-center py-2"
                >
                    Editar
                </Link>

                <Link
                    to=""
                    className="w-full text-white bg-red-400 hover:bg-red-700 
                            flex items-center justify-center py-2"
                >
                    Deletar
                </Link>
            </footer>

        </article>
    )
}

export default CardPostagem;