import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderContainer, Link } from './Header.styled';
import { Loader } from 'components/Loader/Loader';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </HeaderContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Header;
