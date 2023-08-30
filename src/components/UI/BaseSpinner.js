import styles from './BaseSpinner.module.scss'
import {createPortal} from 'react-dom';
import {Fragment} from "react";

const BaseSpinnerTemplate = () => {
    return (
        <div className={styles['spinner']}>
            <div className={styles['lds-roller']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

const BaseSpinner = () => {

    return (
        <Fragment>
            { typeof document !== 'undefined' ? createPortal(<BaseSpinnerTemplate />, document.getElementById('overlays')) : <BaseSpinnerTemplate/> }
        </Fragment>
    )
}

export default BaseSpinner;