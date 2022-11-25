import { React, useEffect, useState } from 'react';
import burgerStyle from './BurgerIngredients.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import 'overlayscrollbars/overlayscrollbars.css';
import data from '../../utils/data';

//src/images/bun-02.png
function BurgerIngredients() {

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        
    }

    console.log(data[0]);
    return (
        <section className={burgerStyle.section}>
            <h1>Соберите бургер</h1>
                <form className={burgerStyle.menu}>
                    <button className={burgerStyle.button} onSubmit={handleSubmit}>
                        <p className={burgerStyle.textactive}>Булки</p>
                    </button>
                    <button className={burgerStyle.button} onSubmit={handleSubmit}>
                        <p className={burgerStyle.text}>Соусы</p>
                    </button>
                    <button className={burgerStyle.button} onSubmit={handleSubmit}>
                        <p className={burgerStyle.text}>Начинки</p>
                    </button>
                </form>
            <div className={burgerStyle.scroll}>
            <div className={burgerStyle.container}>
                <p className={burgerStyle.name}>Булки</p>
                <div className={burgerStyle.ingredients}>
                    {data.map((item) => (
                        <div className={burgerStyle.ingredient} key={item._id}>
                        {/*<Counter count={1} size="default" extraClass="m-1" />*/}
                            <img alt='burger blue' src={item.image}/>
                            <p>
                                <span>{item.price}</span>
                                <CurrencyIcon type="secondary" />
                            </p>
                            <p>{item.name}</p>
                    </div>
                    ))}
                    
                </div>
            </div>
            </div>

        </section>
    );
}

export default BurgerIngredients;