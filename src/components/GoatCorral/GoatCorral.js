import React from 'react';
import PropTypes from 'prop-types';
import './GoatCorral.scss';


import Goat from '../Goat/Goat';

import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
    static propTypes = {
      goats: PropTypes.arrayOf(goatShape.goatShape),
    }

    render() {
      const { goats } = this.props;
      const makeGoats = goats.map(goat => (
        // <h2>{goat.name}</h2>
        <Goat key={goat.id} goat={goat} />

      ));

      return (
        <div className="GoatCorral d-flex wrap">
        { makeGoats }
    </div>
      );
    }
}

export default GoatCorral;
