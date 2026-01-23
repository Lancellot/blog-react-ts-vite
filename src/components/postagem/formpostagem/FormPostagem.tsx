import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormPostagem() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [isLoading, setIsLoading] = useState(false);
    const [temas, setTemas] = useState<Tema[]>([]);
    const [tema, setTema] = useState<Tema>({ id: 0, descricao: "" });
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

    const carregandoTema = tema.descricao === "";

    useEffect(() => {
        if (!token) {
            ToastAlerta("Você precisa estar logado", "info");
            navigate("/");
        }
    }, [token, navigate]);

    useEffect(() => {
        buscarTemas();
        if (id) buscarPostagemPorId(id);
    }, [id]);

    useEffect(() => {
        setPostagem({ ...postagem, tema, usuario });
    }, [tema]);

    async function buscarPostagemPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("401")) handleLogout();
        }
    }

    async function buscarTemas() {
        try {
            await buscar("/temas", setTemas, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("401")) handleLogout();
        }
    }

    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("401")) handleLogout();
        }
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema,
            usuario,
        });
    }

    function retornar() {
        navigate("/postagens");
    }

    async function gerarNovaPostagem(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id) {
                await atualizar(`/postagens`, postagem, setPostagem, { headers: { Authorization: token },
                });
                ToastAlerta("Postagem atualizada com sucesso", "sucesso");
            } else {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: { Authorization: token },
                });
                ToastAlerta("Postagem cadastrada com sucesso", "sucesso");
            }
        } catch (error: any) {
            if (error.toString().includes("401")) handleLogout();
            else ToastAlerta(id ? "Erro ao atualizar a postagem" : "Erro ao cadastrar a postagem", "erro");
        } finally {
            setIsLoading(false);
            retornar();
        }
    }

    return (
        <main className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id ? "Editar Postagem" : "Cadastrar Postagem"}
            </h1>

            <form
                className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovaPostagem}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Título da Postagem</label>
                    <input
                        id="titulo"
                        type="text"
                        placeholder="Título"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={postagem.titulo || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="texto">Texto da Postagem</label>
                    <input
                        id="texto"
                        type="text"
                        placeholder="Texto"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={postagem.texto || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="tema">Tema da Postagem</label>
                    <select
                        id="tema"
                        name="tema"
                        defaultValue=""
                        className="border p-2 border-slate-800 rounded"
                        onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
                        aria-busy={carregandoTema}
                    >
                        <option value="" disabled>
                            Selecione um Tema
                        </option>
                        {temas.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.descricao}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                            text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
                    disabled={carregandoTema}
                >
                    {isLoading ? (
                        <ClipLoader color="#ffffff" size={24} />
                    ) : (
                        <span>{id ? "Atualizar" : "Cadastrar"}</span>
                    )}
                </button>
            </form>
        </main>
    );
}

export default FormPostagem;