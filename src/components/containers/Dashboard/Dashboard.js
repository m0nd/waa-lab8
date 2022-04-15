import { useState } from "react";
import Posts from '../Posts/Posts'
import './Dashboard.css'

const Dashboard = () => {
    const [posts, setPosts]  = useState(
        [
            {id: 111, title: 'Happiness', author: 'John'},
            {id: 112, title: 'MIU', author: 'Dean'},
            {id: 113, title: 'Enjoy Life', author: 'Jasmine'}
        ]
    );

    const updateTitle = (event) => {
        event.preventDefault();
        const postsCopy = [...posts];
        postsCopy[0].title = event.target[0].value;
        setPosts(postsCopy);
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="dash">
                <Posts posts={posts} />
            </div>
            <div>
                <h3>Update first component's title</h3>
                <form onSubmit={updateTitle}>
                    <input type="text" placeholder="Type new title here" /> 
                    <button type="submit">Update Title</button>
                </form>
            </div>
        </div>
    );
}

export default Dashboard;