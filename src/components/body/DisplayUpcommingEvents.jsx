import { useState } from "react";
import styles from "./DisplayUpcommingEvents.module.css"
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { RotatingLines } from "react-loader-spinner";

const DisplayUpCommingEvents = () => {

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false)
  const apiKey = process.env.REACT_APP_API_KEY;

  console.log(apiKey)

  const fetchData = async () => {
    setIsLoading(true)
    const response = await axios.get(process.env.REACT_APP_UPCOMMING_EVENTS_KEY);
    setItems([...items, ...response.data.events.slice(0, 9)]);
    console.log(items)
    setPage(page + 1);
    setIsLoading(false)
  };

  return (
    <div className={styles.container}>
      <span className={styles.upcomingEvents}>Upcoming Events <i class="fa-solid fa-arrow-right-long" /></span>
      <InfiniteScroll
      pageStart={0}
      loadMore={fetchData}
      hasMore={true}
      className={styles.displayUpCommingEvents}
      loader={
        <div className="loader" key={0}>
        </div>
      }
      >
        {items.map((e) => (
          <div className={styles.eventItem}>
            <img 
            src={`https://drive.google.com/thumbnail?id=${e.imgUrl.slice(32, 65)}`} />
            <div className={styles.eventDetials}>
              <div className={styles.eventTitle}>{e.eventName}</div>
              <div className={styles.locationDetails}>
                <div className={styles.cityName}><i class="fa-solid fa-location-dot" />{e.cityName}</div>
                <div className={styles.cityWeather}>{e.weather}</div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
      {(isLoading === true) ? <div className={styles.loader}>
              <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}/>
      </div>: null}

    </div>
  );
}


export default DisplayUpCommingEvents