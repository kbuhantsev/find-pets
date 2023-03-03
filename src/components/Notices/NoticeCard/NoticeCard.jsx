import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useParams } from 'react-router-dom';

// {
//   "_id": "63fe2ad6f3ffff3515f80757",
//   "title": "Вiддам рибок разом з акварiумом",
//   "category": "inGoodHands",
//    "petName": "рибки",
//    "dateOfBirth": "2022-07-22T00:00:00.000Z",
//    "breed": "рибки",
//    "sex": "female",
//    "location": "Чернiвцi, Чернiвцi",
//    "price": 0,
//    "imageUrl": "https://res.cloudinary.com/dwwvmul1w/image/upload/v1677601494/pets-project/notices/63fe2ad6f3ffff3515f80757.jpg",
//    "comment": "Віддам рибок разом з акваріумом. Розкажу як за ними доглядати.",
//    "age": {
//         "days": 13,
//         "months": 7,
//         "years": 0
//   };
//   ПОЯВЛЯЮТСЯ:
//"favorite": false,
//"myads": true,

const NoticeCard = ({ notice }) => {
  let {
    _id,
    title,
    category,
    age,
    breed,
    location,
    imageUrl,
    price,
    favorite,
    myads,
  } = notice;

  // С бэкэнда не приходит
  let { category: currentCategory } = useParams();
  if (currentCategory === 'my-ads') {
    myads = true;
  }

  return (
    <Card sx={{ maxWidth: 345 }} id={_id}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} />
      <Chip label={category} />
      <Chip label={favorite.toString()} />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="p">
          {title}
        </Typography>
        <List>
          <ListItem>
            <ListItemText>Breed</ListItemText>
            <ListItemText>{breed}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Place</ListItemText>
            <ListItemText>{location}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Age</ListItemText>
            <ListItemText>
              {age.years > 0 ? `${age.years} years` : `${age.months} months`}
            </ListItemText>
          </ListItem>
          {price > 0 && (
            <ListItem>
              <ListItemText>Price</ListItemText>
              <ListItemText>{price}</ListItemText>
            </ListItem>
          )}
        </List>
      </CardContent>
      <CardActions sx={{ spacing: true }}>
        {myads && (
          <Button variant="outlined" size="medium">
            Delete
          </Button>
        )}
        <Button variant="outlined" size="medium">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NoticeCard;
