import styles from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <span className={styles.logo}>BookUsNow</span>
                <span className={styles.userLocation}>
                    <i className="fa-solid fa-location-dot" />Puducherry, India <i className="fa-solid fa-chevron-right" /></span>
            </div>
            <div className={styles.middleElement}>
                <button className={styles.menuButton}>
                    <i className="fa-solid fa-bars"/>
                    <span>categories</span>
                </button>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="DJI Phantom"/>
                    <i className="fa-solid fa-magnifying-glass" />
                </div>
            </div>
            <div className={styles.rightSide}>
                <button className={styles.favoritesButton}><i class="fa-solid fa-heart" /> Favorites</button>
                <button className={styles.signIn}>Sign In</button>
                <div className={styles.mobileNavBarIcons}>
                    <i className="fa-solid fa-magnifying-glass" />
                    <i class="fa-solid fa-heart" />
                    <i class="fa-solid fa-user" />
                </div>
            </div>
        </div>
    )
}

export default NavBar