import React, { useState } from 'react';
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
    const [selectedTariff, setSelectedTariff] = useState(null);

    const handleSelectTariff = (tariffType, name) => {
        setSelectedTariff({ tariffType, name });
    };

    console.log(selectedTariff)


    return (
        <div>
            <div className={styles.tariffList}>
                {tariffs.map((tariff, index) => (
                    <Tariff
                    key={index}
                    name={tariff.name}
                    price={tariff.price}
                    speed={tariff.speed}
                    tariffType={tariff.tariffType}
                    isHighlighted={tariff.isHighlighted}
                    isSelected={selectedTariff?.tariffType === tariff.tariffType}
                    onSelect={handleSelectTariff}
                    />
                ))}

                {selectedTariff && (
                <div className={styles.selectedTariffMessage}>
                    <p>Поздравляем! Вы выбрали тариф <strong>{selectedTariff.name}</strong></p>
                </div>
                )}

            </div>
        </div>

    );
};

export default TariffList;