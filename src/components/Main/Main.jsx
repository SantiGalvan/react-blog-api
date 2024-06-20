import { useState } from "react";
import PostsList from "./PostsList";
import Form from "../Form/Form";
import { TiPlus } from "react-icons/ti";
import { IoIosListBox } from "react-icons/io";

const Main = () => {

    const [isForm, setIsForm] = useState(false);

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
                    <Form /> :
                    <PostsList />
            }
        </main>
    )
}

export default Main;