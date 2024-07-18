/*
 * HeaderLogo.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import './HeaderLogo.css';
import Logo from '../logo/Logo';
import LogoText from '../logo/LogoText';

export function HeaderLogo() { 
  return (
    <>
    <div className="header-logo">
      <Logo className="App-logo App-logo-animation"  viewBox="0 0 512 512" alt="logo"/>
      <LogoText className="App-logo" viewBox="0 0 1696.703 512.01" alt="logo"/>
    </div>
    </>
  );
}
