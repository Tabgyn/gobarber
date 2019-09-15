import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

/**
 * Signing Up Page
 */
export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possuo login</Link>
      </form>
    </>
  );
}
