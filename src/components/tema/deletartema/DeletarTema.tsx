import { useNavigate, useParams } from "react-router-dom";
import type Tema from "../../../models/Tema";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('401') || error.toString().includes('403')) {
                handleLogout();
            }
        }
    };

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate('/temas');
    }

    async function deletarTema() {

        setIsLoading(true);

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            ToastAlerta('Tema deletado com sucesso', 'sucesso');

        } catch (error: any) {
            if (error.toString().includes('401') || error.toString().includes('403')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao deletar tema', 'erro');
            }
        }
        setIsLoading(false);
        retornar();
    }

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

                <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>

                <footer className="flex">
                    <button
                        className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                        onClick={retornar}>
                        Cancelar
                    </button>
                    <button
                        className="text-slate-100 bg-indigo-400 hover:bg-indigo-600 w-full flex items-center justify-center"
                        onClick={deletarTema}>
                        {isLoading ? <ClipLoader size={24} color="#ffffff" /> : 
                            <span>Confirmar Exclusão</span>
                        }
                    </button>
                </footer>
            </article>
        </section>
    );
};
export default DeletarTema;