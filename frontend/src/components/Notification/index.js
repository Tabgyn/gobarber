import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  NotificationItem,
} from './styles';

export default function Notification() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <NotificationItem unread>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </NotificationItem>
          <NotificationItem unread>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </NotificationItem>
          <NotificationItem>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </NotificationItem>
          <NotificationItem>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </NotificationItem>
          <NotificationItem>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </NotificationItem>
          <NotificationItem>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </NotificationItem>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
