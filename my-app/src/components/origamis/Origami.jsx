import React, { Component } from 'react'
import Origam from './Origam';

class Origamis extends Component {
    constructor(props) {
      super(props)
      this.state = { origamis: [] }
    }
  
    getOrigamis = async () => {
      const promise = await fetch('http://localhost:9999/api/origami')
      const origamis = await promise.json()
      this.setState({ origamis })
      console.log(origamis)
    }
  
    renderOrigamis() {
        const { origamis } = this.state
    
        return origamis.map(origam => {
          return (
            <Origam key={origam._id} {...origam} />
          )
        })
    }
  
    componentDidMount() {
      this.getOrigamis()
    }
  
    render() {
      return (
        <div>
          <h1>Orgimis</h1>
          <div>
          {this.renderOrigamis()}
          </div>
        </div>
      )
    }
  }
  
  export default Origamis