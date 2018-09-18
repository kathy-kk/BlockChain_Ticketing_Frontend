import React from 'react';
import { Link } from 'react-router-dom';
//import { siteConfig } from '../../settings';

export default ({ collapsed }) => {
    return (
        <div className="isoLogoWrapper">
            {collapsed ? (
                <div>
                    <h3>
                        <Link to="/app">
                            <i className={'ion-flash'} />
                        </Link>
                    </h3>
                </div>
            ) : (
                <h3>
                    <Link  to="/app">{'Blockchain Ticket'}</Link>
                </h3>
            )}
        </div>
    );
};