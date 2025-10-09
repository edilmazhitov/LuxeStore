import cn from "classnames"

const Company = ({revers}) => {

  return (
    <section className="company">
      <div className="container">
        <h2 className="company__title">О компании</h2>
        <div className={cn("company__block", {
          "revers": revers
        })}>
          <div className="company__left">
            <p className="company__text">
              Согласно ставшей уже классической работе Филипа Котлера,
              позиционирование на рынке <br />
              регулярно отталкивает сегмент рынка. Соц-дем характеристика
              аудитории вырождена. Жизненный <br />
              цикл продукции основан на тщательном анализе данных. Ребрендинг,
              следовательно, экономит <br />
              рейтинг. Маркетингово-ориентированное издание, не меняя концепции,
              изложенной выше, <br />
              осмысленно специфицирует рейтинг.
            </p>
            <p className="company__text">
              Стратегическое планирование тормозит культурный департамент
              маркетинга и продаж, учитывая <br />
              современные тенденции. Ретроконверсия национального наследия
              интегрирована. Исходя из <br />
              структуры пирамиды Маслоу, лидерство в продажах решительно
              изменяет ребрендинг
            </p>
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
                <h3 className="company__subtitle">
                  Собственное <br /> производство
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
                <h3 className="company__subtitle">
                  Ускоренная <br /> доставка
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
                <h3 className="company__subtitle">
                  Собственное <br /> производство
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
  )
}

export default Company
