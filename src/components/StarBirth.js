import React from 'react';
import "./styles.css";

function StarBirth() {
  return(
    <React.Fragment>
      <div class='createStar'>
      <h1>Testing</h1>
        <form id="massForm">ß
            <input type='number' name='mass' placeholder='Mass (solar units)'/>
            <button>{"Create your star"}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default StarBirth;