import styles from "../../styles/Notification.module.css"

import Header from '../../components/Header/Header';
import { useRouter } from "next/router";


const NotificationPage = () => {
    const router = useRouter()
    // const navigate = useNavigate()
    const handleArrowAction = () => {
        router.push('/')
    }
    return (
        <div className={styles.notificationpagecontainer}>
            <Header showArrow handleArrow={handleArrowAction} headerText="Notifications" />
            <div className={styles.notificationtext}>There are no notification yet!!</div>
        </div>
    )
}

export default NotificationPage