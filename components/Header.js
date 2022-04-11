import styles from '../styles/Home.module.css';

const Header = ({ darkModeHandler }) =>{
    return(
        <div className={styles.header}>
            <h1 className={styles.heading}>Notes</h1>
            <button className={styles.save} onClick={()=> darkModeHandler((prevMode)=>!prevMode)}>Toggle Mode</button>
        </div>
    )
}

export default Header;