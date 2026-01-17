import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { ClipLoader } from "react-spinners";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState({} as UsuarioLogin);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atulizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <main className="min-h-[80vh] overflow-hidden">
      <section className="flex h-[80vh] relative">
        {/* Sidebar do Formulário - Animada */}
        <aside className="w-full lg:w-96 bg-white shadow-2xl flex items-center justify-center p-8 overflow-y-auto relative z-20 slide-in-left">
          <form className="flex flex-col w-full max-w-md gap-6" onSubmit={login}>
            <div className="mb-4 fade-in-1">
              <h2 className="text-slate-900 text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Entrar
              </h2>
              <p className="text-slate-600 text-sm">Acesse sua conta</p>
            </div>

            <div className="flex flex-col w-full gap-2 fade-in-2">
              <label htmlFor="usuario" className="text-slate-700 font-semibold">
                E-mail
              </label>
              <input
                type="email"
                id="usuario"
                name="email"
                value={usuarioLogin.email}
                onChange={atulizarEstado}
                placeholder="seu@email.com"
                className="border-2 border-slate-300 rounded-lg p-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300 hover:border-indigo-400"
                required 
              />
            </div>

            <div className="flex flex-col w-full gap-2 fade-in-3">
              <label htmlFor="senha" className="text-slate-700 font-semibold">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={usuarioLogin.senha}
                onChange={atulizarEstado}
                placeholder="••••••••"
                className="border-2 border-slate-300 rounded-lg p-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300 hover:border-indigo-400"
                required 
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white w-full py-3 font-semibold transition-all duration-300 flex justify-center items-center mt-2 shadow-lg hover:shadow-xl hover:scale-105 fade-in-4"
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={20} />
              ) : (
                <span>Entrar</span>
              )}
            </button>

            <div className="relative my-4 fade-in-5">
              <hr className="border-slate-300" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-slate-500 text-sm">
                ou
              </span>
            </div>

            <p className="text-center text-slate-600 fade-in-6">
              Ainda não tem uma conta?{' '}
              <Link 
                to="/cadastro" 
                className="text-indigo-600 hover:text-indigo-800 font-semibold hover:underline transition-all duration-200"
              >
                Cadastre-se
              </Link>
            </p>
          </form>
        </aside>

        {/* Área da Imagem/Conteúdo - Animada */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
          {/* Partículas animadas de fundo */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 float-animation"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 float-animation-delay-1"></div>
            <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 float-animation-delay-2"></div>
          </div>

          <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/001/072/376/non_2x/network-connections-on-white-background-vector.jpg')] bg-cover bg-center opacity-10 animate-pulse"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center w-full text-white p-12">
            <h1 className="text-6xl font-bold mb-6 text-center fade-in-up-1">
              Bem-vindo de volta!
            </h1>
            <p className="text-xl text-center max-w-md opacity-90 fade-in-up-2">
              Conecte-se com sua comunidade e compartilhe suas ideias
            </p>
            
            <div className="mt-12 flex gap-8 fade-in-up-3">
              <div className="w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-300 bounce-animation">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                </svg>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-300 bounce-animation-delay-1">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-300 bounce-animation-delay-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;