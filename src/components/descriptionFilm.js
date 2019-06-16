import React,{Component} from 'react' 
import DataLocal from '../services/dataLocal';
import { Card, CardMedia, CardHeader, CardContent, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'; 

const styles = 
{
    media: {
    height: 0,
    paddingTop: '45%', 
    marginTop:'5',
    width: '50%'
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
            var originalUrl="inconnu" 
            var mediumUrl="inconnu"
            console.log(film)
            if(film.show.image!=null){
                originalUrl=film.show.image.original
                mediumUrl=film.show.image.medium
            }
                 
            return(
                <Card  >
                 
                  <Avatar aria-label="Recipe"  src={mediumUrl}>
                        {film.show.status}
                   </Avatar>
                       
                    <CardHeader title={film.show.name} subtilte="hhe"/>
                
                    <CardMedia  
                            style={styles.media}
                            image={originalUrl}
                            alt={film.show.type}
                            className="center" />
                <CardContent>
                     
                </CardContent>
                <Typography paragraph>
                    {film.show.summary}
                 </Typography>
                
            </Card>
            );
         }
     }
}

export default DescriptionFilm;