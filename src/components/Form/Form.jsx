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
    const [Description, setDescription] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            Monday,
            Tuesday,
            Wednesday,
            Thursday,
            Friday,
            Saturday,
            Sunday,
            Description
        }
        tg.sendData(JSON.stringify(data));
    }, [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Description, tg])


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])


    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить расписание'
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

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }


    return (
        <div className={"form"}>
            <h3>Введите ваши временные(учитываются на 80%)</h3>
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
                placeholder={'Пятница'}
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
            <input
                className={'input'}
                type="text"
                placeholder={'Пожелание'}
                value={Description}
                onChange={onChangeDescription}
            />
        </div>
    );
};

export default Form;