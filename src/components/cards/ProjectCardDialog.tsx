import { RefObject, useState } from "react"
import Button from "../button/Button";

export default function ProjectCardDialog(props: { passedRef: RefObject<HTMLDialogElement>; }) {
    const [selectedIndex, setSelected] = useState(-1);
    const [isComplete, setIsComplete] = useState(false);


    const pledgeModalContent = [
        {
            "id": 0,
            "mainTitle": "Pledge with no reward",
            "pledge": -1,
            "totalLeft": -1,
            "content": "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        },
        {
            "id": 1,
            "mainTitle": "Bamboo Stand",
            "pledge": 25,
            "totalLeft": 101,
            "content": "You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        },
        {
            "id": 2,
            "mainTitle": "Black Edition Stand",
            "pledge": 75,
            "totalLeft": 64,
            "content": "You get a Black Special Edition computer stand and a personal thank you.You’ll be added to our Backer member list.Shipping is included.",
        },
        {
            "id": 3,
            "mainTitle": "Mahogany Special Edition",
            "pledge": 200,
            "totalLeft": 0,
            "content": "You get two Special Edition Mahogany stands, a Backer T - Shirt, and a personal thank you.You’ll be added to our Backer member list.Shipping is included.",
        }
    ];

    function cleanModal() {
        props.passedRef.current?.close();
        if (isComplete === true)
            setIsComplete(false)
    }

    function onChangeText() {

    }

    return (<dialog ref={props.passedRef} className="modal" data-completed-modal={isComplete ? "true" : "false"}>
        {isComplete ? <div className="completed-modal">
            <img src="/images/icon-check.svg" alt="check" />
            <h2>Thanks for your support!</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>

            <Button onClick={() => cleanModal()} disabled={false} content="Got it!" />
        </div> : <>
            <div className="modal-heading">
                <h2 >Back this project</h2>
                <button onClick={() => cleanModal()}>
                    <img src="/images/icon-close-modal.svg" alt="close modal" />
                </button>
            </div>
            <p className="modal-sub-heading">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            <div className="modal-card-main-content">
                {pledgeModalContent.map((elem) =>

                    <div  style={{ opacity: elem.totalLeft === 0 ? 0.5 : 1 }} className="modal-card-content" data-selected={selectedIndex === elem.id ? "true" : "false"}   >
                        <div className="top-content">
                            <input onClick={() => elem.totalLeft === 0 ? {} : setSelected(elem.id)} type="radio" name="pledge-radio" id={`${elem.id}rewarded`} />
                            <div className="pledge-heading">
                                <label  htmlFor={`${elem.id}rewarded`} className="pledge-heading-title">{elem.mainTitle}</label>
                               
                                {elem.pledge > 0 && <p>Pledge ${elem.pledge} or more</p>}
                            </div>
                            {elem.totalLeft >= 0 && <p className="modal-total-left">{elem.totalLeft}<span>left</span></p>}
                            <p className="top-content-p">{elem.content}</p>
              
                        </div>

                        {selectedIndex === elem.id && <div className="modal-pledge-section">
                        {elem.totalLeft > 0? <p>Enter your pledge</p> : <p></p>}
                            <div className="p-sect">
                                {elem.totalLeft > 0 && <div>
                                    <span>$</span>
                                    <textarea name="" id="" maxLength={3} value={elem.pledge} onChange={() => onChangeText()}></textarea>
                                </div>}
                                <Button onClick={() => setIsComplete(!isComplete)
                                } disabled={false} content="Continue" />
                            </div>
                        </div>}
                    </div>
                )}
            </div>
        </>}

    </dialog>);
}