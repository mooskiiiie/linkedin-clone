import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://i.pinimg.com/originals/bd/1d/a5/bd1da51b0c60a22a839f8e6ee0057c7b.png' alt=''/>
                <Avatar src='pictureko.jpg' className='sidebar__avatar' />
                <h2>Sebastian Vergara</h2>
                <h4>sebastianvergara244@gmail.com</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,423</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('datascience')}
            </div>
        </div>
    )
}

export default Sidebar 
