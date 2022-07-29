import { ContainerModal } from "./styles"

function Modal({modal, setModal}){
    return(
        <>
            {
                modal && <ContainerModal>
                    <div>
                        <p>Não pode adicionar o mesmo produto</p>
                        <button onClick={() => setModal(!modal)}>X</button>
                    </div> 
                </ContainerModal>
            }
        </>
    )
}

export default Modal