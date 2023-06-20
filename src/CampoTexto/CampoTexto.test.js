import { render, screen } from '@testing-library/react';
import { CampoTexto } from './index';

test('Deve adicionar o atributo placeholder ao input', () => {
  render(<CampoTexto placeholder={'teste'}/>);
  const input = screen.getByPlaceholderText('teste');
  expect(input).toBeInTheDocument();
});

test('Deve adicionar o atributo type ao input', () => {
  render(<CampoTexto type={'teste'}/>);
  const input = screen.getByRole("textbox")
  expect(input).toHaveAttribute("type", "teste");
});