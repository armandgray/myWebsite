import React from 'react'
import { render } from 'react-dom'

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	HEY HEEELLLOO!!	
	</h1>,
	document.getElementById('react-container')
)
