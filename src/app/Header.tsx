import Link from 'next/link';
import React from 'react';
import ButtonComponent from './components/buttonComponent';
import LinkComponent from './components/LinkComponent';

const Header = () => {
  return (
    <>
      <header>
        <div>
          <ButtonComponent />
        </div>
        <div>
          <LinkComponent
            href="\userlist"
            iconClass="fa-solid fa-user"
            label="View"
          />

          <Link href="\signup" className="Join">
            <i className="fa fa-sign-in"></i>
            Register
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
