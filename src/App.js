import React, { Component } from 'react'
//import logo from './logo.svg'
import './App.css'
import { Content } from './Content'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { active: 'contact' }
  }

  updateActive = active => _ => {
    this.setState({
      active,
    })
  }

  render() {
    const active = this.state.active
    return (
      <div className="App">
        <div className="header">
          <Button
            value="Kontakt"
            isActive={active === 'contact'}
            action={this.updateActive('contact')}
          />
          <Button
            value="Info"
            isActive={active === 'info'}
            action={this.updateActive('info')}
          />
          <Button
            value="Impressum"
            isActive={active === 'impressum'}
            action={this.updateActive('impressum')}
          />
        </div>
        <Content show={active} />
      </div>
    )
  }
}

function Button(props) {
  return (
    <span onClick={props.action} className={props.isActive ? 'active' : ''}>
      {props.value}
    </span>
  )
}

export default App
