import React from 'react'
import { render } from 'react-dom'

const style = {
	marginLeft: '5%',
	width:'90%',
	paddingLeft:25,
	paddingRight:25,
	justify: 'center',
	textAlign: 'center',
	paddingBottom: 10,
	color: '#949494'
}

render(
	<div id="bottom-footer"
		className="page-footer-copyright" 
		style={style}>
		<p style={{ cssFloat:"left" }}>
			Copyright © 2016 Armand Gray - Digital Portfolio
		</p>
		<p style={{ width:'78%' }}>
			<a href="landing.html">
			<img id="footer-personal-logo" 
				src="assets/personal_logo_949494.svg" 
				width="15" 
				height="11" 
				alt="personal logo" 
				style={{ 
					marginTop:-2.5, 
					marginRight:7 
				}}></img>
			</a>
			<a href="resources.html" id="explore-btn">Explore</a>
			&nbsp; | &nbsp; 
			<a href="share.html">Share</a>
			&nbsp; | &nbsp; 
			<a id="more-less-btn" href="#bottom-footer">Less</a>
		</p>
		<p id="language" 
			style={{
				cssFloat:"right", 
				marginTop:-25
			}}>
			<img 
				style={{ 
					marginTop:-2.5, 
					marginRight:7 
				}} 
				src="assets/icons/ic_circular_us_flag.png" 
				height="15" 
				width="15">
			</img>United States
		</p>
	</div>,
	document.getElementById('react-container')
)
