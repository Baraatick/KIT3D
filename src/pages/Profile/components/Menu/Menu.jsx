import styles from "./ui/Menu.module.css"
import profile from "./assets/profile.png"
import { userData } from "../../../../utils/Context";

function Menu () {
const {username} = userData()
    return ( 
        <div className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        {username}
                    </div>
                    <img className={styles.profile_img} src={profile} alt="" />
                    <button className={styles.btn}>Edit</button>
                </div>
            </div>
        </div>
     );
}

export default Menu ;