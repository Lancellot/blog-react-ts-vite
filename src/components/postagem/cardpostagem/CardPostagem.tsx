import { Link } from 'react-router-dom'

function CardPostagem() {
    return (
        <article className="border border-slate-900 flex flex-col rounded overflow-hidden justify-between">
            
            <header className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                <img
                    src="https://i.imgur.com/pK6vSCy.png"
                    alt="Foto de perfil do usuário"
                    className="h-12 rounded-full"
                />
                <h3 className="text-lg font-bold uppercase">
                    Nome do Usuário
                </h3>
            </header>

            <section className="p-4 space-y-2">
                <h4 className="text-lg font-semibold uppercase">
                    Título
                </h4>

                <p>
                    Texto da postagem
                </p>

                <p>
                    <strong>Tema:</strong> Tema X
                </p>

                <p>
                    <strong>Data:</strong>{' '}
                    <time dateTime="2026-01-21">
                        21/01/2026
                    </time>
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
