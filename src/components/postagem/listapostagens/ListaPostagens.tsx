import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import CardPostagem from "../cardpostagem/CardPostagem";

function ListaPostagens() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (!token) {
            alert("Você precisa estar logado!");
            navigate("/");
        }
    }, [token, navigate]);

    useEffect(() => {
        buscarPostagens();
    }, []);

    async function buscarPostagens() {
        try {
            setIsLoading(true);
            await buscar("/postagens", setPostagens, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="flex justify-center w-full my-4">
            <section className="container flex flex-col">

                {isLoading && (
                    <div
                        className="flex justify-center w-full my-8"
                        role="status"
                        aria-label="Carregando postagens"
                    >
                        <SyncLoader color="#312e81" size={32} />
                    </div>
                )}

                {!isLoading && postagens.length === 0 && (
                    <p className="text-3xl text-center my-8">
                        Nenhuma postagem foi encontrada.
                    </p>
                )}

                {!isLoading && postagens.length > 0 && (
                    <ul
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        aria-label="Lista de postagens"
                    >
                        {postagens.map((postagem) => (
                            <li key={postagem.id}>
                                <CardPostagem postagem={postagem} />
                            </li>
                        ))}
                    </ul>
                )}

            </section>
        </main>
    );
}

export default ListaPostagens;
