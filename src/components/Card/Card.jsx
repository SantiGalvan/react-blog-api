import cardStyle from './Card.module.scss';

const Card = ({ title, content, category, tags, user }) => {
    return (
        <div className="card">
            <div className={`card-header text-center ${cardStyle.title}`} style={{ backgroundColor: category.color }}>
                <h2>{title}</h2>
            </div>
            <div className={`card-body ${cardStyle.body}`}>
                <p className="text-center">{content}</p>
                <p className="text-center">{user.name}</p>
                <p>
                    <strong>Categoria: </strong>
                    <span className="badge" style={{ backgroundColor: category.color }}>{category.label}</span>
                </p>
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
            <div className="card-footer"></div>
        </div >
    )
}

export default Card;