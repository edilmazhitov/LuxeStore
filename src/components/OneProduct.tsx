import { GoHeartFill } from 'react-icons/go'
import cn from 'classnames'
import { useState } from 'react'
import Image from '../../public/Ring.png'
import Image2 from '../../public/information-company-image.png'
import BuySet from './BuySet.tsx'

type ImgAll = {
  img: string
}

type OneProductType = {
  id: number
  title: string
  price: number
  imgUrl: string
  article: string
  allImage: ImgAll[]
  weight: string
  priceGram: number
  typeMetal: string
}

const OneProduct = () => {
  const allImg: ImgAll[] = [{ img: Image }, { img: Image2 }, { img: Image }]

  const oneProduct: OneProductType = {
    id: 1,
    title: 'Кольцо из Белого золота с бриллиантами',
    imgUrl: Image,
    allImage: allImg,
    price: 10000,
    article: '10-0131',
    weight: '1.48 - 1.75',
    priceGram: 198,
    typeMetal: 'Серебро 925',
  }

  const [favorites, setFavorites] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string>(oneProduct.imgUrl)

  return (
    <div className="one-product">
      <div className="one-product__block">
        <div className="one-product__left">
          <nav className="one-product__nav">
            {oneProduct.allImage.map((imgItem, idx) => (
              <img
                key={idx}
                src={imgItem.img}
                alt={`Preview ${idx + 1}`}
                className={cn('one-product__nav-image', {
                  'is-active': selectedImage === imgItem.img,
                  'no-is-active': selectedImage !== imgItem.img,
                })}
                onClick={() => setSelectedImage(imgItem.img)}
                width="102"
                height="102"
              />
            ))}
          </nav>
        </div>

        <img
          className="one-product__image"
          src={selectedImage}
          alt={oneProduct.title}
          width="470"
          height="400"
        />
        <div className="one-product__right">
          <div className="one-product__right-top">
            <h2 className="one-product__title">{oneProduct.title}</h2>
            <button
              className="one-product__favorites"
              onClick={() => setFavorites(!favorites)}
            >
              <GoHeartFill
                className={cn('one-product__favorites-icon', {
                  'is-active': favorites,
                })}
              />
            </button>
          </div>

          <h2 className="one-product__price">
            {oneProduct.price.toLocaleString('ru-RU')} ₽
          </h2>

          <ul className="one-product__information-list">
            <li className="one-product__information-item">
              <p className="one-product__information-text">
                Артикул: {oneProduct.article}
              </p>
            </li>
            <li className="one-product__information-item">
              <p className="one-product__information-text">
                Вес: {oneProduct.weight} г
              </p>
            </li>
            <li className="one-product__information-item">
              <p className="one-product__information-text">
                Цена за грамм: {oneProduct.priceGram} ₽
              </p>
            </li>
            <li className="one-product__information-item">
              <p className="one-product__information-text">
                Металл: {oneProduct.typeMetal}
              </p>
            </li>
          </ul>

          <button className="one-product__add-to-cart">В корзину</button>

          <BuySet />
        </div>
      </div>
    </div>
  )
}

export default OneProduct
