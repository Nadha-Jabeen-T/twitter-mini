import classes from "./Modal.module.css";
import { useNavigate} from "react-router-dom";

function Modal(props) {
    const navigate = useNavigate();
    function closeHandler() {
        navigate('..');
    }
    return(
        <>
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open className={classes.modal}>
                {props.children}
            </dialog>
        </>
    );
}
export default Modal;

/*
 Instead of passing props, and using props.children, props.onClose => use destructuring objects {children,onClose} and use directly
*/