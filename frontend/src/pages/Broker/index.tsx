import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, ContainerTitle } from './styles';
import api from '../../services/api';

interface BrokersProps {
  id: number;
  name: string;
  products: BrokerProducts[];
}

interface BrokerProducts {
  id: number;
  name: string;
}
const Register: React.FC = () => {
  const [brokers, setBrokers] = useState<BrokersProps[]>([]);
  useEffect(() => {
    async function loadBroker(): Promise<void> {
      const response = await api.get('broker');

      setBrokers(response.data);
    }
    loadBroker();
  }, []);
  return (
    <>
      <ContainerTitle>
        <h1>Brokers</h1>
        <Link to="/brokerRegister">new broker</Link>
      </ContainerTitle>
      <Container>
        {brokers &&
          brokers.map(broker => (
            <div key={broker.id}>
              <span>{broker.name}</span>
            </div>
          ))}
      </Container>
    </>
  );
};

export default Register;
