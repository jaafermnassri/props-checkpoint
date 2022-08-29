import React from "react";


const  Profil =(props) => {
	
  return (   
<div>
            <div className="card-container">
	<span className="pro">PRO</span>
	<img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>{props.Fullname}</h3>
	<h6>New York</h6>
	<p>ok</p>
	<div className="buttons">
		<button className="primary">
			Message
		</button>
		<button className="primary ghost">
			Following
		</button>
	</div>
	<div className="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
 </div>

 </div>
 

        )

}
export default Profil