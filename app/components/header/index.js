import React, { Component } from 'react'
import './header.less'

class Headers extends Component {
 		constructor () {
    	super()
  }
 
  render() {
    return (
     <div className="aa">
		  	<ul>
		  		 <li>首页</li>
		  		 <li>导航1</li>
		  		 <li>导航2</li>
		  		 <li>导航3</li>
		  	</ul>
		 </div>
    )
  }
}

export default Headers
