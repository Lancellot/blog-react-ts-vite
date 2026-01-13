function Home() {
    return (
        <main style={{
            background: "#312e81",
            display: "flex",
            justifyContent: "center"
        }}>
            <section style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                color: "white",
                width: "100%",
                maxWidth: "1280px"
            }}>
                <article style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem 0",
                }}>
                    <h2 style={{
                        fontSize: "3rem",
                        fontWeight: "bold"
                    }}>Seja Bem Vinde!</h2>

                    <p style={{
                        fontSize: "1.25rem"
                    }}>Expresse aqui seus pensamentos e ideias.</p>

                    <button style={{
                        borderRadius: "0.5rem",
                        padding: "0.5rem 1rem",
                        color: "white",
                        backgroundColor: "transparent",
                        border: "2px solid white"
                    }}>Nova Postagem</button>
                </article>

                <figure style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <img 
                        src="https://i.imgur.com/fyfri1v.png" 
                        alt="Imagem Página Inicial"
                        style={{width: "66%"}} />
                </figure>
            </section>
        </main>
    )
}
export default Home