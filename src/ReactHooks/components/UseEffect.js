import React, { Component } from 'react'

export class UseEffect extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProops, prevState) {
        document.title = `Clicked ${this.state.count} times`
    }
    
  render() {
    return (
      <div>
        <h3>UseEffect after Render</h3>
        <button onClick={() => this.setState({count: this.state.count + 1})} title='Click and check it on page title'>Click {this.state.count} times</button>
      </div>
    )
  }
}

export default UseEffect
