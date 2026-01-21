function DeletarPostagem() {
    return (
        <main className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar Postagem</h1>
            <p className="text-center font-semibold mb-4">Tem certeza que deseja deletar esta postagem?</p>

            <section className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
                    Postagem
                </header>

                <div className="p-4">
                    <p className="text-xl h-full"><strong>Título:</strong> Titulo da postagem</p>
                    <p><strong>Texto:</strong> Texto da postagem</p>
                </div>

                <footer className="flex gap-2">
                    <button className=" text-slate-100 w-full py-2 rounded bg-gray-400 hover:bg-gray-700 ">
                        Cancelar
                    </button>
                    <button className="text-slate-100 w-full py-2 rounded bg-red-400 hover:bg-red-700 flex items-center justify-center">
                        Deletar
                    </button>
                </footer>
            </section>
        </main>
    );
}

export default DeletarPostagem;
