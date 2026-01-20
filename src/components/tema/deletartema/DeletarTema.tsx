function DeletarTema() {
    return (
        <section className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar Tema</h1>
            <p className="text-center font-semibold mb-4">
                Tem certeza que deseja deletar este tema?
            </p>
            <article className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
                    Tema
                </header>

                <p className="p-8 text-3xl bg-slate-200 h-full">Tema</p>

                <footer className="flex">
                    <button
                    className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2">
                        Cancelar
                    </button>
                    <button
                        className="text-slate-100 bg-indigo-400 hover:bg-indigo-600 w-full flex items-center justify-center">
                        Confirmar Exclusão    
                    </button>
                </footer>
            </article>
        </section>
    );
};
export default DeletarTema;