import React, { useState, FormEvent } from 'react';
import { Container } from './styles';
import api from '../../../services/api';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.post('category', { name });
    console.log(response.data);
    setName('');
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Add Category</h1>
        <div>
          <span>Name</span>
          <input
            type="text"
            placeholder="enter category name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};

export default Register;
