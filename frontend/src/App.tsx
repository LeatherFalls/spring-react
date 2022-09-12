import Header from './components/Header';
import SalesCard from './components/SalesCard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
