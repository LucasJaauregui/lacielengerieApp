import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css"

export const Navbar = () => {
   
    return (
        <div className={styles.containerNavbar}>
            <img src="https://res.cloudinary.com/drgvqeadn/image/upload/v1680489033/android-chrome-192x192_mrhw8h.png" alt="Logo Lacie Lengerie"/>
            <ul>
                <li>Lenceria</li>
                <li>Bikinis</li>
                <li>Accesorios</li>
                <li>Todos</li>
            </ul>
            <CartWidget/>
        </div>
    );
};