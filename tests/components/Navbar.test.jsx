import { AuthContext } from './../../src/auth/context/AuthContext.jsx';
import { Navbar } from './../../src/auth/components/ui/Navbar.jsx';
import { MemoryRouter, useNavigate } from 'react-router-dom';
const { render, screen, fireEvent } = require("@testing-library/react");


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en Navbar', () => {

  const contextValue = {
    logged: false,
    user: {
      name: 'Sebastian',
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks());


    test('debe mostrar el nombre del usuario', () => {

      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      expect( screen.getByText('Sebastian') ).toBeTruthy();

    })



    test('debe llamar el logout y navigate se hace click en el boton', () => {

      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const logoutBtn = screen.getByRole('button');

      fireEvent.click(logoutBtn);

      expect( contextValue.logout ).toHaveBeenCalled();
      expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});

    })
})