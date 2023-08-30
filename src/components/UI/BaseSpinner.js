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
            { createPortal(<BaseSpinnerTemplate />, document.getElementById('overlays'))}
        </Fragment>
    )
}

export default BaseSpinner;