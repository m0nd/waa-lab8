import Post from '../../Post/Post'

const Posts = (props) => {
    const postComponents = props.posts.map(post => <Post className='post' key={post.id} id={post.id} title={post.title} author={post.author} />)
    
    return postComponents;
}

export default Posts;