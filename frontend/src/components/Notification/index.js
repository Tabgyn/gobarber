import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistanceStrict } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  NotificationItem,
} from './styles';

export default function Notification() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistante: formatDistanceStrict(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      console.tron.log(data);

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function toggleVisible() {
    setVisible(!visible);
  }

  async function markAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge onClick={toggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <NotificationItem
              key={notification._id}
              unread={!notification.read}
            >
              <p>{notification.content}</p>
              <time>{notification.timeDistante}</time>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification._id)}
                  type="button"
                >
                  Marcar como lida
                </button>
              )}
            </NotificationItem>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
