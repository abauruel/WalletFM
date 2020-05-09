import React from 'react';
import { FiUser, FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ContainerList } from './styles';

interface StateProps {
  state: ClientProps[];
  name: string;
}

interface ClientProps {
  id: number;
  name: string;
  cpf: string;
  address: string;
}

const List: React.FC<StateProps> = ({ state, name }) => {
  return (
    <>
      {state.map(m => (
        <ContainerList key={m.id}>
          <div>
            <FiUser />
            <span>{m.name}</span>
          </div>
          <div>
            <Link to={`/${name}/${m.id}`}>
              <FiArrowRightCircle size={24} />
            </Link>
          </div>
        </ContainerList>
      ))}
    </>
  );
};

export default List;
