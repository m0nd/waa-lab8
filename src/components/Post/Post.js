import './Post.css'

const Post = (props) => {
    const { post } = props;
    return (
        <div className='post' onClick={() => props.setSelectedPostId(post.id)}>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Author: </p>
            <p>Content: <br /> {post.content}</p>
        </div>
    )
}

export default Post;