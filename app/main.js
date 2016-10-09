import React from 'react'
import { render } from 'react-dom'

import Headers from './components/header'
import ServiceCall from './components/serviceCall'
import Footers from './components/footer'

render(
	<div>
		<ServiceCall />
	  	<Footers/>
	</div>,
  document.getElementById('app')
)
 