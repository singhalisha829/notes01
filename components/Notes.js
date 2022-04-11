import { MdDeleteForever } from 'react-icons/md';

import styles from '../styles/Home.module.css';


const Notes = ({id,text,date, handleDeleteNote}) =>{

//     const current = new Date();
//   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <div className={styles.note}>
           <div>{text}</div>
            <small className={styles.note_footer}>
                {date}
                <MdDeleteForever className={styles.delete_icon} size='1.3rem' onClick={()=>handleDeleteNote(id)}/>
                </small>
        </div>
    )
}

export default Notes;