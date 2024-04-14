import { useState, useEffect } from "react";
import styles from "./BannerDisplayer.module.css"

const BannerDisplayer = () => {

    const [recommendedEvents, setRecommendedEvents] = useState([]);
    const [currentDisplaySize, setCurrentDisplaySize] = useState(window.innerWidth)

    const fetchData = async () => {
      const url = "link";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.events);
    
        setRecommendedEvents(data.events);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    useEffect(() => {
        setCurrentDisplaySize(window.innerWidth);
    }, [])

    useEffect(() => {
        fetchData()
      }, [])

      const formateDate = (e) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const date = new Date(e);
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
      }

    return(
        <div className={styles.container}>
            <div className={styles.bannerContents}>
                <span className={styles.title}>Discover Exciting Events Happening Near You - Stay Tuned For Updates</span>
                {(currentDisplaySize <= 768) ? <span className={styles.titleContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, facilis, alias Corrupti, facilis, </span> : <span className={styles.titleContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, facilis, alias, rem nulla commodi nam deserunt consequuntur sapiente velit quia aliquam maiores. Sint nam minima eligendi cum molestias iure quos.</span>}
                
            </div>
            <div className={styles.recommendationSection}>
            <div className={styles.buttonSection}>
                <span>Recommended Shows <i class="fa-solid fa-arrow-right-long" /></span>
                <span>see all</span>
            </div>
                <div className={styles.displayRecommendedEvents}>
                {
                recommendedEvents.map(e => (
                  <div className={styles.eventItem}>
                    <img
                    className={styles.eventImage}  
                    alt="Event" />
                    <div className={styles.itemDetails}>
                        <span className={styles.eventTitle}>Make Agree</span>
                        <span className={styles.eventDate}>{formateDate(e.date)}</span>
                    </div>
                    <div className={styles.locationDetails}>
                        <span className={styles.cityName}><i class="fa-solid fa-location-dot" /> {e.cityName}</span>
                        <span className={styles.weather}>{e.weather}</span>
                    </div>
                  </div>
                ))
                }
                </div>
            </div>
        </div>
    )
}

    

export default BannerDisplayer