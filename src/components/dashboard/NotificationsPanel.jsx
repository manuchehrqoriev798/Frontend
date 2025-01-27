import React from 'react';

const NotificationsPanel = () => {
  const notifications = [
    { icon: '🎯', message: 'Contest "Algorithm Masters" starts in 2 hours', time: '2h ago' },
    { icon: '👥', message: 'Team invitation from "AI Innovators"', time: '1d ago' },
    { icon: '📝', message: 'Your solution was reviewed by mentor', time: '2d ago' }
  ];

  return (
    <div className="panel notifications-panel">
      <h3>🔔 NEW NOTIFICATIONS:</h3>
      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <span className="notification-icon">{notification.icon}</span>
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
