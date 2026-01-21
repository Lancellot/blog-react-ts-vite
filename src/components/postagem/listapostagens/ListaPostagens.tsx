import CardPostagem from "../cardpostagem/CardPostagem";

function ListaPostagens() {
    return (
        <main className="flex justify-center w-full my-4">
            <section className="container mx-auto px-2">
                
                <section
                    aria-label="Lista de postagens"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4"
                >
                    <CardPostagem />
                </section>

            </section>
        </main>
    );
}

export default ListaPostagens;