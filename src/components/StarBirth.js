import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

function StarBirth(props){
  function handleStarCreation(event){
    console.log(event.target.mass.value)
    event.preventDefault();
    props.onNewStar({starMass: event.target.mass.value});
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

StarBirth.propTypes = {
  onNewStar: PropTypes.func
}
export default StarBirth;