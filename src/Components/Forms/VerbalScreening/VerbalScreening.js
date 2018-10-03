import React from 'react'; 
import tachyons from 'tachyons';  
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class VerbalScreening extends React.Component{  
	render(){  
		return(  
			<div>  
				<h1>Verbal Screening Form</h1>  
				<div class="container "> 
		    	<div class="row-4  mt-4">
		    <div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text" id="inputGroup-sizing-default ">Name of the State</span>
			  </div>
			  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
			</div>  
		</div>
		</div>  

		<div class="container "> 
		    	<div class="row-4  mt-4">
		    <div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text" id="inputGroup-sizing-default ">Name of the District</span>
			  </div>
			  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
			</div>  
		</div>
		</div> 

			

			<div class="container "> 
		    	<div class="row-4  mt-4">
		    <div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text" id="inputGroup-sizing-default">Name of the Town</span>
			  </div>
			  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
			</div>  
		</div>
		</div>   



		<div class="container "> 
		    	<div class="row-4  mt-4">
		    <div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text" id="inputGroup-sizing-default">Name of the TB UNIT</span>
			  </div>
			  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
			</div>  
		</div>
		</div>  
  
			</div>
			);
	}
} 

export default VerbalScreening; 

