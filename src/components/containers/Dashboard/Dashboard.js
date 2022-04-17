import { useState } from "react";
import AddPost from "../../AddPost/AddPost";
import PostDetails from "../../PostDetails/PostDetails";
import Posts from '../Posts/Posts'
import './Dashboard.css'

const Dashboard = () => {
    const [selectedPostId, setSelectedPostId] = useState(0);

    const [authors, setAuthors] = useState([
        {id: 100, name: 'Shannon'},
        {id: 101, name: 'David'},
        {id: 102, name: 'Kyle'},
    ]);

    const [fetchState, setFetchState] = useState(true);

    const toggleFetchState = () => {
        setFetchState(!fetchState);
    }

    // const updateTitle = (event) => {
    //     event.preventDefault();
    //     const postsCopy = [...posts];
    //     postsCopy[0].title = event.target[0].value;
    //     setPosts(postsCopy);
    // };

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="dash">
                <Posts setSelectedPostId={setSelectedPostId} fetchState={fetchState} />
            </div>
            {/* <div>
                <h3>Update first component's title</h3>
                <form onSubmit={updateTitle}>
                    <input type="text" placeholder="Type new title here" /> 
                    <button type="submit">Update Title</button>
                </form>
            </div> */}
            <PostDetails selectedPostId={selectedPostId} setSelectedPostId={setSelectedPostId} toggleFetchState={toggleFetchState} />
            <AddPost authors={authors} toggleFetchState={toggleFetchState} />
        </div>
    );
}

export default Dashboard;