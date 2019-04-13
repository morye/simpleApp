import React from 'react';
import { connect } from "react-redux";

import { fetchCuriosity, fetchOpportunity, fetchSpirit, slideLeft, slideRight } from '../actions/index';
import Slides from '../components/slides';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCuriosity({page:1, sol:1000});
  }
  render(){
    return (
      <div id="home">
        <ul className="main-menu">
          <li onClick={e => { this.props.fetchCuriosity({page:1, sol:1000})}}>Curiosity</li>
          <li onClick={e => { this.props.fetchOpportunity({page:1, sol:1000})}}>Opportunity</li>
          <li onClick={e => { this.props.fetchSpirit({page:1, sol:1000})}}>Spirit</li>
        </ul>
        <Slides photos={this.props.photos} left={this.props.slideLeft} right={this.props.slideRight} number={this.props.number} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.todo.photos,
    number: state.todo.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCuriosity: props => dispatch(fetchCuriosity(props)),
    fetchOpportunity: props => dispatch(fetchOpportunity(props)),
    fetchSpirit: props => dispatch(fetchSpirit(props)),
    slideLeft: () => dispatch(slideLeft()),
    slideRight: () => dispatch(slideRight())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
