import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormPostagem from "../formpostagem/FormPostagem";

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button className="bg-white text-indigo-900 px-4 py-2 rounded hover:bg-indigo-800 hover:text-white transition-colors">
                        Nova Postagem
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: "1rem",
                    paddingBottom: "2rem",
                }}
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;
