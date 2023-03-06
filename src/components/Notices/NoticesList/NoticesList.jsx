import { Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
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
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              columns={{ mobile: 1, tablet: 2, desktop: 4 }}
              spacing={{ mobile: 3, tablet: 3, desktop: 3 }}
            >
              {notices.map(notice => (
                <Grid mobile={1} tablet={1} desktop={1} key={notice._id}>
                  <NoticeCard notice={notice} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )
      )}
    </>
  );
};

export default NoticesList;
