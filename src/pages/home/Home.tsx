import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";

function Home() {
    return (
    <>
        <main className="bg-indigo-900 flex justify-center">
            <section className="container grid grid-cols-2 text-white">
                <article className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>

                    <p className="text-xl">Expresse aqui seus pensamentos e ideias.</p>

                    <button className="bg-white text-indigo-900 px-4 py-2 rounded hover:bg-indigo-800 hover:text-white transition-colors">
                        Nova Postagem
                    </button>
                </article>

                <figure className="flex justify-center">
                    <img 
                        src="https://i.imgur.com/fyfri1v.png" 
                        alt="Imagem Página Inicial"
                        className="w-2/3"
                    />
                </figure>
            </section>
        </main>

        <ListaPostagens />
    </>
    );
}
export default Home;