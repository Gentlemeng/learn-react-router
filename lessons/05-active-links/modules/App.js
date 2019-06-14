import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          {/* <li><Link to="/about" activeStyle={{color:'red'}}>About</Link></li>
          <li><Link to="/repos" activeStyle={{color:'red'}}>Repos</Link></li> */}


          {/* <li><Link to="/about" className="active">About</Link></li>
          <li><Link to="/repos" className="active">Repos</Link></li> */}

          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
