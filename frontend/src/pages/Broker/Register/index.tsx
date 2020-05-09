import React, { useState, FormEvent } from 'react';
import { Container } from './styles';
import api from '../../../services/api';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.post('broker', { name });
    if (response) {
      setName('');
    }
  }
  return (
    <Container>
      <h1>Add Broker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Name</span>
          <input
            type="text"
            placeholder="enter broker name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </Container>
  );
};
export default Register;
