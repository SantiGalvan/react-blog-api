import cardStyle from './Card.module.scss';
import { FaSearch, FaTrashAlt } from "react-icons/fa";

const Card = ({ title, content, category, tags, user }) => {
    return (
        <div className="card text-center">
            <div className={`card-header ${cardStyle.title}`} style={{ backgroundColor: category.color }}>
                <h2>{title}</h2>
            </div>
            <div className={`card-body ${cardStyle.body}`}>
                <p>{content}</p>
                <p>{user?.name}</p>
                <p>
                    <strong>Tags: </strong>
                    {tags.map(tag => (
                        <span
                            className="badge rounded-pill me-2"
                            key={tag.id}
                            style={{ backgroundColor: tag.color }}
                        >{tag.label}</span>
                    ))}
                </p>

            </div>
            <div className="card-footer d-flex justify-content-center gap-3">
                <button className='btn btn-primary d-flex align-items-center gap-1'><FaSearch />Vedi</button>
                <button className='btn btn-danger d-flex align-items-center gap-1'><FaTrashAlt />Cancella</button>
            </div>
        </div >
    )
}

export default Card;