import React, { useState, useCallback } from 'react';

import { Container } from './styles';
import api from '../../../services/api';

const Cadastro: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [address, setAddress] = useState('');
  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const client = await api.post('client', {
        name,
        cpf,
        address,
      });
      if (client) {
        setName('');
        setCPF('');
        setAddress('');
      }
    },
    [name, cpf, address],
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Add Customer</h1>
        <div>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="enter your full name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <span>CPF</span>
          <input
            type="text"
            name="cpf"
            placeholder="enter your CPF number"
            value={cpf}
            onChange={e => setCPF(e.target.value)}
          />
        </div>
        <div>
          <span>Address</span>
          <input
            type="text"
            name="address"
            placeholder="enter your address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </Container>
  );
};

export default Cadastro;
