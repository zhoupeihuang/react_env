import React, { Component } from 'react'
import './serviceCall.less'

class ServiceCall extends Component {
 		constructor () {
    	super()
  }
 
  render() {
    return (
     <div>
     <div className="scallBox">
		 <i></i>	
		  400-800-8888<br/>
		 服务时间:8:00-21:00
	 </div>
	 <div className="scallTitle">
	 	<ul>
	 		<li>在线客服</li>
	 		<li>常见问题</li>
	 	</ul>
	 </div>
	 </div>
    )
  }
}

export default ServiceCall
