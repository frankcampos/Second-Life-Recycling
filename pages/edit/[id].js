import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleItem } from '../../api/itemData';
import ItemForm from '../../components/ItemForm';

export default function EditItem() {
  const [editobj, setEditobj] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleItem(id).then(setEditobj);
  }, [id]);
  return (<ItemForm obj={editobj} />);
}
