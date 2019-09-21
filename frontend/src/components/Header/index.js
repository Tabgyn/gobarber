import React from 'react';
import { Link } from 'react-router-dom';

import Notification from '~/components/Notification';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Tiago Borges</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/48/abott@adorable.png"
              alt="Tiago Borges"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
