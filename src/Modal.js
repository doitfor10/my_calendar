import React from 'react';
import './modal.css'
import { useDispatch} from "react-redux";
import { completeTodoFB,deleteTodoFB } from './redux/modules/todo';
const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
    const id = props.id;
    const dispatch = useDispatch();
    
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        {!props.do && <button className="check" onClick={() => {
                            dispatch(completeTodoFB(id));
                           
                           
                        }}> check </button> }
                        <button id={id} onClick={() => {
                            dispatch(deleteTodoFB(id));
                         }}>delete</button>
                        

                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal