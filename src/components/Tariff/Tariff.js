import React from 'react';
import styles from '../styles/common.module.css'; // Общие стили для тарифов

// Компоненты стилей для каждого тарифа
import tariff300Styles from '../styles/tariff300.module.css';
import tariff450Styles from '../styles/tariff450.module.css';
import tariff550Styles from '../styles/tariff550.module.css';
import tariff1000Styles from '../styles/tariff1000.module.css';

const Tariff = ({ name, price, speed, tariffType, isHighlighted }) => {
    let tariffStyles;

    // Выбираем стили в зависимости от типа тарифа
    switch (tariffType) {
        case 'tariff300':
        tariffStyles = tariff300Styles;
        break;
        case 'tariff450':
        tariffStyles = tariff450Styles;
        break;
        case 'tariff550':
        tariffStyles = tariff550Styles;
        break;
        case 'tariff1000':
        tariffStyles = tariff1000Styles;
        break;
        default:
        tariffStyles = tariff300Styles; // по умолчанию тариф 300
    }

    // Если тариф выделен, добавим класс для выделения
    const containerClass = isHighlighted 
    ? `${styles.container} ${styles.highlighted}` 
    : styles.container;

    return (
        <div className={containerClass}>
        <div className={`${tariffStyles.titleContainer} ${styles.titleContainer}`}>
            <h2 className={styles.title}>{name}</h2>
        </div>
        <div className={`${tariffStyles.priceContainer} ${styles.priceContainer}`}>
            <div className={styles.priceWrapper}>
                <span className={styles.priceUnit}>руб</span>
                <span className={styles.price}>{price}</span>
                <span className={styles.perMonth}>/мес</span>
            </div>
        </div>
        <div className={styles.speed}>
            <span>{speed} Мбит/сек</span>
        </div>
        <div className={styles.text}>
            <span>Объем включенного трафика не ограничен</span>
        </div>
        </div>
    );
};

export default Tariff;