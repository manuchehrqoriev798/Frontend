import React from 'react';
import { FiBell, FiTarget, FiUsers, FiFileText } from 'react-icons/fi';
import './NotificationsPanel.css';

const NotificationsPanel = () => {
  const notifications = [
    { icon: <FiTarget className="notification-icon-svg" />, message: 'Contest "Algorithm Masters" starts in 2 hours', time: '2h ago' },
    { icon: <FiUsers className="notification-icon-svg" />, message: 'Team invitation from "AI Innovators"', time: '1d ago' },
    { icon: <FiFileText className="notification-icon-svg" />, message: 'Your solution was reviewed by mentor', time: '2d ago' }
  ];

  return (
    <div className="panel notifications-panel">
      <h3><FiBell className="bell-icon" /> NEW NOTIFICATIONS</h3>
      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <div className="notification-icon">{notification.icon}</div>
            <p className="message">{notification.message}</p>
            <span className="time">{notification.time}</span>
          </div>
        ))}
      </div>
      <button className="view-all">View All Notifications</button>
    </div>
  );
};

export default NotificationsPanel;
