import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className={"form"}>
            <h3>Заполните заявку</h3>
            <input className={'input'} type="text" placeholder={'Заголовок'}/>
            <input className={'input'} type="text" placeholder={'Текст'}/>

            <select className={'select'}>
                <option value={'cass'}>Конфиг для кассы</option>
                <option value={'operator'}>Конфиг для оператора</option>
                <option value={'printer'}>Конфиг для принтера</option>
            </select>
            FORM
        </div>
    );
};

export default Form;