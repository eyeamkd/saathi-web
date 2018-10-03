import React from 'react'; 
import tachyons from 'tachyons';  


class ContactTracing extends React.Component{  
	render(){  
		return(  
			<div>  
			<h1>Contact Tracing Form</h1> 

			<div class="container formbackground "> 
		     <div class="row-4  mt-4">
			    <div class="input-group mb-3">
				  <div class="input-group-prepend">
				    <span class="input-group-text" id="inputGroup-sizing-default">Name of the child/Patient (Index Case)</span>
				  </div>
				  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
				</div>  
			</div>
		   	</div>  

			</div>
			);
	}
} 

export default ContactTracing; 

