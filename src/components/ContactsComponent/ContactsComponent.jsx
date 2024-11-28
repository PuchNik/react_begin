/* eslint-disable react/prop-types */
import {LabelComponent} from "/src/components/LabelComponent/LabelComponent.jsx";

export const ContactsComponent = ({email, phone}) => {
    return (
        <>
            <div>
                <LabelComponent color={'green'}>Контакты</LabelComponent>
                <div>Почта: {email}</div>
                <div>Телефон: {phone}</div>
            </div>
        </>
    )
}