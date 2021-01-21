import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Thank you PAPA React', 'Top news - 9099 readers')}
            {newsArticle('Tesla hits new heights', 'Cars & auto - 909 readers')}
            {newsArticle('Cryptocurrency!', 'Crypto - 799 readers')}
            {newsArticle('How to do user auth', 'UserAuth - 1000 readers')}
            {newsArticle('So much to do?', 'Top news - 1 readers')}
        </div>
    )
}

export default Widgets 
