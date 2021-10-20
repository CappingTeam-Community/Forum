import {
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    IconButton,
    Typography
} from "@mui/material";
import {orange, red} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite"
import {Component} from "react";

interface Props {
    id: number,
    authorData: Object,
    title: string,
    date: string,
    categories: Array<any>,
    voteCount: number,
    postBody: string,
}

interface State {
    isLiked: boolean;
}

class PostComponent extends Component<Props, State> {
    private id: number;
    private authorData: any;
    private title: string;
    private date: string;
    private categories: Array<any>;
    private voteCount: number;
    private postBody: string;

    constructor(props: any) {
        super(props);
        this.id = this.props.id;
        this.authorData = this.props.authorData;
        this.title = this.props.title;
        this.date = this.props.date;
        this.categories = this.props.categories;
        this.voteCount = this.props.voteCount;
        this.postBody = this.props.postBody;

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
                <Card sx={{maxWidth: 900}}>
                    {/* TODO: Replace test with card forum page */}
                    <CardActionArea href='/test'>
                        <CardHeader
                            avatar={<Avatar sx={{bgcolor: orange[500]}}>{this.authorData.username.charAt(0)}</Avatar>}
                            title={this.title}
                            subheader={this.date}
                        />
                        <Container sx={{ display:'flex', pb:3}}>
                            <CardMedia
                                component="img"
                                height="100"
                                width="100"
                                src='https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'
                                alt="endgame-image"
                                sx={{ width:'200px', height:'100px' }}
                            />
                            <CardContent>
                                <Typography variant='body2' color='text.secondary'>
                                    {this.postBody}
                                </Typography>
                            </CardContent>
                        </Container>
                    </CardActionArea>
                </Card>
            </Container>
        )};
}
export default PostComponent;