import styles from './LabelComponent.module.css'


// eslint-disable-next-line react/prop-types
export const LabelComponent = ({color, children}) => {
    return <label className={`${styles.label} ${styles[color]}`}>{children}:</label>
}