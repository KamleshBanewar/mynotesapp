import React, { useState } from 'react';
import Createnote from './Createnote';
import Footer from './Footer';
import Header from './Header';
import Notes from './Notes';

function App() {

  const [box, setBox] = useState([]);

  //Here The Actual Onclick Function Is Declered. 
  const addNote = (note) => {
    // console.log(note);
    setBox((prevVal) => {
      return (
        [...prevVal, note]
      )
    })

  };

  const deleteFun = (id) => {
    setBox((puranaVal) =>
      puranaVal.filter((data, indx) => {
        return indx !== id;
      })
    )
  }



  return (
    <>
      <div>
        <Header />
        <Createnote passnode={addNote} />

        {
          box.map((cVal, ind) => {
            return (
              <Notes
                key={ind}
                id={ind}
                title={cVal.title}
                containt={cVal.containt}
                ondelete={deleteFun}
              />
            );
          })
        }
        <Footer />

      </div>

    </>
  );
}

export default App;
