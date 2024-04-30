import getProducts from './apis/idolsApi';
import './index.css';

function App() {
  getProducts();
  return (
    <div className="flex items-center justify-center">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
