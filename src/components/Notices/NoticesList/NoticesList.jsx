import { Backdrop, CircularProgress } from '@mui/material';
import { useMemo } from 'react';
// import { useParams } from 'react-router-dom';
import { useGetAllNoticesQuery } from 'redux/notices/noticesApi';

const NoticesList = () => {
  // let { category } = useParams();
  const { data = [], error, isLoading } = useGetAllNoticesQuery();

  useMemo(() => '', []);

  return (
    <>
      {isLoading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {error && (
        <img src="../../../images/errors/puppy.png" alt="puppy">
          Ooops
        </img>
      )}
      {data.length &&
        data.map(notice => (
          <p>
            {notice.category} {notice.title}
          </p>
        ))}
    </>
  );
};

export default NoticesList;
