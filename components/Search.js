import styles from '../styles/Home.module.css';
import { MdSearch } from 'react-icons/md';

const Search= ({ handleSearchNote }) =>{
    return(
        <div className={styles.search}>
            <MdSearch className={styles.search_icons} size='1.3rem' />
            <input type="text" placeholder='type to search...' onChange={(event)=> handleSearchNote(event.target.value)} />
        </div>
    )
}

export default Search;