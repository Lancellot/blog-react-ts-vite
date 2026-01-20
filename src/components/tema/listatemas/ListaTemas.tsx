import CardTema from "../cardtema/CardTema";

function ListaTemas() {
    return (
        <>
            <main className="flex justify-center w-full my-4">
                <section className="container flex flex-col">
                    <ul>
                        <li className="grid grid-cols-1 md:grid-cols-2 
                                lg:grid-cols-3 gap-8">
                            <CardTema />
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
};
export default ListaTemas;