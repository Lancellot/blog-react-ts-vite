import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
    const data = new Date().getFullYear();
    
    return (
        <>
            <footer className=" flex justify-center bg-indigo-900 text-white">
                <section className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        © {data} Blog Pessoal. Todos os direitos reservados.
                    </p>
                    <p className="text-xl">Acesse nossas redes sociais</p>
                    <ul className="flex gap-2">
                        <li><GithubLogoIcon size={48} weight="bold"/></li>
                        <li><InstagramLogoIcon size={48} weight="bold"/></li>
                        <li><LinkedinLogoIcon size={48} weight="bold"/></li>
                    </ul>
                </section>
            </footer>
        </>
    );
}
export default Footer;