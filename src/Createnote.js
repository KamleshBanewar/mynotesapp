import React, { useState } from 'react';
import "./Createnote.css";

function Createnote(props) {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        containt: ""
    });

    const inputEvent = (e) => {
        // let inpu = e.target.value;
        // let text = e.target.name;
        // console.log(inpu);
        // console.log(text);
        const { name, value } = e.target;

        setNote((oldval) => {
            return {
                ...oldval,
                [name]: value,
            };
        })
    }

    //This Function Is Pass using The Props. From App Component.
    const aadEvent = () => {
        //This "note" Parameter pass The value There This "passnode" Fuction Is Declered.
        //"note" Hold The Object Thats Included Title Or a containt.
        props.passnode(note);

        //This For Cleare The Fild.
        setNote({
            title: "",
            containt: ""
        });
    };

    const onExpand = () => {
        setExpand(true);
    }

    const Shrink = () => {
        setExpand(false);
    }

    return (
        <>
            <div className="main" onDoubleClick={Shrink}>
                <div className="form">
                    <form>
                        {
                            expand ?
                                <input
                                    type="text"
                                    onChange={inputEvent}
                                    name='title'
                                    value={note.title}
                                    placeholder='Title'
                                /> : null
                        }

                        <textarea
                            cols=""
                            rows=""
                            onChange={inputEvent}
                            name='containt'
                            value={note.containt}
                            placeholder='Write a Note...'
                            onClick={onExpand}
                        >

                        </textarea>

                    </form>
                    {
                        expand ?
                            <button onClick={aadEvent}>
                                +
                            </button> : null
                    }
                </div>
            </div>
        </>
    )
}

export default Createnote;
