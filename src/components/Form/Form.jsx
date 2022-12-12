import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [Monday, setMonday] = useState('');
    const [Tuesday, setTuesday] = useState('');
    const [Wednesday, setWednesday] = useState('');
    const [Thursday, setThursday] = useState('');
    const [Friday, setFriday] = useState('');
    const [Saturday, setSaturday] = useState('');
    const [Sunday, setSunday] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            Monday,
            Tuesday,
            Wednesday,
            Thursday,
            Friday,
            Saturday,
            Sunday
        }
        tg.sendData(JSON.stringify(data));
    }, [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, tg])


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])


    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [tg])


    useEffect(() => {
        if(!Monday || !Tuesday || !Wednesday || !Thursday || !Friday || !Saturday || !Sunday) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, tg])


    const onChangeMonday = (e) => {
        setMonday(e.target.value)
    }

    const onChangeTuesday = (e) => {
        setTuesday(e.target.value)
    }

    const onChangeWednesday = (e) => {
        setWednesday(e.target.value)
    }

    const onChangeThursday = (e) => {
        setThursday(e.target.value)
    }


    const onChangeFriday = (e) => {
        setFriday(e.target.value)
    }

    const onChangeSaturday = (e) => {
        setSaturday(e.target.value)
    }

    const onChangeSunday = (e) => {
        setSunday(e.target.value)
    }


    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Понедельник'}
                value={Monday}
                onChange={onChangeMonday}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Вторник'}
                value={Tuesday}
                onChange={onChangeTuesday}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Вторник'}
                value={Wednesday}
                onChange={onChangeWednesday}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Четверг'}
                value={Thursday}
                onChange={onChangeThursday}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Четверг'}
                value={Friday}
                onChange={onChangeFriday}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Суббота'}
                value={Saturday}
                onChange={onChangeSaturday}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Воскресенье'}
                value={Sunday}
                onChange={onChangeSunday}
            />

            {/*<select value={subject} onChange={onChangeSubject} className={'select'}>*/}
            {/*    <option value={'physical'}>Физ. лицо</option>*/}
            {/*    <option value={'legal'}>Юр. лицо</option>*/}
            {/*</select>*/}
        </div>
    );
};

export default Form;