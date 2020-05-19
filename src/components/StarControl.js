import React from 'react';
// import PropTypes from 'prop-types';
import StarBirth from './StarBirth';
import LowMassMainSequenceStar from './LowMassCycle/LowMassMainSequenceStar';
import HighMassMainSequenceStar from './HighMassCycle/HighMassMainSequence';
import RedGiant from './LowMassCycle/RedGiant';
import Star from './Star';


class StarControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCycle: null
    };
  }

  StarChange = (starMass) => {
    if(starMass <10){
      return(
        <LowMassMainSequenceStar/>
      )
    }
    if(starMass>10){
      return(
        <HighMassMainSequenceStar/>
      )
    }
  }

  render() {
    let visibleCycle = null;
    return(
      <React.Fragment>
        <StarBirth onNewStar={this.StarChange} />;
      </React.Fragment>
    );
  }
}

export default StarControl;