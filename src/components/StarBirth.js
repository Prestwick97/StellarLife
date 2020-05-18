import React from 'react';
import MolecularCloud from './MolecularCloud';

function StarBirth() {
  return(
    <React.Fragment>
      <div class='createStar'>
        <form>
            <input type='number' name='mass' placeholder='solar mass (kg)'/>
            <button>{"Create your star"}</button>
        </form>
      </div>
      <div>
        {/* <MolecularCloud /> */}
      </div>
    </React.Fragment>
  );
}

export default StarBirth;