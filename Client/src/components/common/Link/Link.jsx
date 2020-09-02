import React from 'react';
import styles from './Link.module.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';

function Link({ children, to }) {
    return <div>
        <ReactRouterDomLink className={styles.listItem} to={to}>{children}</ReactRouterDomLink>
        </div>;
};

export default Link;