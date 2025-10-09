import { Link } from 'react-router-dom'
import { SlBasket } from 'react-icons/sl'

type NavListType = {
  to: string
  content: string
}

const NavigationBar = () => {
  const navList: NavListType[] = [
    { to: '/', content: 'Главная' },
    { to: '/', content: 'Католог' },
    { to: '/about-us', content: 'О компании' },
    { to: '/', content: 'Контакты' },
  ]

  return (
    <div className="navigation-bar">
      <div className="container">
        <div className="navigation-bar__block">
          <nav className="navigation-bar__nav">
            <ul className="navigation-bar__list">
              {navList.map((item) => (
                <li key={item.content} className="navigation-bar__item">
                  <Link to={item.to} className="navigation-bar__link">
                    {item.content}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/" className="navigation-bar__basket">
            <SlBasket className="navigation__bar-icon" />
            <p className="navigation__bar-text">В корзине 2 товара</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
