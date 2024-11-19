import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='p-6 flex items-center justify-between'>
        <span>Nome do app</span>
        <span>Configuracões</span>
      </div>
      <div className='mt-4 gap-6 p-6'>
        <h3 className='text-lg font-bold'>Seja bem vindo Usuário</h3>
        <h2 className='text-sm'>Ofertas em destaque</h2>
      </div>
      <div className='p-6'>
        <div className='py-1 px-1 shadow-sm rounded-full w-full bg-blue-100'>
          <input
            type='text'
            className='appearance-none bg-transparent w-full m-1'
            placeholder='Digite aqui para pesquisar'
          />
        </div>
      </div>
      <div className='p-6 bg-gray-100 min-h-screen'>
        <div className='max-w-md mx-auto'>
          {/* Featured Items Title */}
          <h2 className='text-lg font-bold mb-4'>Featured items</h2>

          {/* Item 1 */}
          <div className='bg-white rounded-lg shadow-md mb-4'>
            <img
              src='https://placehold.co/400x200.jpg' // Substitua pela URL da sua imagem de vegetais
              alt='Fresh Harvest Box'
              className='rounded-t-lg'
            />
            <div className='p-4'>
              <h3 className='font-semibold text-lg'>Fresh Harvest Box</h3>
              <p className='text-gray-500 text-sm'>Farmers Market 17/08/2023</p>
              <button className='mt-2 px-4 py-2 bg-[#9c113d] text-white rounded-full text-sm hover:bg-[#610421]'>
                Order
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className='bg-white rounded-lg shadow-md'>
            <img
              src='https://placehold.co/400x200.jpg' // Substitua pela URL da sua imagem de eletrônicos
              alt='Tech Essentials Kit'
              className='rounded-t-lg'
            />
            <div className='p-4'>
              <h3 className='font-semibold text-lg'>Tech Essentials Kit</h3>
              <p className='text-gray-500 text-sm'>Gadget Zone 19/09/2023</p>
              <button className='mt-2 px-4 py-2 bg-[#9c113d] text-white rounded-full text-sm hover:bg-[#610421]'>
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
