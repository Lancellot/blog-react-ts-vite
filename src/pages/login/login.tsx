import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { ClipLoader } from "react-spinners";

function Login() {

  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState(
    {} as UsuarioLogin
  );

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
  };

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-2  
            place-items-center font-bold">
        <form className="flex justify-center items-center flex-col w-2/3 gap-3"
          onSubmit={login}>
          <h2 className="text-slate-900 text-5xl">Entrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario">E-mail</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={usuarioLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atulizarEstado(e)}
              placeholder="E-mail"
              className="border-2 border-slate-700 rounded p-2"
              required />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atulizarEstado(e)}
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              required />
          </div>

          <button
            type="submit"
            className="rounded bg-indigo-400 flex justify-center  hover:bg-indigo-900 text-white w-1/2 py-2">
            {isLoading ?
              <ClipLoader
                color="#ffffff"
                size={20}
              /> :
              <span>Entrar</span>
            }
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta? {' '}
            <Link to="/cadastro" className="text-indigo-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>

        <aside className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat 
                    w-full min-h-[80vh] bg-cover bg-center">

        </aside>
      </section>
    </main>
  );
}
export default Login;