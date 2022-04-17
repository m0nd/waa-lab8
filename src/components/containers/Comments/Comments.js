import Comment from "../../Comment/Comment";

const Comments = (props) => {
    const {comments} = props;

    const commentComponents = comments.map(comment => {
        return (<li><Comment key={comment.id} text={comment.name} /></li>)
    });

    const output = (
    <div className="flex justify-center mb-3">
        <ul className="text-left">{commentComponents}</ul>
    </div>);
    
    return output;
}

export default Comments;