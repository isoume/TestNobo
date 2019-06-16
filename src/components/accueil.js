import React,{Component} from 'react'
import { makeStyles } from '@material-ui/styles';
import { Paper, Grid, Card, CardHeader, CardMedia, Typography } from '@material-ui/core';




const stylesCard = 
{
    media: {
    height: 0,
    paddingTop: '45%', 
    marginTop:'3',
    borderRadius:'300px'
    }
};



class Accueil extends Component{

    render(){
        return(
            <div> 
                <Grid    xs={12}>
                    <Paper   align="center">
                        <br/>
                         Ce projet est un test fait en Reactjs 
                         <br/>
                    </Paper>
                    <Card >
                            <CardHeader align="center" 
                                title={"La version de node utilisée c'est : v8.12.0 ; La version de REACTJS utilisée c'est : 3.0.1"}
                            />
                            <Typography align="center"> 
                                 Je reste à votre entière disposition pour toutes informations complémentaires 
                            </Typography>
                            <CardMedia 
                            style={stylesCard.media}
                            image='../accueil2.jpg'
                            >

                            </CardMedia>
                     </Card>
                     <Paper   align="center">
                         <br/><br/><br/><br/>
                         Je vous remercie d'avoir consacré votre temps à regarder ce travail, à bientot
                         <br/><br/><br/><br/>
                    </Paper>
                </Grid>
            </div>
        )
    }


    
}



export default Accueil;