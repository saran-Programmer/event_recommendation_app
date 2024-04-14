import styles from "./DisplayUpcommingEvents.module.css"

const DisplayUpCommingEvents = () => {
    return(
        <div className={styles.container}>
            <span className={styles.upcommingEvents}>Upcomming Events <i class="fa-solid fa-arrow-right-long" /></span>
            
        </div>
    )
}

export default DisplayUpCommingEvents