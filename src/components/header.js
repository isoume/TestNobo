import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography   from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom' 

  

class Header extends Component{
  
    constructor(props){
        super(props)
    }
 
     render(){
         return(
             <div>
                 <AppBar position="static" color='inherit'>
                      
                     <Toolbar >
                        {this.accueil()}
                         <Typography variant="button" color="inherit">
                         <Link to="/listFilms"  underline='none'>
                            <Button  sm="lg"  color='primary'  >La liste des films </Button> 
                         </Link>
                        
                         </Typography>
                     </Toolbar>
                 </AppBar>
             </div>
         );
     }


     accueil(){ 
            return(
                <Link to="/" float="right">
                    <Button  sm="lg"  color='primary'  >accueil </Button> 
                </Link>
            )
       
    }

    
}

export default Header;