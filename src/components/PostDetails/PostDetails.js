//import axios from 'axios';
import { useEffect, useState } from 'react';
import { getPostById, deletePostById } from '../../services/apiService'
import './PostDetails.css'

const PostDetails = (props) => {
    const {selectedPostId, setSelectedPostId} = props;
    const [post, setPost] = useState(undefined);

    useEffect( () => {
        getPostById(selectedPostId)
        //axios.get(`http://localhost:8080/api/v1/posts/${props.selectedPostId}`)
        .then((response) => {
            setPost(response.data);
        });
    }, [selectedPostId]);

    const doDeletePost = (postId) => {
        deletePostById(postId)
        .then( (response) => {
            props.toggleFetchState();
            setSelectedPostId(0);
            console.log('Post Deleted: ' + response.data);
        })
    };

    return selectedPostId !== 0 ? (
        <div className="postDetails">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
                <button>Edit</button>
                <button onClick={ () => doDeletePost(post.id)}>Delete</button>
            </div>
        </div>
    ) : null
}

export default PostDetails;