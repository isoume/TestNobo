import React,{Component} from 'react'
import { Grid, Paper } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';



const useStyles = makeStyles({
    paper: { 
    textAlign: 'center',
    border:0
    },
  });


class Footer extends Component{
   
     render(){
         return(
            <div id="footer" >
        <Grid container  className={useStyles.paper} align="center">
            <Grid item  xs={4}>
                <Paper className={useStyles.paper}>
                    <br/>
                    <a href="/">Accueil</a>
                    
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={useStyles.paper}>
                    <br/>
                    <a href="https://nobo.life/">Simplifier la vie avec NOBO</a>
                    
                </Paper>
            </Grid>
            
            <Grid item xs={4}>
                <Paper className={useStyles.paper}>
                    <br/>
                    <a href="https://formations.dauphine.fr/offre/fr-FR/fiche/A5IFO/programme//#FRUAI0750736TPRPRA5AMID-100" target="_blanck">
                        Programme du master 2 ID
                    </a>
                   
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={useStyles.paper}>
                    <br/>
                    <a href="https://www.dauphine.psl.eu/fr/index.html" target="_blanck">Université du Candidat</a>
                    
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={useStyles.paper}>
                    <br/> 
                    <a href="https://www.linkedin.com/in/ibrahima-soumare-848ab5151/" target="_blanck">
                        linkedin du candidat
                    </a>  
                     
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={useStyles.paper}>
                <br/>
                    <a href="https://github.com/isoume" target="_blanck">Profit github du candidat</a>
                    <br/> <br/><br/> <br/>
                </Paper>
            </Grid>
      </Grid>
            </div>
         );
     }
}

export default Footer;