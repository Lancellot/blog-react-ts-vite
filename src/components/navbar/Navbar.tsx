function Navbar() {
    return (
        <nav className="w-full flex justify-center py-4
            bg-indigo-900 text-white">
            <section className="container flex justify-between text-lg mx-8">
                Blog Pessoal

                <ul className="flex gap-4">
                    <li>Postagem</li>
                    <li>Tema</li>
                    <li>Cadastrar Tema</li>
                    <li>Perfil</li>
                    <li>Sair</li>
                </ul>
            </section>
        </nav>
    );
}
export default Navbar;