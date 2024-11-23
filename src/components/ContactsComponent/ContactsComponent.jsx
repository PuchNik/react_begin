// import styles from "./ContactsComponent.module.css"

export const ContactsComponent = (email, phone) => {
    return (
        <div>
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </div>
    )
}