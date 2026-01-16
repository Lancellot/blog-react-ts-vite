
function Cadastro() {


    return (
        <main>
            <div className="grid grid-cols-1 lg:grid-cols-2  
            place-items-center font-bold ">
                <aside
                    className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat 
                    w-full min-h-[80vh] bg-cover bg-center"
                    role="img"
                    aria-label="Imagem decorativa de fundo"
                ></aside>

                <section className='flex justify-center items-center flex-col w-2/3 gap-3'>
                    <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>

                    <form className='flex flex-col w-full gap-3' aria-label="Formulário de cadastro">
                        <div className="flex flex-col w-full">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"

                                placeholder="Nome"
                                className="border-2 border-slate-700 rounded p-2"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="email">Usuário</label>
                            <input
                                type="text"
                                id="email"
                                name="email"

                                placeholder="Usuário"
                                className="border-2 border-slate-700 rounded p-2"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="foto">Foto</label>
                            <input
                                type="url"
                                id="foto"
                                name="foto"

                                placeholder="URL da foto"
                                className="border-2 border-slate-700 rounded p-2"
                                aria-describedby="foto-help"
                            />
                            <small id="foto-help" className="text-slate-600 text-sm mt-1">
                                Insira o link da sua foto de perfil
                            </small>
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"

                                placeholder="Senha"
                                className="border-2 border-slate-700 rounded p-2"
                                required
                                aria-required="true"
                                minLength={6}
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="confirmarSenha">Confirmar Senha</label>
                            <input
                                type="password"
                                id="confirmarSenha"
                                name="confirmarSenha"

                                placeholder="Confirmar Senha"
                                className="border-2 border-slate-700 rounded p-2"
                                required
                                aria-required="true"
                                minLength={6}
                            />
                        </div>

                        <footer className="flex justify-around w-full gap-8 mt-4">
                            <button
                                type='reset'
                                className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2'
                                aria-label="Cancelar cadastro"

                            >
                                Cancelar
                            </button>
                            <button
                                type='submit'
                                className='rounded text-white bg-indigo-400 
                            hover:bg-indigo-900 w-1/2 py-2
                                flex justify-center'
                                aria-label="Enviar formulário de cadastro"
                            >
                                Cadastrar
                            </button>
                        </footer>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Cadastro