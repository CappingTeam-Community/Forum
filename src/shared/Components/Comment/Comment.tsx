import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    IconButton,
    Typography,
    List,
    Divider
} from "@mui/material";
import {orange, red} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite"
import {Component} from "react";
import Button from "@mui/material/Button";
import {styled} from "@mui/system";


interface Props {
    id: number,
    author: string,
    date: string,
    tags: string,
    voteCount: number,
    commentBody: string,
}

interface State {
    isLiked: boolean;
}

class Comment extends Component<Props, State> {
    private id: number;
    private author: any;
    private date: string;
    private tags: string;
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
        const CommentBody = styled('div') ({
            overflowY: 'scroll',
            width:'500px',
            float: 'left',
            maxHeight:'148px',
            position:'relative',
            color:'green'

        });
        return (
            <Container sx={{ display: 'flex'}}>
               
            <Card sx={{width: 650, height: ""}}>
                {/* TODO: Replace test with card forum page */}
                    <CardHeader
                        avatar={<Avatar sx={{bgcolor: orange[500]}}>{this.author.charAt(0)}</Avatar>}
                        subheader={this.date}
                    />
                    <Container sx={{ display:'block', pb:3}}>
                    <List style={{maxHeight: '100%', overflow: 'auto'}} >
                        <CardContent>
                            <CommentBody>
                            <Typography variant='body2' color='text.secondary' sx={{pl:1,pr:1}}>
                                {this.commentBody}
                            </Typography>
                            <Typography color='text.secondary' sx={{pl:1,pr:1}}>
                                #{this.tags}
                            </Typography>
                            </CommentBody>
                        </CardContent>
                        <CardActions>
                            <Button href='commenttest' size='small'sx={{ml:'auto', mr:0}} >Reply</Button>
                        </CardActions>
                        </List>
                        <Divider />
                        <Box sx={{ m:'auto' }}>
                            <IconButton aria-label="add to favorites" onClick={this.onLikeClick} sx={ this.state.isLiked ? {color: red[500]}: {color:null} }>
                                <FavoriteIcon />
                                <Typography variant='body1' color='text.primary' sx={{ ml: 1, textAlign: 'center'}}>
                                {this.voteCount}
                            </Typography>
                            </IconButton>
                        </Box>
                    </Container>
                </Card>
        </Container>
        )};
}
export default Comment;