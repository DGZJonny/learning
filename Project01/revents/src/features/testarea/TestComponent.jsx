import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';

const mapState = (state) => ({
    data: state.test.data
})

const actions = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Test area</h1>
        <h3>the answer is: {this.props.data}</h3>
        <Button onClick={incrementCounter} color='green' content='Increment'></Button>
        <Button onClick={decrementCounter} color='green' content='Decrement'></Button>
      </div>
    )
  }
}
export default connect(mapState, actions)(TestComponent)