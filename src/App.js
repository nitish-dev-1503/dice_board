import Tabs from './components/Tabs';

import logo from './assets/diceboard.svg';

function App() {

  return (
    <div className="bg-neutral-100 text-primary_dark text-center">
      <header className="py-20">
        <img src={logo} className="h-30 my-4 m-auto" alt="logo" />
        <p className='text-xl font-bold '>----- Let's Play with Dice -----</p>
      </header>

      <Tabs />

      <p className="text-sm py-4 ">All rights reserved | Nitish Sharma</p>

    </div>
  );
}

export default App;
