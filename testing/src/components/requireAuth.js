import React, { Component } from 'react';
import { connect } from 'react-redux';

export default(ChildComponent) => {
  class ComposedComponent extends Component {
    // component got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // coponent got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    // helper method
    shouldNavigateAway() {
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props}/>; //pass through components
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
