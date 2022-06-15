import { SearchPage } from './../../src/auth/pages/SearchPage.jsx';
import { MemoryRouter } from 'react-router-dom';

const { render, screen, fireEvent } = require("@testing-library/react");


describe('Pruebas en SearchPage', () => {

  test('debe mostrar el componente', () => {

    const { container } = render(
    <MemoryRouter>
      <SearchPage />
    </MemoryRouter>
    );

    expect(container).toMatchSnapshot();

  })
});