import { useNavigate, useParams } from "react-router-dom";
import type Postagem from "../../../models/Postagem";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";

function DeletarPostagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

        async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Postagem apagada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                alert('Erro ao deletar a postagem.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/postagens")
    }

    return (
        <main className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar Postagem</h1>
            <p className="text-center font-semibold mb-4">Tem certeza que deseja deletar esta postagem?</p>

            <section className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
                    Postagem
                </header>

                <div className="p-4">
                    <p className="text-xl h-full"><strong>Título:</strong>{postagem.titulo}</p>
                    <p><strong>Texto:</strong>{postagem.texto}</p>
                </div>

                <footer className="flex gap-2">
                    <button className=" text-slate-100 w-full py-2 rounded bg-gray-400 hover:bg-gray-700 "
                    onClick={retornar}
                    >
                        Cancelar
                    </button>
                    <button className="text-slate-100 w-full py-2 rounded bg-red-400 hover:bg-red-700 flex items-center justify-center"
                    onClick={deletarPostagem}
                    >
                        {isLoading ? 
                        <ClipLoader
                            color="#ffffff"
                            size={24}
                        />:
                        <span>Deletar</span>
                        }
                    </button>
                </footer>
            </section>
        </main>
    );
}

export default DeletarPostagem;