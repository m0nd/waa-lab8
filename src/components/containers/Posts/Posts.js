import { useEffect, useState } from 'react';
import Post from '../../Post/Post'
import axios from 'axios'

const Posts = (props) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('http://localhost:8080/api/v1/posts')
        .then((response) => {
            setPosts(response.data);
        })
    };

    useEffect(() => {
        fetchPosts()
    }, [props.fetchState]);

    const postComponents = posts.map(post => {
        return <Post 
            key={post.id} 
            post={post} 
            setSelectedPostId={props.setSelectedPostId} />
    } )
    
    return postComponents;
}

export default Posts;