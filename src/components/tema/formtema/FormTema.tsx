function FormTema() {
    return (
        <section className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8"></h1>
            <form className="w-1/2 flex flex-col gap-4 mb-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do Tema</label>
                    <input 
                    type="text" 
                    name="descricao"
                    placeholder="Digite a descrição do tema"
                    className="border-2 border-slate-700 rounded p-2"
                    required
                    />
                </div>

                <button  className="rounded text-slate-100 bg-indigo-400 
                            hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
            type="submit">
                Cadastrar
            </button>
            </form>
        </section>
    );
};
export default FormTema;