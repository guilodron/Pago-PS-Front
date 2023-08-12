import { AppRoutes } from './Routes';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
