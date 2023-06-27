
import { render, screen } from '@testing-library/react';
import { CampoErro } from './index';


describe('<CampoErro/>', () => {
 it('exibe o valor de erro passado como prop', () => {
    const valor = 'Erro de campo';
    render(<CampoErro valor={valor} />);
    const campoErro = screen.getByText(valor);
    expect(campoErro).toBeInTheDocument();
 })
});
