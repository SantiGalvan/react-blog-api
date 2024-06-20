import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
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
        <section className="container">
            <div className="row g-4">
                {posts?.map(({ id, title, content, category, tags, user }) => (
                    <div key={id} className="col-4">
                        <Card
                            title={title}
                            content={content}
                            category={category}
                            tags={tags}
                            user={user}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PostsList;