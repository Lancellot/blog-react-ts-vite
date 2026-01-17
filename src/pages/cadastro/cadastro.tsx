import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom"
import { cadastrarUsuario } from "../../services/Service";
import type Usuario from "../../models/Usuario";
import { ClipLoader } from "react-spinners";

function Cadastro() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] =  useState(false);

    const [confirmaSenha, setConfirmaSenha] = useState<string>("");

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        email: "",
        foto: "",
        senha: ""
    });

    useEffect(() => {
        if (usuario.id !== 0) {
            retorno();
        }
    }, [usuario]);

    function retorno() {
        navigate("/login");
    };

    function atualizaEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value);
    };

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

            setIsLoading(true);

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
                alert('Usuário cadastrado com sucesso!');
            } catch (error) {
                alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
            }
        }else {
            alert('Dados inconsistentes. Verifique as informações de cadastro.');
            setUsuario({ ...usuario, senha: "" });
            setConfirmaSenha("");
        }

        setIsLoading(false);
    };
    
    return (
        <main>
            <div className="grid grid-cols-1 lg:grid-cols-2  
            place-items-center font-bold ">
                <aside
                    className="bg-[url('https://static.vecteezy.com/system/resources/previews/001/072/376/non_2x/network-connections-on-white-background-vector.jpg')] lg:block hidden bg-no-repeat 
                    w-full min-h-[80vh] bg-cover bg-center"
                    role="img"
                    aria-label="Imagem decorativa de fundo"
                ></aside>

                <section className='flex justify-center items-center flex-col w-2/3 gap-3'>
                    <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>

                    <form className='flex flex-col w-full gap-3' aria-label="Formulário de cadastro"
                        onSubmit={cadastrarNovoUsuario}>
                        <div className="flex flex-col w-full">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={usuario.nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaEstado(e)}
                                placeholder="Nome"
                                className="border-2 border-slate-700 rounded p-2"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={usuario.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaEstado(e)}
                                placeholder="E-mail"
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
                                value={usuario.foto}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaEstado(e)}
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
                                value={usuario.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaEstado(e)}
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
                                value={confirmaSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)}
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
                                onClick={retorno}
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
                                {isLoading ?
                                    <ClipLoader
                                    color="#ffffff"
                                    size={24}
                                    /> :
                                    <span>Cadastrar</span>
                                }
                            </button>
                        </footer>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Cadastro