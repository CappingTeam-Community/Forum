import {
    Avatar,
    Box,
    Card,
    CardActionArea, CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container, Grid,
    IconButton,
    Typography
} from "@mui/material";
import {orange, red} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite"
import {Component} from "react";

interface Props {
    id: number,
    author: string,
    title: string,
    date: string,
    PostImage: string;
    categories: Array<any>,
    voteCount: number,
    postBody: string,
}

interface State {
    isLiked: boolean;
}



class PostComponent extends Component<Props, State> {
    private id: number;
    private author: any;
    private title: string;
    private date: string;
    private image: string;
    private categories: Array<any>;
    private voteCount: number;
    private postBody: string;
    private route:string;
    private avatarColor: string;
    

    constructor(props: any) {
        super(props);
        this.id = this.props.id;
        this.author = this.props.author;
        this.title = this.props.title;
        this.date = new Date(Date.parse(this.props.date)).toDateString();
        this.image = this.props.PostImage
        this.categories = this.props.categories;
        this.voteCount = this.props.voteCount;
        this.postBody = this.props.postBody;
        this.route = '/forum/' + this.id;
        this.avatarColor = this.getRandomColor();

            this.state = {
                isLiked: false
            }

        this.onLikeClick = this.onLikeClick.bind(this);
    }
    private onLikeClick() {
        if(!this.state.isLiked) {
            this.setState({
                isLiked: true
            });
            this.voteCount ++;
        } else {
            this.setState( {
                isLiked: false
            });
            this.voteCount --;
        }
    }
    private getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    

    render() {
        return (
            <Container sx={{ display: 'flex'}}>
                <Box sx={{ m:'auto' }}>
                    <IconButton aria-label="add to favorites" onClick={this.onLikeClick} sx={ this.state.isLiked ? {color: red[500]}: {color:null} }>
                        <FavoriteIcon />
                    </IconButton>
                    <Typography variant='body1' color='text.primary' sx={{ textAlign: 'center'}}>
                        {this.voteCount}
                    </Typography>
                </Box>
                <Card sx={{width: 900, height: ""}}>
                    {/* TODO: Replace test with card forum page */}
                    <CardActionArea href={this.route}>
                        <CardHeader
                            avatar={<Avatar sx={{bgcolor: this.avatarColor}}>{this.author.charAt(0)}</Avatar>}
                            title= {
                                <Typography sx={{ overflow: 'hidden'}}>{this.title}</Typography>
                            }
                            subheader={this.date}
                        />
                        <Box sx={{
                            display:'flex',
                            mb:0
                        }}  whiteSpace="pre-line">
                            <CardMedia
                                component="img"
                                width="100"
                                height="150"
                                src={this.image}
                                alt="image not "
                                sx={{width:'200px'}}

                            />
                            <CardContent sx={{pl:4}}>
                                <Typography paragraph variant='body2' color='text.secondary'>
                                    {this.postBody}
                                </Typography>
                            </CardContent>
                        </Box>
                    </CardActionArea>
                </Card>
            </Container>
        )};
}
export default PostComponent;