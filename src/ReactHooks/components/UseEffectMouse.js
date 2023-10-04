import { Component } from 'react'

class UseEffectMouse extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         x: 0,
         y: 0
      }
    }

    logMousePosition = e => {
        this.setState({x: e.clientX, y: e.clientY})
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }
    
  render() {
    
    return (
      <div>

        <h3>UseEffect Mouse using class </h3>
        X - {this.state.x} Y - {this.state.y}
      
      </div>
    )
  }
}

export default UseEffectMouse
