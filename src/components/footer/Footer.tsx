import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
    const data = new Date().getFullYear();
    
    return (
        <>
            <footer className="relative flex justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
                {/* Efeito de brilho animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                
                <section className="container relative z-10 flex flex-col items-center py-6 gap-3">
                    {/* Linha decorativa superior */}
                    <div className="w-20 h-1 bg-white/40 rounded-full mb-2"></div>
                    
                    <p className="text-sm font-bold text-center drop-shadow-lg">
                        © {data} Blog Pessoal. Todos os direitos reservados.
                    </p>
                    
                    <p className="text-sm font-medium opacity-90">
                        Conecte-se conosco
                    </p>
                    
                    <ul className="flex gap-4">
                        <li>
                            <a 
                                href="https://github.com/Lancellot" 
                                target="_blank" 
                                rel="noreferrer"
                                className="block p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                                aria-label="GitHub"
                            >
                                <GithubLogoIcon 
                                    size={28} 
                                    weight="bold"
                                    className="group-hover:rotate-12 transition-transform duration-300"
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.instagram.com/assis.p.n" 
                                target="_blank" 
                                rel="noreferrer"
                                className="block p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                                aria-label="Instagram"
                            >
                                <InstagramLogoIcon 
                                    size={28} 
                                    weight="bold"
                                    className="group-hover:rotate-12 transition-transform duration-300"
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/assispiresneto/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="block p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                                aria-label="LinkedIn"
                            >
                                <LinkedinLogoIcon 
                                    size={28} 
                                    weight="bold"
                                    className="group-hover:rotate-12 transition-transform duration-300"
                                />
                            </a>
                        </li>
                    </ul>

                    {/* Linha decorativa inferior */}
                    <div className="w-32 h-0.5 bg-white/30 rounded-full mt-2"></div>
                    
                    <p className="text-xs opacity-75 text-center">
                        Feito com ❤️ usando React + Vite + Tailwind
                    </p>
                </section>

                {/* Partículas decorativas */}
                <div className="absolute top-2 left-10 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute top-4 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-pulse delay-100"></div>
                <div className="absolute bottom-3 left-1/4 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-200"></div>
                <div className="absolute bottom-5 right-1/3 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-300"></div>
            </footer>

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
        </>
    );
}

export default Footer;