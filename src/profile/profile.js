import React from "react";


const  Profil =({Fullname,bio,profession,children}) => {
	
  return (   
<div>
            <div className="card-container">
	<span className="pro">PRO</span>
	<div className="round">{children}</div>
	<h3>{Fullname}</h3>
	<h6>New York</h6>
	<p>{bio}</p>
	<div className="buttons">
		<button className="primary">
			Message
		</button>
		<button onClick={()=>alert("welcome to my profile")} className="primary ghost">
			Following
		</button>
	</div>
	<div className="skills">
		<h6>Skills</h6>
		<ul>
			{profession}
		</ul>
	</div>
 </div>

 </div>
 

        )

}
export default Profil