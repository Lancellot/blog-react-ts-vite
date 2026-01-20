import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


function Navbar() {

    const navigate = useNavigate();

    const { handleLogout, isAuthenticated } = useContext(AuthContext);

    function logout() {

        handleLogout();
        alert('Usuário deslogado com sucesso');
        navigate('/')
    };

    return (
        <nav className="w-full flex justify-center py-4
            bg-indigo-900 text-white">
            <section className="container flex justify-between text-lg mx-8">
                <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>

                <ul className="flex gap-4">
                    {isAuthenticated && (
                    <li>Postagem</li>
                    )}
                    {isAuthenticated && (
                    <li><Link to='/temas' className='hover:underline'>Temas</Link></li>
                    )}
                    {isAuthenticated && (
                    <li>Cadastrar Tema</li>
                    )}
                    {isAuthenticated && (
                    <li>Perfil</li>
                    )}
                    {isAuthenticated && (
                        <li><Link to="/" onClick={logout} className="hover:underline">Sair</Link></li>
                    )}
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </nav>
    );
}
export default Navbar;