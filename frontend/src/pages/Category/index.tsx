import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi';
import api from '../../services/api';
import { Container } from './styles';

interface CategoryProps {
  id: number;
  name: string;
}
const Category: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);
  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const response = await api.get('category');
      setCategories(response.data);
      setCategoryList(response.data);
    }
    loadCategories();
  }, []);
  function findMatch(word: string): void {
    const newlist = categories.filter(category => {
      const regex = new RegExp(word, 'gi');
      return category.name.match(regex);
    });
    setCategoryList(newlist);
  }
  return (
    <Container>
      <div>
        <h1>Categories</h1>
        <Link to="/categoryRegister">
          <span>New Category</span>
        </Link>
      </div>
      <div>
        <span>
          <FiFilter />
        </span>
        <input
          type="text"
          placeholder="search category"
          onChange={e => findMatch(e.target.value)}
        />
      </div>
      {categoryList &&
        categoryList.map(category => (
          <div key={category.id}>
            <span>{category.name}</span>
          </div>
        ))}
    </Container>
  );
};
export default Category;
