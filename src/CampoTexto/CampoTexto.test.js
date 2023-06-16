import { render, screen } from '@testing-library/react';
import CampoTexto from './index';

test('Deve retornar o valor digitado', () => {
  render(<CampoTexto/>);
  const email = screen.getByText('tata@gmail.com');
  expect(email).toBeInTheDocument();
});