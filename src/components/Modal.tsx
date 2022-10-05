import React, { useCallback, useRef } from 'react';
import useEffectAfterMount from '../react-hooks/useEffectAfterMount';
import { selectIsToggle, selectModalImage } from '../redux/selectors/modalSelectors';
import { useAppSelector } from '../redux/store';
import './loading.scss';

function Modal() {
    const toggle = useAppSelector(selectIsToggle);
    const image = useAppSelector(selectModalImage);
    const button = useRef<HTMLButtonElement>(null);

    const triggerButton = useCallback(() => {
        if (button.current) {
            button.current.click();
        }
    }, []);

    useEffectAfterMount(() => {
        if (image) {
            triggerButton();
        }
    }, [toggle, image]);

    return (
        <>
            <button ref={button} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
                No display button
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body p-0 d-flex justify-content-center align-items-center border-0">
                            <img src={image} className="img-fluid" alt={image} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;