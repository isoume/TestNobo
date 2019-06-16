import React,{Component} from 'react'
import { makeStyles } from '@material-ui/styles';
import { Paper, Grid, Card, CardHeader, CardMedia } from '@material-ui/core';




const stylesCard = 
{
    media: {
    height: 0,
    paddingTop: '56%', 
    marginTop:'0',
    borderRadius:'50px'
    }
};



class Accueil extends Component{

    render(){
        return(
            <div> 
                <Grid    xs={12}>
                    <Paper   >
                         Ce projet est un test fait en Reactjs 
                    </Paper>
                    <Card >
                            <CardHeader></CardHeader>
                            <CardMedia 
                            style={stylesCard.media}
                            image='../accueil.png'
                            >

                            </CardMedia>
                     </Card>
                </Grid>
            </div>
        )
    }
}



export default Accueil;