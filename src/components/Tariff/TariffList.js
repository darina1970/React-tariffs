import React from 'react';
import Tariff from './Tariff';
import styles from '../styles/common.module.css'; // Общие стили для всех тарифов

const tariffs = [
    {
        name: 'Безлимитный 300',
        price: 300,
        speed: 'до 10',
        tariffType: 'tariff300',
        isHighlighted: false,
    },
    {
        name: 'Безлимитный 450',
        price: 450,
        speed: 'до 50',
        tariffType: 'tariff450',
        isHighlighted: false,
    },
    {
        name: 'Безлимитный 550',
        price: 550,
        speed: 'до 100',
        tariffType: 'tariff550',
        isHighlighted: true, // Этот тариф выделен
    },
    {
        name: 'Безлимитный 1000',
        price: 1000,
        speed: 'до 200',
        tariffType: 'tariff1000',
        isHighlighted: false,
    },
    ];

    const TariffList = () => {
    return (
        <div className={styles.tariffList}>
        {tariffs.map((tariff, index) => (
            <Tariff
            key={index}
            name={tariff.name}
            price={tariff.price}
            speed={tariff.speed}
            tariffType={tariff.tariffType}
            isHighlighted={tariff.isHighlighted}
            />
        ))}
        </div>
    );
};

export default TariffList;