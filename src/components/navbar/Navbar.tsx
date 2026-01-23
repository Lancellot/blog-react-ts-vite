import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, type ReactNode } from "react";


function Navbar() {

    const navigate = useNavigate();

    const { handleLogout, isAuthenticated } = useContext(AuthContext);

    function logout() {

        handleLogout();
        alert('Usuário deslogado com sucesso');
        navigate('/')
    };

    let component: ReactNode;

    if (isAuthenticated) {

        component = (

            <nav className="w-full flex justify-center py-4
            bg-indigo-900 text-white">
                <section className="container flex justify-between text-lg mx-8">
                    <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>

                    <ul className="flex gap-4">

                        <li><Link to='/postagens' className='hover:underline'>Postagens</Link></li>


                        <li><Link to='/temas' className='hover:underline'>Temas</Link></li>


                        <li><Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link></li>


                        <li><Link to='/perfil' className='hover:underline'>Perfil</Link></li>

                        <li><Link to="/" onClick={logout} className="hover:underline">Sair</Link></li>


                    </ul>
                </section>
            </nav>

        )
    }

    return (
        <>
            {component}
        </>
    );
}
export default Navbar