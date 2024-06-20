import axios from "axios";
import { useState, useEffect } from "react";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostsList = () => {

    const [posts, setPosts] = useState(null);

    const fetchPosts = async () => {
        const res = await axios.get(`${apiUrl}/posts`);
        const apiPosts = res.data.data;
        setPosts(apiPosts);
    }

    useEffect(() => {
        fetchPosts();
    }, [])


    return (
        <section>
            <ul>
                {posts?.map(post => (
                    <li
                        key={post.id}
                    >{post.title}</li>
                ))}
            </ul>
        </section>
    )
}

export default PostsList;