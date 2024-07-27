import { useState, useEffect } from 'react';
// import { useAuth } from '../utils/context/authContext';
import ItemCard from '../components/ItemCard';
import { getItems } from '../api/itemData';

function Home() {
  // const { user } = useAuth();
  const [items, setItems] = useState([]);

  const getAllItems = () => {
    getItems().then(setItems);
  };
  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div>
      {/* <h1>Hello {user.fbUser.displayName}! </h1>
      <p>Click the button below to logout!</p> */}
      <div width="50rem" className="d-flex flex-wrap justify-content-evenly">
        {items.map((item) => (
          <ItemCard key={item.id} itemObj={item} onUpdate={getAllItems} />
        ))}
      </div>
    </div>
  );
}

export default Home;
