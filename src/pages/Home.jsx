import { useOutletContext } from "react-router-dom";
import { Card } from "../components/Card/Card";

export const Home = () => {
    const {products} = useOutletContext()

    return (
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h1 className="content-main__title">Рекомендации для вас</h1>
                                <div className="content-main__list">
                                    {
                                        products.map(card => (
                                            <Card 
                                            key={card.id}
                                            id={card.id}
                                            title={card.title}
                                            price={card.price}
                                            address={card.address}
                                            date={card.date}
                                            img={card.img}/>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h2 className="content-side__title">Сервисы и услуги</h2>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        <div className="content-side__list-item">
                                            <img src="/images/side-info-1.svg" alt="side-info" className="content-side__list-item--img"/>
                                            <h5 className="content-side__list-item--title">Доставка</h5>
                                            <p className="content-side__list-item--text">Проверка при получении и возможность бесплатно вернуть товар</p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img src="/images/side-info-2.svg" alt="side-info" className="content-side__list-item--img"/>
                                            <h5 className="content-side__list-item--title">Автотека</h5>
                                            <p className="content-side__list-item--text">Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах</p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img src="/images/side-info-3.svg" alt="side-info" className="content-side__list-item--img"/>
                                            <h5 className="content-side__list-item--title">Онлайн-бронирование жилья</h5>
                                            <p className="content-side__list-item--text">Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России</p>
                                        </div>
                                    </div>

                                    <div className="content-side__footer">
                                        <p className="content-side__footer--item">© ООО «E-shop», 2012–2024</p>
                                        <a href="#!" className="content-side__footer--item">Политика конфиденциальности</a>
                                        <a href="#!" className="content-side__footer--item">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}