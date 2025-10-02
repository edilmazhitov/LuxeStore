import Person from "../assets/Person.png"

import catalogImgOne from "../assets/CatalogImage1.png"
import catalogImgTwo from "../assets/CatalogImage2.png"
import catalogImgTree from "../assets/CatalogImage3.png"
import catalogImgFour from "../assets/CatalogImage4.png"
import { Card } from "../components/Card.tsx";


const Home = () => {
  return (
    <main className="main">
      <section className="information">
        <div className="container">
          <div className="information__block">
            <div className="information__left">
              <img
                className="information__person-img"
                src={Person}
                alt=""
                width="456"
                height="611"
                loading="lazy"
              />
              <img
                className="information__ring-img"
                src="./Ring.png"
                alt=""
                width="400"
                height="320"
                loading="lazy"
              />
            </div>
            <div className="infortation__rigth">
              <h1 className="information__title">
                Кольцо из Белого <br />
                золота с бриллиантами
              </h1>
              <ul className="information__list">
                <li className="information__list-item">
                  <p className="information__list-text">
                    Материал.................................Красное золото 585 пробы
                  </p>
                </li>
                <li className="information__list-item">
                  <p className="information__list-text">
                    Примерный вес........................................................0.86 г
                  </p>
                </li>
                <li className="information__list-item">
                  <p className="information__list-text">
                    Вставка................................Бриллиант (23 шт, 0.069 карат)
                  </p>
                </li>
              </ul>
              <button className="information__button">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="catalog">
        <div className="container">
          <h2 className="catalog__title">
            Каталог
          </h2>
          <ul className="catalog__card-list">
            <li className="catalog__card-list-item">
              <img
                className="catalog__card-image"
                src={catalogImgOne}
                alt=""
                width="345"
                height="470"
                loading="lazy"
              />
              <h3 className="catalog__card-title">Кольцы</h3>
              <p className="catalog__card-description">
                Медиаплан продуцирует нестандартный <br />
                подход. Наряду с этим, анализ рыночных
              </p>
            </li>
            <li className="catalog__card-list-item">
              <img
                className="catalog__card-image"
                src={catalogImgTwo}
                alt=""
                width="345"
                height="470"
                loading="lazy"
              />
              <h3 className="catalog__card-title">Кресты</h3>
              <p className="catalog__card-description">
                Медиаплан продуцирует нестандартный <br />
                подход. Наряду с этим, анализ рыночных
              </p>
            </li>
            <li className="catalog__card-list-item">
              <img
                className="catalog__card-image"
                src={catalogImgTree}
                alt=""
                width="345"
                height="470"
                loading="lazy"
              />
              <h3 className="catalog__card-title">Браслеты</h3>
              <p className="catalog__card-description">
                Медиаплан продуцирует нестандартный <br />
                подход. Наряду с этим, анализ рыночных
              </p>
            </li>
            <li className="catalog__card-list-item">
              <img
                className="catalog__card-image"
                src={catalogImgFour}
                alt=""
                width="345"
                height="470"
                loading="lazy"
              />
              <h3 className="catalog__card-title">Серьги</h3>
              <p className="catalog__card-description">
                Медиаплан продуцирует нестандартный <br />
                подход. Наряду с этим, анализ рыночных
              </p>
              <img
                className="catalog__card-logo"
                src="./LogoText.png"
                alt="Logo"
                width="380"
                height="426"
                loading="lazy"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="interesting">
        <div className="container">
          <h2 className="interesting__title">
            Вам будет интересно
          </h2>
          <Card />

          <p className="interesting__text">
            Стратегическое планирование тормозит культурный департамент маркетинга и продаж, учитывая <br />
            современные тенденции. Ретроконверсия национального наследия интегрирована. Исходя из <br />
            структуры пирамиды Маслоу, лидерство в продажах решительно изменяет ребрендинг.
          </p>
        </div>
      </section>
      <section className="company">
        <div className="container">
          <h2 className="company__title">О компании</h2>
          <div className="company__block">
            <div className="company__left">
              <ul className="company__list">
                <li className="company__list-item">
                  <div className="company__icon">
                    <img
                      src="./icons/company-icon1.png"
                      alt=""
                      width="47"
                      height="51"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="company__subtitle">Собственное <br /> производство
                  </h3>
                </li>
                <li className="company__list-item">
                  <div className="company__icon">
                    <img
                      src="./icons/company-icon2.png"
                      alt="Ускоренная доставка"
                      width="54"
                      height="34"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="company__subtitle">Ускоренная <br /> доставка
                  </h3>
                </li>
                <li className="company__list-item">
                  <div className="company__icon">
                    <img
                      className="company__image"
                      src="./icons/company-icon3.png"
                      alt="Собственное производство"
                      width="39"
                      height="50"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="company__subtitle">Собственное <br /> производство
                  </h3>
                </li>
              </ul>
            </div>
            <div className="company__right">
              <img
                className="company__image"
                src="./information-company-image.png"
                alt=""
                width="656"
                height="656"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};


export default Home;