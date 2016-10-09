import React, { Component } from 'react'
import './footer.less'

class Footers extends Component {
 		constructor () {
    	super()
  }
 
  render() {
    return (
     <div className="footerBox">
		  	<ul>
		  		 <li><span></span>精选</li>
		  		 <li><span></span>理财</li>
		  		 <li><span></span>账户</li>
		  		 <li><span></span>更多</li>
		  	</ul>
		 </div>
    )
  }
}

export default Footers
