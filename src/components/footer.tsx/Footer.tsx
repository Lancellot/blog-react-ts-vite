function Footer() {
    const data = new Date().getFullYear();
    
    return (
        <>
            <footer className=" flex justify-center bg-indigo-900 text-white">
                <section>
                    <p>© {data} Blog Pessoal. Todos os direitos reservados.</p>
                    <p>Acesse nossas redes sociais</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </section>
            </footer>
        </>
    );
}
export default Footer;