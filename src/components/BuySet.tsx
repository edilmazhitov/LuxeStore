import Image from '../../public/Ring.png'
import Image2 from '../../public/information-company-image.png'

const BuySet = () => {
  return (
    <div className="buy-set">
      <h2 className="buy-set__title">Купить комплект</h2>
      <div className="buy-set__block">
        <div className="buy-set__left">
          <img
            className="buy-set__image"
            src={Image}
            alt="set Image"
            width="117"
            height="117"
            loading="lazy"
          />
          <p className="buy-set__plus">+</p>
          <img
            className="buy-set__image"
            src={Image2}
            alt="set Image"
            width="117"
            height="117"
            loading="lazy"
          />
        </div>
        <div className="buy-set__rigth">
          <button className="buy-set__button">Купить за 25 000 ₽</button>
        </div>
      </div>
    </div>
  )
}

export default BuySet
