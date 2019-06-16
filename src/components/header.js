import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography   from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom' 
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    },
  });

var canGoAccueil=false

class Header extends Component{
  
    
 
     render(){
         return(
             <div>
                 <AppBar position="static" color='inherit'>
                      
                     <Toolbar >
                         
                         <Typography variant="button" color="inherit">
                         <Link to="/listFilms"  underline='none'>
                            <Button  sm="lg"  color='primary' >La liste des films </Button> 
                         </Link>
                        {this.accueil()}
                         </Typography>
                     </Toolbar>
                 </AppBar>
             </div>
         );
     }


     accueil(){
         if(canGoAccueil){
            return(
                <Button  sm="lg"  color='primary' onClick={() => this.versAccueil()} >La liste des films </Button> 
            )
         }
    }

    versAccueil(){
        let path = '/';
        this.props.history.push(path); 
    }
}

export default Header;