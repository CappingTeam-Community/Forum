import { BoxProps, Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Component } from 'react';
import styles from './DiscoveryPage.module.css';



interface PropsCat {
    title: string,
    description: string,
    image: string,
    link: string

}
class DiscoveryComponet extends Component<PropsCat, {}>{
    private title: string;
    private description: string;
    private image: string;
    private link: string;

    constructor(props: any) {
        super(props);
        this.title = this.props.title;
        this.description = this.props.description;
        this.image = this.props.image;
        this.link = this.props.link;
    }
    render() {
        return (
            <Container>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href={this.link}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={this.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {this.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {this.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button size="medium">Explore Topic</Button>
                    </CardActions>
                </Card>
            </Container>
        )
    };
}
export default DiscoveryComponet;