import React from 'react';
import "./styles.css";

function StarBirth(){
  function handleStarCreation(event){
    console.log(event.target.mass.value)
    event.preventDefault();
  }
  return(
    <React.Fragment>
      <div className='createStar'>
      <h1>Testing</h1>
        <form id="massForm" onSubmit={handleStarCreation}>
            <input type='number' name='mass' placeholder='Mass (solar units)'/>
            <button>{"Create your star"}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default StarBirth;