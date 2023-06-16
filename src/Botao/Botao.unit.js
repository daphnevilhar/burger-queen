import { render, screen } from '@testing-library/react';
import Botao from './index';

describe('<Botao/>', () => {
  it('Deve renderizar um botão corretamente', () => {
    render(<Botao>Entrar</Botao>);
    const botao = screen.getByRole('button');
    expect(botao).toBeInTheDocument();
  });
});
