import React from 'react';
import {
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
import {
  CardStyled,
  CardTitle,
  ChipCategory,
  DescrTitle,
  DescrValue,
  ListItemStyled,
  ListStyled,
} from './NoticeCard.styled';
import { HeartButton } from 'components/Buttons/HeartButton/HeartButton';

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
    <CardStyled id={_id}>
      <ChipCategory label={category} />
      <HeartButton filled={favorite}></HeartButton>
      <CardMedia sx={{ height: 280 }} image={imageUrl} />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flexGrow="1"
      >
        <CardContent>
          <CardTitle variant="h6" gutterBottom>
            {title}
          </CardTitle>
          <ListStyled>
            <ListItemStyled>
              <DescrTitle>Breed</DescrTitle>
              <DescrValue>{breed}</DescrValue>
            </ListItemStyled>
            <ListItemStyled>
              <DescrTitle>Place</DescrTitle>
              <DescrValue>{location}</DescrValue>
            </ListItemStyled>
            <ListItemStyled>
              <DescrTitle>Age</DescrTitle>
              <DescrValue>
                {age.years > 0 ? `${age.years} years` : `${age.months} months`}
              </DescrValue>
            </ListItemStyled>
            {price > 0 && (
              <ListItemStyled>
                <DescrTitle>Price</DescrTitle>
                <DescrValue>{price}</DescrValue>
              </ListItemStyled>
            )}
          </ListStyled>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            spacing: true,
            marginTop: 'auto',
          }}
        >
          <Button
            variant="outlined"
            size="medium"
            sx={{ alignItems: 'flex-end' }}
          >
            Learn More
          </Button>
          {myads && (
            <Button variant="outlined" size="medium" endIcon={<DeleteIcon />}>
              Delete
            </Button>
          )}
        </CardActions>
      </Box>
    </CardStyled>
  );
};

export default NoticeCard;
