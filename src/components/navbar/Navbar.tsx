import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {
    const navigate = useNavigate();
    const { handleLogout, isAuthenticated } = useContext(AuthContext);
    
    function logout() {
        handleLogout();
        alert('Usuário deslogado com sucesso');
        navigate('/');
    }
    
    return (
        <nav className="relative w-full flex justify-center py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl overflow-hidden">
            {/* Efeito de brilho animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            
            {/* Partículas decorativas */}
            <div className="absolute top-2 left-20 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute top-3 right-32 w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-pulse delay-100"></div>
            <div className="absolute bottom-2 left-1/3 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-200"></div>
            <div className="absolute bottom-3 right-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-300"></div>
            
            <section className="container relative z-10 flex justify-between items-center text-lg mx-8">
                <Link 
                    to="/home" 
                    className="text-2xl font-bold hover:scale-110 transition-all duration-300 drop-shadow-lg flex items-center gap-2 group"
                >
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                        Blog Pessoal
                    </span>
                </Link>
                
                <ul className="flex gap-2">
                    {isAuthenticated ? (
                        <>
                            <li>
                                <button className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                                    Postagem
                                </button>
                            </li>
                            <li>
                                <button className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                                    Tema
                                </button>
                            </li>
                            <li>
                                <button className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                                    Cadastrar Tema
                                </button>
                            </li>
                            <li>
                                <button className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                                    Perfil
                                </button>
                            </li>
                            <li>
                                <Link 
                                    to="/" 
                                    onClick={logout} 
                                    className="inline-block px-4 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-red-500/80 hover:scale-105 transition-all duration-300 font-semibold"
                                >
                                    Sair
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link 
                                    to="/cadastro" 
                                    className="inline-block px-4 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Cadastrar
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/login" 
                                    className="inline-block px-4 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-105 transition-all duration-300 font-semibold"
                                >
                                    Login
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </section>

            <style>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                
                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }

                .delay-100 {
                    animation-delay: 0.1s;
                }
                
                .delay-200 {
                    animation-delay: 0.2s;
                }
                
                .delay-300 {
                    animation-delay: 0.3s;
                }
            `}</style>
        </nav>
    );
}

export default Navbar;