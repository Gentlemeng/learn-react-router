import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
        <div>
            <h1>react router tutorial</h1>
            <ul>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/repos">repos</Link></li>
            </ul>
        </div>
    )
  }
})
