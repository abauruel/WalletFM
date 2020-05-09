import React, { useState, useEffect, FormEvent } from 'react';
import { Container, ContainerSelect } from './styles';
import api from '../../../services/api';

interface ResponseProps {
  id: number;
  name: string;
}
const Register: React.FC = () => {
  const [brokers, setBrokers] = useState<ResponseProps[]>([]);
  const [categories, setCategories] = useState<ResponseProps[]>([]);
  const [idcategory, setIdcategory] = useState('');
  const [idbroker, setIdBroker] = useState('');
  const [nameProduct, setNameProduct] = useState('');

  useEffect(() => {
    async function loadBrokers(): Promise<void> {
      await api.get('broker');
      const [responseBrokers, responseCategories] = await Promise.all([
        api.get('broker'),
        api.get('category'),
      ]);
      setBrokers(responseBrokers.data);
      setCategories(responseCategories.data);
    }

    loadBrokers();
  }, []);
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.post('Product', {
      name: nameProduct,
      CategoryId: Number(idcategory),
      brokerid: Number(idbroker),
    });

    if (response) {
      setNameProduct('');
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>New Product</h1>
        <ContainerSelect>
          <span>Broker</span>
          <select onChange={e => setIdBroker(e.target.value)}>
            <option value="">Select</option>
            {brokers.map(broker => (
              <option key={broker.id} value={broker.id}>
                {broker.name}
              </option>
            ))}
          </select>
        </ContainerSelect>
        <div>
          <span>Category</span>
          <select onChange={e => setIdcategory(e.target.value)}>
            <option value="">Select</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>Name</span>
          <input
            placeholder="enter product name"
            value={nameProduct}
            onChange={e => setNameProduct(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </Container>
  );
};

export default Register;
