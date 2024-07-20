import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import ItemCard from '../components/ItemCard';
import { getItems } from '../api/itemData';

function Home() {
  const { user } = useAuth();
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
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.fbUser.displayName}! </h1>
      <p>Click the button below to logout!</p>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <ItemCard key={item.id} itemObj={item} onUpdate={getAllItems} />
        ))}
      </div>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
