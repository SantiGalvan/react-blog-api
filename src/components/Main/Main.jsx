import { useState, useEffect } from "react";
import axios from "axios";
import PostsList from "./PostsList";
import Form from "../Form/Form";
import { TiPlus } from "react-icons/ti";
import { IoIosListBox } from "react-icons/io";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const Main = () => {

    const [isForm, setIsForm] = useState(false);

    const [tags, setTags] = useState([]);
    const fetchTags = async () => {
        const res = await axios.get(`${apiUrl}/tags`);
        const apiTags = res.data;
        setTags(apiTags);
    }

    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        const res = await axios.get(`${apiUrl}/categories`);
        const apiCategories = res.data;
        setCategories(apiCategories);
    }

    useState(() => {
        fetchTags();
        fetchCategories();
    }, [])

    return (
        <main>

            {/* Section Option */}
            <section id="option">
                <div className="d-flex justify-content-center gap-3">

                    <button
                        className="btn btn-primary d-flex align-items-center gap-1"
                        onClick={() => setIsForm(curr => !curr)}
                    >
                        {isForm ?
                            <>
                                <IoIosListBox />Lista Posts
                            </> :
                            <>
                                <TiPlus />Crea Post
                            </>
                        }
                    </button>

                </div>
            </section>

            {
                isForm ?
                    <Form
                        tags={tags}
                        categories={categories}
                        onCreate={() => setIsForm(false)}
                    /> :
                    <PostsList />
            }
        </main>
    )
}

export default Main;