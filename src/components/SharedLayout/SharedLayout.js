import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from "react-router-dom";
import Container from 'components/Container/Container';

import css from 'components/SharedLayout/SharedLayout.module.css'

const SharedLayout = () => {
    return (
     <Container>
        <header>
          <nav className={css.nav}>
            <NavLink
              to="/" className={css.nav_link}
              style={({ isActive }) => ({ color: isActive ? 'rgb(124, 39, 204)' : 'inherit' })}
            >Home</NavLink>
            <NavLink
              to="/movies" className={css.nav_link}
              style={({ isActive }) => ({ color: isActive ? 'rgb(124, 39, 204)' : 'inherit' })}
            >Movies</NavLink>
          </nav>
        </header>
        <main>
          <section>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </section>
        </main>
      </Container>
    );
  };
  export default SharedLayout;