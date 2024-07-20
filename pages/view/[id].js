import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleItem } from '../../api/itemData';
import ViewItemCard from '../../components/SingleItemCard';

export default function ViewItem() {
  const [editobj, setEditobj] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleItem(id).then(setEditobj);
  }, [id]);
  return (<ViewItemCard itemObj={editobj} />);
}
