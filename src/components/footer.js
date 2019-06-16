import React,{Component} from 'react'
import { Grid, Paper } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';



const useStyles = makeStyles({
    paper: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 10,
    height: 200,
    padding: '0 30px',
    textAlign: 'center',
    },
  });


class Footer extends Component{
   
     render(){
         return(
            <div id="footer">
        <Grid container  className={useStyles.paper}>
            <Grid item  xs={4}>
                <Paper className={useStyles.paper}>
                    <a href="/">Accueil</a>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={useStyles.paper}>
                    <a href="https://nobo.life/">Simplifier la vie avec NOBO</a>
                </Paper>
            </Grid>
            
            <Grid item xs={4}>
                <Paper className={useStyles.paper}>
                    <a href="https://formations.dauphine.fr/offre/fr-FR/fiche/A5IFO/programme//#FRUAI0750736TPRPRA5AMID-100">
                        Programme du master 2 ID
                    </a>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={useStyles.paper}>
                    <a href="https://www.dauphine.psl.eu/fr/index.html">Université du Candidat</a>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={useStyles.paper}>
                    <a href="https://www.linkedin.com/in/ibrahima-soumare-848ab5151/">A propos du développeur</a>    
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={useStyles.paper}>
                    <a href="https://github.com/isoume">Profit github du candidat</a>
                </Paper>
            </Grid>
      </Grid>
            </div>
         );
     }
}

export default Footer;