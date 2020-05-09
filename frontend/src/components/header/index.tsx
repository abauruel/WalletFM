import React from 'react';
import { FiHome, FiUserPlus, FiGrid, FiShuffle, FiBox } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <nav>
        <Link to="/">
          <FiHome size={42} color="#551B8B" />
          HOME
        </Link>
        <Link to="/clientRegister">
          <FiUserPlus size={42} color="#551B8B" />
          REGISTER
        </Link>
        <Link to="/category">
          <FiGrid size={42} color="#551B8B" />
          CATEGORY
        </Link>
        <Link to="/Broker">
          <FiShuffle size={42} color="#551b8b" />
          BROKER
        </Link>
        <Link to="/product">
          <FiBox size={42} color="#551B8B" />
          PRODUCT
        </Link>
      </nav>
    </Container>
  );
};

export default Header;
