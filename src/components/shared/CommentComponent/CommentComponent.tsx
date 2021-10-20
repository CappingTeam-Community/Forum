import {
    Avatar,
    Box,
    Card,
    CardActionArea, CardActions,
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
import Button from "@mui/material/Button";

interface Props {
    id: number,
    author: string,
    date: string,
    tags: Array<any>,
    voteCount: number,
    commentBody: string,
}

interface State {
    isLiked: boolean;
}

class CommentComponent extends Component<Props, State> {
    private id: number;
    private author: any;
    private date: string;
    private tags: Array<any>;
    private voteCount: number;
    private commentBody: string;

    constructor(props: any) {
        super(props);
        this.id = this.props.id;
        this.author = this.props.author;
        this.date = this.props.date;
        this.tags = this.props.tags;
        this.voteCount = this.props.voteCount;
        this.commentBody = this.props.commentBody;

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
                <Card sx={{width: 400, height: 125}}>
                    {/* TODO: Replace test with card forum page */}
                        <CardHeader
                            avatar={<Avatar sx={{bgcolor: orange[500]}}>{this.author.charAt(0)}</Avatar>}
                            subheader={this.author.username}
                        />
                        <Container sx={{ display:'flex', pb:3}}>
                            <CardContent>
                                <Typography variant='body2' color='text.secondary'>
                                    {this.commentBody}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href='commenttest' size='small'sx={{ml:'auto', mr:0}} >Reply</Button>
                            </CardActions>
                        </Container>
                    </Card>
            </Container>
        )};
}
export default CommentComponent;