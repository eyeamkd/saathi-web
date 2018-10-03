import React,{Component} from 'react'; 
import ReactDOM from 'react-dom'
import tachyons from 'tachyons'; 
import FormSelection from '../FormSelection/FormSelection.js';  
import './Homepage.css';

class Homepage extends React.Component{   
	constructor(props){  
		super(props); 
		this.state={  
			loggedIn:false,
			email:'',
			password:'',  
		}
	} 
	programOfficerLogIn=()=>{     
		console.log("Logged in"); 
		this.setState({loggedIn:true});
	} 
	onEmailChange=(event)=>{  
		this.setState({email:event.target.value});
	} 
	onPasswordChange=(event)=>{  
		this.setState({password:event.target.value});
	}
	render(){   
		if(this.state.loggedIn===false){  
			return(  
			<div className="main">  
				<header className="sans-serif">
				  <div className="cover bg-left bg-center-l" >
				    <div className="bg-black-80 pb5 pb6-m pb7-l">
				      <nav className="dt w-100 mw8 center"> 
				        
				        <div className="dtc v-mid tr pa3"> 
				        <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Home</a> 
				          <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >About</a> 
				          <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Team</a>  
				          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Initiative</a>
				        </div>
				      </nav> 
				      <div className="tc-l mt4 mt5-m mt6-l ph3">
				        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Welcome to Saathi</h1>
				        <h2 className="fw1 f3 white-80 mt3 mb4">Saathi Web Application for TB-Treatment</h2> 

							<main className="pa4 black-80">
							  <form className="measure center">
							    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							      <legend className="f4 fw6 ph0 mh0 white">Sign In</legend>
							      <div className="mt3">
							        <label className="db fw6 lh-copy f6 white" for="email-address">Email</label>
							        <input className="pa2 input-reset ba--white bg-transparent hover-bg-white white w-100"  
							        		type="email" 
							        		name="email-address"  
							        		id="email-address"  
							        		onChange={event=>{this.onEmailChange(event);}}
							        		/>
							      </div>
							      <div className="mv3">
							        <label className="db fw6 lh-copy f6 white" for="password">Password</label>
							        <input className="b pa2 input-reset ba-white bg-transparent hover-bg-white white w-100"  
							        	   type="password" 
							        	   name="password"  
							        	   id="password"  
							        	   onChange={event=>{this.onPasswordChange(event);}}
							        	   />
							      </div>
							      <label className="pa0 ma0 lh-copy f6 pointer white"><input type="checkbox"/> Remember me</label>
							    </fieldset>
							    <div className="">
							      <button className="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib" type="submit"  onClick={this.programOfficerLogIn}>Log on to Saathi</button>
							    </div>
							    <div className="lh-copy mt3">
							      <a href="#0" className="f6 link dim white db">Sign up</a>
							      <a href="#0" className="f6 link dim white db">Forgot your password?</a>
							    </div>
							  </form>
							</main>
				      </div>
				    </div>
				  </div> 
				</header>

			</div>
			);
		} 
		else if(this.state.loggedIn===true){  
			return(  
				<FormSelection/>
				);
		}
		
	}
}
 
export default Homepage;