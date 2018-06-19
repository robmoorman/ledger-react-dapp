import TransportU2F from "@ledgerhq/hw-transport-u2f";
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  async componentDidMount() {
    const isSupported = await TransportU2F.isSupported()

    this.setState({
      isSupported
    })

    if (isSupported) {
      const descriptors = await TransportU2F.list()

      this.setState({
        descriptors
      })
    }
  }

  constructor() {
    super()

    this.state = {
      isSupported: false,
      descriptors: []
    }
  }

  render() {
    return (
      <div className="App">
        <p>Ledger is supported: {this.state.isSupported ? `yes` : `no`}</p>
        {this.state.isSupported && (
          <p>Descriptors: {this.state.descriptors.length}</p>
        )}
      </div>
    );
  }
}

export default App;
