import './Card.scss'
import { Link } from 'react-router-dom'

const PromotionCard = ({ promotion }) => {
  return (
    <div className="card__container">
      <img
        src={promotion.imageUrl}
        alt="Card with the price and with the link to buy the product"
        className="card__img"
      />

      <div className="card__info">
        <h1 className="card__title">{promotion.title}</h1>
        <span className="card__price">R$ {promotion.price}</span>

        <footer className="card__footer">
          {promotion.comments.length > 0 && (
            <div className="card__comment">
              &quot;{promotion.comments[0].comment}&quot;
            </div>
          )}

          <div className="card__comments-count">
            {promotion.comments.length}{' '}
            {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
          </div>

          <a
            href={promotion.url}
            target="_blank"
            rel="noreferrer"
            className="card__link"
          >
            IR PARA O SITE
          </a>
          <Link to={`/edit/${promotion.id}`}>Editar</Link>
        </footer>
      </div>
    </div>
  )
}

export { PromotionCard }
