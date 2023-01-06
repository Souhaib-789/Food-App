

import { setDoc } from '@firebase/firestore';
import { async } from '@firebase/util';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { db } from '../../firebase/Firebase';
import { collection, addDoc } from "firebase/firestore";




function FoodCard(props) {

  const addToWishList = async () => {
    try {
      const docRef = await addDoc(collection(db, "wishlist"), {
        title: props.title,
        image: props.image,
        uid: localStorage.getItem('uid')
      });
      // console.log("Document written with ID: ", docRef.id);
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <Card style={{ width: '18rem', margin: '30px 15px 15px 15px' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" onClick={addToWishList}>Add to Wishlist</Button>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;