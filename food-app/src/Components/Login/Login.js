import React from 'react'
import classes from './Login.module.css'

const Login=()=>{
	return(
		<div>
			<form>
                <div className={classes.imgcontainer}>
                    <img src='' className={classes.avatar} />
                </div> 		

				<div className={classes.container}> 
					<label htmlFor="username">User Name</label>
					<input type="text" placeholder="Enter Username" name="username" id="username" required/> 
				</div> 

				<div className={classes.container}> 
					<label htmlFor="passw">Password</label>
					<input type='text' placeholder="Enter Password" name="passw" id="passw" required/> 
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login;  