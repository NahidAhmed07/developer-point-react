import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Main.css'

const Main = () => {
  // main all state 
  const [programmers, setProgrammers] = useState([]);
  const [carts, setCarts] = useState([]);
  const [keys, setKeys] = useState([]);

// data load 
  useEffect(() => {
    fetch('/fakeData.json')
      .then(res => res.json())
      .then(data => setProgrammers(data));
    
  }, []);

  const addBtnHandelar = programmer => {
    const { key } = programmer;
    // validation for Remove duplicate form carts 
    if (!keys.includes(key)) {
      setCarts([...carts, programmer]);
      setKeys([...keys, key]);
    } else {
      alert('Card alredy added');
    }
  }

 
  return (
    <main className="container" style={{marginTop:'50px'}}>
      <section className='row'>
        <div className="col-lg-9 col-md-6 col-sm-12">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              programmers.map(programmer => <Card
                programmer={programmer}
                key={programmer.key}
                addBtnHandelar={addBtnHandelar}
              ></Card>)
            }
          </div>
        </div>
            {/* Cart section  */}
        <aside className='col-lg-3 col-md-6 col-sm-12'>
          <Cart carts={carts}></Cart>
        </aside>
      </section>  
    </main>
  );
};

export default Main;