import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { Container } from './styles';

interface CardProps {
  name: string;
  value: number;
  grid?: number;
}

const Card: React.FC<CardProps> = ({ name, value, grid }) => {
  return (
    <Container grid={grid}>
      <span>{name}</span>
      <div>
        {grid && <FiUsers size={120} color="#551B8B" />}

        <span>{value}</span>
      </div>
    </Container>
  );
};

export default Card;
