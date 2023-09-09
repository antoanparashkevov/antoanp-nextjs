import styles from './Alert.module.scss'
import {Fragment, useEffect, useState} from "react";
import {createPortal} from "react-dom";

const AlertTemplate = ({ alertStatus, children }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeID = setTimeout(() => {
            setShow(false);//after 5 seconds set the show value to false
        }, 5000)
        
        
        //clean up function
        return () => {
            clearTimeout(timeID);
        }
        
    }, []);
    
    if( !show )  {
        return null;
    }
    
    return (
        <label>
            <input type="checkbox"  className={styles['alert_checkbox']}/>
            <div className={`${styles['alert']} ${styles[alertStatus]}`}>
                <span className={styles['alert_text']}>{children}</span>
            </div>
        </label>
    )
}

const Alert = ({children, alertStatus}) => {

    return (
        <Fragment>
            {typeof document !== 'undefined' ? createPortal(<AlertTemplate alertStatus={alertStatus}>{children}</AlertTemplate>, document.getElementById('overlays')) :
                <AlertTemplate alertStatus={alertStatus}>{children}</AlertTemplate>}
        </Fragment>
    )
}

export default Alert;