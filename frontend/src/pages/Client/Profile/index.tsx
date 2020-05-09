import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiUser, FiTrendingUp } from 'react-icons/fi';
import { Container, ContainerInvestment } from './styles';

import api from '../../../services/api';

interface ClientProps {
  id?: number;
  name: string;
  cpf: string;
  address: string;
  investments: InvestmentsProps[];
}
interface InvestmentsProps {
  id: number;
  name: string;
  value: number;
  product: ProductProps;
}
interface ProductProps {
  name: string;
  broker: BrokerProps;
}
interface BrokerProps {
  name: string;
}
const Profile: React.FC = () => {
  const history = useHistory();
  const { id } = useParams();
  const [client, setClient] = useState<ClientProps>();
  useEffect(() => {
    async function loadClient(): Promise<void> {
      const response = await api.get(`client/${id}`);
      setClient(response.data);
    }
    loadClient();
  }, [id]);
  function handleNewInvestment(idClient: number | undefined): void {
    history.push('/InvestmentRegister', idClient);
  }
  return (
    <Container>
      <div>
        <i>
          <FiUser size={100} color="#551b8b" />
        </i>
        <h1>{client?.name}</h1>
        <span>{client?.address}</span>
        <span>{client?.cpf}</span>
        <button type="button" onClick={() => handleNewInvestment(client?.id)}>
          <div>
            <FiTrendingUp />
            <span>Add investment</span>
          </div>
        </button>
        {client?.investments?.map(investment => (
          <ContainerInvestment key={investment.id}>
            <span>{investment.product.name}</span>
            <span>{investment.product.broker.name}</span>
            <span>{investment.value}</span>
          </ContainerInvestment>
        ))}
      </div>
    </Container>
  );
};

export default Profile;
