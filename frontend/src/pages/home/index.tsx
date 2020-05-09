import React, { useState, useEffect } from 'react';

import { FiFilter } from 'react-icons/fi';
import { Container, ContainerBody, ContainerSearch } from './styles';
import api from '../../services/api';

import Card from '../../components/card';
import List from '../../components/List';

interface ClientProps {
  id: number;
  name: string;
  cpf: string;
  address: string;
  investments: InvestmentsProps[];
}
interface InvestmentsProps {
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

const Home: React.FC = () => {
  const [clientes, setClientes] = useState<ClientProps[]>([]);
  const [listClients, setListClients] = useState<ClientProps[]>([]);
  const [patrimonio, setPatrimonio] = useState(0);
  useEffect(() => {
    async function loadClients(): Promise<void> {
      const clients = await api.get('client');
      setClientes(clients.data);
      setListClients(clients.data);
    }

    loadClients();
  }, []);
  useEffect(() => {
    let value = 0;
    clientes.map<number>(cliente => {
      return (value += cliente.investments.reduce<number>(
        (acc, curr): number => {
          return (acc += curr.value);
        },
        0,
      ));
    });

    setPatrimonio(value);
  }, [clientes]);

  function findMatches(wordToMatch: string, listclientes: ClientProps[]): void {
    const searchlist = listclientes.filter(client => {
      const regex = new RegExp(wordToMatch, 'gi');
      return client.name.match(regex) || client.cpf.match(regex);
    });
    setListClients(searchlist);
  }

  return (
    <ContainerBody>
      <div>
        <Card name="clientes registrados" value={clientes.length} grid={2} />

        <Card name="patrimonio sob gestao" value={patrimonio} />
      </div>
      <Container>
        <ContainerSearch>
          <h2>Customers</h2>
          <div>
            <FiFilter />

            <input
              type="text"
              placeholder="search"
              onChange={e => findMatches(e.target.value, clientes)}
            />
          </div>
        </ContainerSearch>

        <List state={listClients} name="client" />
      </Container>
    </ContainerBody>
  );
};

export default Home;
