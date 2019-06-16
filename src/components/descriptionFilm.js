import React,{Component} from 'react' 
import DataLocal from '../services/dataLocal';
import { Card, CardMedia, CardHeader, CardContent, Typography, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'; 

const styles = 
{
    media: {
    height: 0,
    paddingTop: '56%', 
    marginTop:'5'
    }
};


class DescriptionFilm extends Component{

     render(){

         
         const film= DataLocal.getData()
         if(film===undefined || film===null){
            return(<div>
                {  this.props.history.push('/') }
            </div>)
         }
         else{
            var originalUrl="../iconnu.png"
            var mediumUrl="../iconnu.png"
            console.log(film)
            if(film.show.image!=null){
                originalUrl=film.show.image.original
                mediumUrl=film.show.image.medium
            }
                 
            return(

                <Grid  container>
                    <br/><br/>
                    <Grid lg={6} xs={12}>
                        <Card  >
                        
                        <Avatar aria-label="Recipe"  src={mediumUrl}>
                                {film.show.status}
                        </Avatar>
                            
                            <CardHeader title={film.show.name} subtilte={film.show.type}/>
                        
                            <CardMedia  
                                    style={styles.media}
                                    image={originalUrl}
                                    alt={film.show.type}
                                    className="center" />
                        </Card>
                    </Grid>
                <Grid  lg={6} xs={12}>
                    <Card>
                    <Typography paragraph variant='h3'>
                            
                            La série est en {film.show.language}
                     </Typography>
                     <Typography paragraph variant='h4'>
                         { film.show.status=="Ended"?" la série est términée":
                            "Elle tourne toujours"
                        } 
                     </Typography>
                        <Typography paragraph={true}  variant='caption'>

                            {film.show.summary}
                        </Typography>
                        
                        </Card>
                        { this.visitSite(film.show.officialSite) }
                </Grid>
                <br/><br/><br/><br/>
            </Grid>
            );
         }
     }


     visitSite(data){
         if(data!=null){
             return(
                <a href={data} target="_blank">
                    Visiter le site officiel 
                </a> 
             )
         }
     }
}

export default DescriptionFilm;