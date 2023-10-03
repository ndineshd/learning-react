import React, { Component } from 'react'

export class UseState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increamentHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <h3>increament count using class component</h3>
        <button onClick={this.increamentHandler} title='Click to increase the value'> Count {this.state.count}</button>
      </div>
    )
  }
}

export default UseState
