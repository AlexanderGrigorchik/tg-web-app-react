import React, {useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../hooks/useTelegram";

const Form = () => {
    const [theme, setTheme] = useState('');
    const [select, setSelect] = useState('cass');
    const [text, setText] = useState('');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить данные"
        })
    }, []);

    useEffect(() => {
        if(!theme || !text){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [theme, text]);

    const onChangeTheme = (e) => {
        setTheme(e.target.value);
    }
    const onChangeSelect = (e) => {
        setSelect(e.target.value);
    }
    const onChangeText = (e) => {
        setText(e.target.value);
    }

    return (
        <div className={"form"}>
            <h3>Заполните заявку</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Заголовок'}
                value={theme}
                onChange={onChangeTheme}
            />

            <select value={select} onChange={onChangeSelect} className={'select'}>
                <option value={'cass'}>Конфиг для кассы</option>
                <option value={'operator'}>Конфиг для оператора</option>
                <option value={'printer'}>Конфиг для принтера</option>
            </select>

            <input
                className={'input'}
                type="text"
                placeholder={'Текст'}
                value={text}
                onChange={onChangeText}
            />
        </div>
    );
};

export default Form;