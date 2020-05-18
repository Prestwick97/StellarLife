import React from 'react';
import "./styles.css";

function StarBirth() {
  return(
    <React.Fragment>
      <div class='createStar'>
      <h1>Testing</h1>
        <form id="massForm">
            <input type='number' name='mass' placeholder='solar mass (kg)'/>
            <button>{"Create your star"}</button>
        </form>
      </div>
      {/* <div>
        <MolecularCloud />
      </div> */}
    </React.Fragment>
  );
}

export default StarBirth;