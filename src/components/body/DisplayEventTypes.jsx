import styles from "./DisplayEventTypes.module.css"

const DisplayEventTypes = () => {
    return(
        <div className={styles.container}>
            <div className={styles.userLocation}>
                <i className="fa-solid fa-location-dot" />
                <span className={styles.city}>Puduchery, India</span>
                <i className="fa-solid fa-chevron-right" />
            </div>
            <div className={styles.eventTypes}>
                <span>Liveshows</span>
                <span>Streams</span>
                <span>Movies</span>
                <span>Plays</span>
                <span>Events</span>
                <span>Sports</span>
                <span>Activities</span>
            </div>
        </div>
    )
}

export default DisplayEventTypes