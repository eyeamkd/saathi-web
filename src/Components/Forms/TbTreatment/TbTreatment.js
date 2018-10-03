import React from 'react'; 
import tachyons from 'tachyons'; 

class TbTreatment extends React.Component{  
	render(){  
		return(  
				<div>  
					<h1>TB Treatment Form</h1>  
					<div class="container "> 
				    	<div class="row-4  mt-4">
						    <div class="input-group mb-3">
							  <div class="input-group-prepend " >
							    <span class="input-group-text formfont formfont formfont" id="inputGroup-sizing-default " >Name of the State</span>
							  </div>
					  		<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
							</div>  
						</div>
					</div>   
					<div class="container">  
						<div class="row"> 
							<div class="col-6">  
								<div class="container "> 
							    	<div class="row-4  mt-4">
							    		<div class="input-group mb-3">
								  			<div class="input-group-prepend">
								    			<span class="input-group-text formfont formfont"  id="inputGroup-sizing-default ">Name of the District</span>
								  			</div>
								  			<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
										</div>  
									</div>
								</div>  
							</div> 
							<div class="col-6"> 
								<div class="container "> 
						    		<div class="row-4  mt-4">
						    			<div class="input-group mb-3">
							  				<div class="input-group-prepend">
							   					 <span class="input-group-text formfont"  id="inputGroup-sizing-default">Name of the Town</span>
							  				</div>
							  				<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
										</div>  
									</div>
								</div>
							</div>
						</div> 
					</div>
					<div class="container "> 
					    <div class="row-4  mt-4">
					    	<div class="input-group mb-3">
						  		<div class="input-group-prepend">
						    		<span class="input-group-text formfont"  id="inputGroup-sizing-default">Name of the TB UNIT</span>
						  			</div>
						  			<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
								</div>  
							</div>
						</div>  
						<div class="container border border-secondary shadow-lg">  
							<div class="container"> 
								<div class="row-4 mt-4">   
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text formfont"  id="inputGroup-sizing-default">Name of the PHI where treatment started</span>
										</div>
										<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
									</div>
								</div> 
							</div> 
							<div class="container"> 
								<div class="row-4 mt-4"> 
									<select class="custom-select">
									  <option selected>Case Identified Place</option>
									  <option value="public">Public Sector</option>
									  <option value="private">Private Sector</option>
									</select> 
								</div> 
							</div> 

							<div class="container"> 
								<div class="row-4 mt-4">  
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text formfont"  id="inputGroup-sizing-default">Name of the facility where identified</span>
										</div>
										<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
									</div> 
								</div> 
							</div> 
						</div>  

						<div class="container">  
							<div class="row">  
								<div class="col-6"> 
									<div class="container "> 
								    	<div class="row-4  mt-4">
								    		<div class="input-group mb-3">
									  			<div class="input-group-prepend">
									    			<span class="input-group-text formfont"  id="inputGroup-sizing-default">Name of the Child</span>
									  			</div>
									  			<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
											</div>  
										</div>
									</div>    
								</div> 
								<div class="col-6"> 
									<div class="container">  
						          		<div class="row-4 mt-4">   
						          			<span class="input-group-text formfont"  id="inputGroup-sizing-default ">Sex of the Child 
								          		<div class="form-check form-check-inline pl-4">
										  			<input class="form-check-input"  type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
										  			<label class="form-check-label" for="inlineRadio1">Male</label>
												</div>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
												  	<label class="form-check-label" for="inlineRadio2">Female</label>
												</div>
						          			</span>
						          		</div>
						          	</div>
								</div>
							</div>
						</div>
				        <div class="container">  
				        	<div class="row"> 
				         		<div class="col-6">  
						         	<div class="container "> 
								    	<div class="row-4  mt-4">
								    		<div class="input-group mb-3">
									  			<div class="input-group-prepend">
									    			<span class="input-group-text formfont"   id="inputGroup-sizing-default">Age of the Child</span>
									  			</div>
									  			<input type="text" placeholder="DD/MM/YYYY" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
											</div>  
										</div>
									</div>
				         		</div>  
				         		<div class="col-6">   
				         			<div class="container "> 
						    			<div class="row-4  mt-4">
						    				<div class="input-group mb-3">
							  					<div class="input-group-prepend">
							    					<span class="input-group-text formfont"   id="inputGroup-sizing-default">NIKSHAY ID</span>
							  					</div>
							 			 		<input type="text"  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
											</div>  
										</div>
									</div>    
				         		</div>
				         	</div>
				        </div>
						<div class="container">  
							<div class="row"> 
								<div class="col-6"> 
									<div class="container pr-3 "> 
							    		<div class="row-4  mt-4">
							    			<div class="input-group mb-3 pr-2">
												<div class="input-group-prepend ">
													<span class="input-group-text formfont pr-2"  id="inputGroup-sizing-default">Height of the Child</span>
												</div>
												<input type="text" placeholder="in cms" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
											</div>  
										</div> 
									</div>
								</div>  
								<div class="col-6">  
									<div class="container pr-3 "> 
							    		<div class="row-4  mt-4"> 
							    			<div class="input-group mb-3 pr-2">
												<div class="input-group-prepend ">
													<span class="input-group-text formfont pr-2"  id="inputGroup-sizing-default">Weight of the Child</span>
												</div>
												<input type="text" placeholder="in kgs" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
											</div>  
										</div> 
									</div>
								</div>
							</div>
						</div>  


						<div class="container">  
     						<div class="row"> 
     							<div class="col-6">  
			     					<div class="container "> 
					    				<div class="row-4  mt-4">
					    					<div class="input-group mb-3">
						  						<div class="input-group-prepend">
						    						<span class="input-group-text formfont"  id="inputGroup-sizing-default">Name of the Parent/Gaurdian</span>
						  						</div>
						  						<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
											</div>  
										</div>
									</div>    
     							</div> 
	     						<div class="col-6">  
	     							<div class="container "> 
			    						<div class="row-4  mt-4">
			    							<div class="input-group mb-3">
				  								<div class="input-group-prepend">
				   		 							<span class="input-group-text formfont"  id="inputGroup-sizing-default">Contact Number of the Parent/Gaurdian</span>
				  								</div>
				  								<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
											</div>  
										</div>
									</div>   
	     						</div> 
     						</div>
     				</div>
    

		   

		 <div class="container "> 
		    	<div class="row-4  mt-4">
						    <div class="input-group">
				  <div class="input-group-prepend">
				    <span class="input-group-text formfont" >Address of the child</span>
				  </div>
				  <textarea class="form-control" aria-label="With textarea"></textarea>
				</div>
		</div>
		</div>    

 		<div class ="container">
 			<div class="row">
 				<div class="col-6">  
 					<div class="container "> 
					    	<div class="row-4  mt-4">
					    		<div class="input-group mb-3">
						  		<div class="input-group-prepend">
						    	<span class="input-group-text formfont"  id="inputGroup-sizing-default">Contact Number of the Parent/Gaurdian</span>
						  		</div>
						  		<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
							</div>  
						</div>
					</div>    
				</div> 

 				<div class="col-6"> 
 						<div class="container "> 
		    	<div class="row-4  mt-4">
		    <div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text formfont"  id="inputGroup-sizing-default">Name of the District of the child</span>
			  </div>
			  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
			</div>  
		</div>
		</div>   


 				</div>
 			</div> 
 		</div>
 		
		   
 			
 		<div ></div>

		<div class="container "> 
		    	<div class="row-4  mt-4">
		    <div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text formfont"  id="inputGroup-sizing-default">Aadhar Number of the child / Parent</span>
			  </div>
			  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
			</div>  
		</div>
		</div>   
 

		 <div class="container">  
          	<div class="row-4 mt-4">   
          <span class="input-group-text formfont"  id="inputGroup-sizing-default ">Area of Living
          
          	<div class="form-check form-check-inline pl-4">
		  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
		  <label class="form-check-label" for="inlineRadio1">Slum</label>
		</div>
		<div class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
		  <label class="form-check-label" for="inlineRadio2">Tribal</label>
		</div> 

		<div class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
		  <label class="form-check-label" for="inlineRadio2">Migrant</label>
		</div> 

		<div class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
		  <label class="form-check-label" for="inlineRadio2">Refugee</label>
		</div>
		
          </span>
          		
          	</div>
          </div> 

          <div class="container "> 
		    	<div class="row-4  mt-4">
						    <div class="input-group">
				  <div class="input-group-prepend">
				    <span class="input-group-text formfont" >Occupation of the Parent</span>
				  </div>
				  <textarea class="form-control" aria-label="With textarea"></textarea>
				</div>
		</div>
		</div>  

		 <div class="container">  
          	<div class="row-4 mt-4">   
          <span class="input-group-text formfont"  id="inputGroup-sizing-default ">Socio Economic Status
          
          	<div class="form-check form-check-inline pl-4">
		  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
		  <label class="form-check-label" for="inlineRadio1">APL</label>
		</div>
		<div class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
		  <label class="form-check-label" for="inlineRadio2">BPL</label>
		</div> 
		</span> 
		</div> 
		</div>   


		<div class="container "> 
		    	<div class="row  mt-4"> 
		    	<div class="col-6"> 
		    		<div class="input-group mb-3">
					  <div class="input-group-prepend">
					    <span class="input-group-text formfont"  id="inputGroup-sizing-default">Name of Treatment Supporter</span>
					  </div>
					  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
					</div>  
		    	</div> 
		    		<div class="col-6"> 
		    			<div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text formfont"  id="inputGroup-sizing-default">Designation</span>
			  </div>
			  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
			</div>  
		 </div>	    
		</div>
		</div>    

		<div class="container "> 
		    	<div class="row  mt-4"> 
		    		<div class="col-6"> 
		    			<div class="input-group mb-3">
						  <div class="input-group-prepend">
						    <span class="input-group-text formfont"  id="inputGroup-sizing-default">MobiLe Number</span>
						  </div>
						  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
						</div>  
		    		</div> 
		    		<div class="col-6"> 
		    			<div class="input-group mb-3">
					  <div class="input-group-prepend">
					    <span class="input-group-text formfont"  id="inputGroup-sizing-default">Initial Home Visit By</span>
					  </div>
					  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
						</div> 
		    		</div>
		    		
				</div>
		</div>   
</div> 
			);
	}
} 

export default TbTreatment; 

