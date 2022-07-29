import { ContainerModal } from "./styles"
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {useEffect, useRef} from 'react'

function Modal({setModal}){
    const modalRef = useRef();

    useEffect(() => {
        function handleOutClick(event) {
        
        if (!modalRef.current.contains(event.target)) {
            setModal(false);
        }
        }

        document.addEventListener('mousedown', handleOutClick);
        return () => {
            document.removeEventListener('mousedown', handleOutClick);
        }
    }, [])

    return(
        <ContainerModal>
            <div className="modal-box" ref={modalRef}>
                    <p>Não pode adicionar o mesmo produto</p>
                    <button className="button-close" onClick={() => setModal(false)}><AiOutlineCloseCircle size={25}/></button>    
            </div> 
        </ContainerModal>
        
    )
}

export default Modal