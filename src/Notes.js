import React from 'react';
import "./Notes.css";


function Notes(props) {

    const Onclick = () => {
        props.ondelete(props.id);
    }

    return (

        <>
            <div className="container">
                <h3>{props.title} </h3>
                <p>{props.containt}</p>
                <button onClick={Onclick}>
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>

        </>

    );
}

export default Notes;
