import { Link } from 'react-router-dom'
import { GoHeartFill } from 'react-icons/go'
import { useState } from 'react'
import cn from 'classnames'
import IMG from '../assets/CardTestImage.png'

type ProductsT = {
  id: number
  new: boolean
  title: string
  image: string
  price: number
}

export const Card = () => {
  const products: ProductsT[] = [
    {
      id: 1,
      new: true,
      title: 'Кольцо из белого золота  с брилиантом',
      image: IMG,
      price: 5000,
    },
    {
      id: 2,
      new: true,
      title: 'Кольцо из белого золота  с брилиантом',
      image: IMG,
      price: 5200,
    },
    {
      id: 3,
      new: false,
      title: 'Кольцо из белого золота  с брилиантом',
      image: IMG,
      price: 10000,
    },
    {
      id: 1,
      new: false,
      title: 'Кольцо из белого золота  с брилиантом',
      image: IMG,
      price: 2000,
    },
  ]

  const [favorites, setFavorites] = useState<boolean>(false)

  return (
    <div className="card">
      {products.map((item) => (
        <div className="card__block" key={item.id}>
          <div className="card__top">
            {item.new && (
              <div className="card__new">
                <p className="card__new-text">Новинка</p>
              </div>
            )}

            <button
              className="card__favorites"
              onClick={() => setFavorites(!favorites)}
            >
              <GoHeartFill
                className={cn('card__favorites-icon', {
                  'is-active': favorites,
                })}
              />
            </button>
          </div>
          <Link to="/">
            <img
              className="card__images"
              src={item.image}
              alt="Card Image"
              width="307"
              height="238"
              loading="lazy"
            />
          </Link>
          <h2 className="card__title">{item.title}</h2>
          <h2 className="card__price">
            {item.price.toLocaleString('ru-RU')} ₽
          </h2>
        </div>
      ))}
    </div>
  )
}
