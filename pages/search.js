// pages/search.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { searchItems } from '../api/itemData';
import ItemCard from '../components/ItemCard';
import Loading from '../components/Loading';

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      searchItems(query)
        .then((data) => {
          setItems(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="search-results">
      {query && items.length === 0 ? (
        <p>No items found for &quot;{query}&quot;.</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-evenly">
          {items.map((item) => (
            <ItemCard key={item.id} itemObj={item} onUpdate={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
