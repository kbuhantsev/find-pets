import { Box, CircularProgress } from '@mui/material';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useGetNoticesByCategoryQuery } from 'redux/notices/noticesApi';
import errorImg from '../../../images/errors/puppy.png';
import NoticeCard from '../NoticeCard/NoticeCard';

const NoticesList = () => {
  let { category } = useParams();

  const getCategory = useCallback(() => {
    switch (category) {
      case 'sell':
        return 'category/sell';
      case 'lost-found':
        return 'category/lostFound';
      case 'in-good-hands':
        return 'category/inGoodHands';
      case 'favorite':
        return 'favorites';
      case 'my-ads':
        return 'myNotices';
      default:
        return 'sell';
    }
  }, [category]);

  const {
    data: notices = [],
    error,
    isFetching,
  } = useGetNoticesByCategoryQuery(getCategory());

  return (
    <>
      {isFetching ? (
        <Box display="flex" justifyContent="center" marginTop="50px">
          <CircularProgress color="primary" size={75} />
        </Box>
      ) : error ?? notices.length === 0 ? (
        <img src={errorImg} alt="puppy" width={300} />
      ) : (
        notices && (
          <ul>
            {notices.map(notice => (
              <NoticeCard
                key={notice._id}
                notice={{ ...notice, myads: category === 'my-ads' }}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default NoticesList;
