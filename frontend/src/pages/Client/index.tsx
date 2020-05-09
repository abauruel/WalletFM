import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';
import api from '../../services/api';

import List from '../../components/List';

interface ClientProps {
  id: number;
  name: string;
  address: string;
  cpf: string;
}

const Client: React.FC = () => {
  const [clientes, setClientes] = useState<ClientProps[]>([]);
  useEffect(() => {
    async function loadClients(): Promise<void> {
      const clients = await api.get('client');
      setClientes(clients.data);
    }

    loadClients();
  }, []);

  return (
    <>
      <Container>
        <div>
          <Link to="/clientRegister">
            <FiPlusSquare />
            <span>Register Client</span>
          </Link>
        </div>
        <hr />
        <List state={clientes} name="client" />
      </Container>
    </>
  );
};

export default Client;
