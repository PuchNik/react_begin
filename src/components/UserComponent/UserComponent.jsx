/* eslint-disable react/prop-types */

import {ContactsComponent} from "../ContactsComponent/ContactsComponent.jsx";
import {LabelComponent} from "../LabelComponent/LabelComponent.jsx";


export const UserComponent = ({name, age, ...contacts}) => {
    return (
        <>
            <div>
                <LabelComponent color={'blue'}>Пользователь</LabelComponent>
                <div>Имя: {name}</div>
                <div>Возраст: {age}</div>
                <ContactsComponent {...contacts}/>
            </div>
        </>
    )
}