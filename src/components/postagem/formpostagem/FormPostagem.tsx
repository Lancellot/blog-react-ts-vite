function FormPostagem() {
    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">Cadastrar Postagem</h1>

            <form className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Título da Postagem</label>
                    <input
                        type="text"
                        placeholder="Título"
                        id="titulo"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="texto">Texto da Postagem</label>
                    <input
                        type="text"
                        placeholder="Texto"
                        id="texto"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="tema">Tema da Postagem</label>
                    <select
                        id="tema"
                        name="tema"
                        defaultValue=""
                        className="border p-2 border-slate-800 rounded"
                    >
                        <option value="" disabled>
                            Selecione um Tema
                        </option>
                        <option value="tema1">Tema 1</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormPostagem;
