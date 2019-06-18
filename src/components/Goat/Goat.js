import React from 'react';

import goatShape from '../../helpers/propz/goatShape';

import './goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="Goat col-3">
        <div className="card">
        <img src={goat.imageUrl} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.favePose}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
