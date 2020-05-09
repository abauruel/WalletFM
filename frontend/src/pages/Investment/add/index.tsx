import React, { useState, useEffect, FormEvent } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Container, Button } from './styles';
import api from '../../../services/api';

interface BrokerProps {
  id: number;
  name: string;
  products: ProductsProps[];
}
interface ProductsProps {
  id: number;
  name: string;
}
const Add: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const [brokers, setBrokers] = useState<BrokerProps[]>([]);
  const [brokerSelected, setBrokerSelected] = useState<BrokerProps>();
  const [productId, setProductId] = useState('');
  const [valueInvestment, setValueInvestment] = useState('');

  useEffect(() => {
    async function loadBrokers(): Promise<void> {
      const response = await api.get<BrokerProps[]>('broker');
      setBrokers(response.data);
    }
    loadBrokers();
  }, []);
  function handleBroker(idBroker: string): void {
    const brokerreturned = brokers.find(
      broker => broker.id === Number(idBroker),
    );
    // const productsReturned: ProductsProps[] = brokerreturned?.products;
    setBrokerSelected(brokerreturned);
  }
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.post('investment', {
      value: Number(valueInvestment),
      productId: Number(productId),
      clientId: location.state,
    });

    if (response) {
      history.goBack();
    }
  }

  return (
    <Container>
      <h1>Add Investment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Broker</span>
          <select onChange={e => handleBroker(e.target.value)}>
            <option>Select</option>
            {brokers &&
              brokers.map(broker => (
                <option key={broker.id} value={broker.id}>
                  {broker.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <span>Product</span>
          <select onChange={e => setProductId(e.target.value)}>
            <option>Select</option>
            {brokerSelected?.products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>Value</span>
          <input
            type="number"
            placeholder="enter a numeric value"
            value={valueInvestment}
            onChange={e => setValueInvestment(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Save</Button>
        <Button type="button" cancel onClick={() => history.goBack()}>
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default Add;
