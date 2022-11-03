import React from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
    barColors: {
        '0': '#0e67ed',
        '1.0': '#0e67ed'
    },
    shadowBlur: 5
});

function Loader() {
    return <TopBarProgress/>;
}

export default Loader;