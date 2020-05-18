import React from 'react';
import PropTypes from 'prop-types';
import StarBirth from './StarBirth';
import LowMassMainSequenceStar from './LowMassCycle/LowMassMainSequenceStar';
import RedGiant from './LowMassCycle/RedGiant';
import Star from './Star';


class StarControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starMass: null
    };
  }

  StarChange = () => {
  }

  render() {
    return(
      <React.Fragment>
      <StarBirth />
      </React.Fragment>
    );
  }
}
export default StarControl;
  






// constructor(props) {
  //   super(props);
  //   this.state = {
  //     starBirthHomePage: true,
  //     highMassControl:false,
  //     lowMassControl:false
  //   };
  // }
  
  // handleClick = () => {
  // }
  
  // render() {
  //   return(
  //        <Router>
  //        <Header />
  //        <Switch>
  //          <Route exact path="/" component={StarBirth} />
  //          <Route path="/LowMassControl" component={LowMassControl} />
  //          <Route path="/HighMassControl" component={HighMassControl} />
  //        </Switch>
  //        <Footer />
  //      </Router>
  //   );
  // }