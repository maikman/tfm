import React from 'react'
import Contact from './sites/Contact'
import Imprint from './sites/Imprint'
import Info from './sites/Info'

export function Content(props) {
  let content = null
  switch (props.show) {
    case 'info':
      content = (
        <div className="container">
          <Info />
        </div>
      )
      break
    case 'contact':
      content = (
        <div className="container">
          <Contact />
        </div>
      )
      break
    case 'impressum':
      content = (
        <div className="container">
          <Imprint />
        </div>
      )
      break
    default:
      content = <div className="container">:(</div>
  }
  return content
}
