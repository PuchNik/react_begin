import styles from "./UserComponent.module.css"
import {ContactsComponent} from "../ContactsComponent/ContactsComponent.jsx";

export const UserComponent = (name, age, ...contacts) => {
    return (
        <div className={styles.user}>
            <label className={styles['user-label']}></label>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
            <ContactsComponent {...contacts}/>
        </div>
    )
}