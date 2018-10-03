import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'; 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import tachyons from 'tachyons';  
import ContactTracing from '../Forms/ContactTracing/ContactTracing.js'; 
import TbDiagnosis from '../Forms/TbDiagnosis/TbDiagnosis.js'; 
import TbTreatment from '../Forms/TbTreatment/TbTreatment.js'; 
import TaTool from '../Forms/TaTool/TaTool.js'; 
import ContactCaseLine from '../Forms/ContactCaseLine/ContactCaseLine.js'; 
import VerbalScreening  from '../Forms/VerbalScreening/VerbalScreening.js';
import './FormSelection.css'; 


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appFrame: {
    height: 2000,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    zIndex:theme.zIndex.drawer+1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor:'white',
    padding: theme.spacing.unit * 3,
  },
});

class FormSelection extends React.Component {
  state = {
    anchor: 'left', 
    formSelected:''
  };

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };
  OnClickContactTracing=()=>{  
  	console.log("The form is selected ");  
  	this.setState({formSelected:'contactTracing'}); 
  } 
   OnClickTbDiagnosis=()=>{  
  	console.log("The form is selected ");  
  	this.setState({formSelected:'tbDiagnosis'}); 
  } 
  OnClickTbTreatment=()=>{  
  	console.log("The form is selected ");  
  	this.setState({formSelected:'tbTreatment'}); 
  } 
  OnClickTaTool=()=>{  
  	console.log("The form is selected ");  
  	this.setState({formSelected:'taTool'}); 
  } 
  onClickVerbalScreening=()=>{
  	this.setState({formSelected:'verbalSceening'}); 
  } 
  onClickContactCaseLine=()=>{
  	this.setState({formSelected:'contactCaseLine'}); 
  }
  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const drawer = (
      <Drawer 
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        
      > 
        <div className={classes.toolbar}/>
        <Divider  />
        <List>Profile</List> 

        <Divider />
        <List>Submissions</List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }
    if(this.state.formSelected===''){  
    	return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
	          <AppBar
	            position="absolute"
	            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
	          	>
	            <Toolbar>
	              <Typography variant="title" color="inherit" noWrap>
	                Welcome Program Officer
	              </Typography>
	            </Toolbar>
	          </AppBar>
	          {before}
	          <main className={classes.content}>
	            <div className={classes.toolbar} />
	            <Typography>  
	            <h1>Select the Form that you want to Submit </h1>  
	             </Typography> 
	             	<div className="CardDisplay">  
	             		<div className="grow" onClick={this.onClickVerbalScreening}>
			             	<Card className="CardStyle verbalSceening">  
			            		<CardContent>  
			            			<Typography> 
			            			<h4 class="CardContentStyle ">  
			            			Verbal Screening
			            			</h4>
			            			</Typography>
			            		</CardContent>
			            	</Card>	 
		            	</div> 
		            	<div className="grow" onClick={this.OnClickTbTreatment}>
		            	<Card className="CardStyle tbTreatment">  
		            		<CardContent>  
		            			<Typography> 
		            			<h4 class="CardContentStyle">  
		            			TB- Treatment Form 
		            			</h4>
		            			</Typography>
		            		</CardContent>
		            	</Card>	 
		            	</div> 
		            	<div className="grow" onClick={this.OnClickTbDiagnosis}>
		            	<Card className="CardStyle tbDiagnosis">  
		            		<CardContent>  
		            			<Typography> 
		            			<h4 class="CardContentStyle">  
		            			TB-Diagnosis 
		            			</h4>
		            			</Typography>
		            		</CardContent>
		            	</Card>	 
		            	</div> 
		            	<div className="grow" onClick={this.onClickContactCaseLine}>
		            	 <Card className="CardStyle contactCaseLine">  
		            		<CardContent>  
		            			<Typography> 
		            			<h4 class="CardContentStyle ">  
		            			Contact Case Line
		            			</h4>
		            			</Typography>
		            		</CardContent>
		            	</Card>	 
		            	</div> 

		            	<div className="grow" onClick={this.OnClickTaTool}>
		            	<Card className="CardStyle taTool">  
		            		<CardContent className="CardContentStyle">  
		            			<Typography>  
                        <div className="textStyle">
    		            			<h4>  
    		            			TA_Tool
    		            			</h4> 
                        </div>
		            			</Typography>
		            		</CardContent>
		            	</Card> 
		            	</div> 

		            	<div className="grow" onClick={this.OnClickContactTracing}> 
		            	<Card className="CardStyle contactTracing">  
		            		<CardContent>  
		            			<Typography> 
		            			<h4 class="CardContentStyle">  
		            			Contact Tracing 
		            			</h4>
		            			</Typography>
		            		</CardContent>
		            	</Card>  
		            	</div>

	             	</div>
	            	
	           
	          </main>
	          {after}
        </div>
      </div>
    );
    } 
    else if(this.state.formSelected==='contactTracing'){  
    	return(  
    		<ContactTracing/>
    		); 
    } 

    else if(this.state.formSelected==='contactCaseLine'){  
    	return(  
    		<ContactCaseLine/>
    		); 
    } 

    else if(this.state.formSelected==='taTool'){  
    	return(  
    		<TaTool/>
    		); 
    } 

    else if(this.state.formSelected==='verbalSceening'){  
    	return(  
    		<VerbalScreening/>
    		); 
    }
    else if(this.state.formSelected==='tbDiagnosis'){  
    	return(  
    		<TbDiagnosis/>
    		); 
    } 
     else if(this.state.formSelected==='tbTreatment'){  
    	return(  
    		<TbTreatment/>
    		); 
    }
    
    
  }
}

	FormSelection.propTypes = {
	  classes: PropTypes.object.isRequired,
	};

export default withStyles(styles)(FormSelection);