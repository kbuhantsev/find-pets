import { Backdrop, CircularProgress } from '@mui/material';
import { useMemo } from 'react';
// import { useParams } from 'react-router-dom';
import { useGetAllNoticesQuery } from 'redux/notices/noticesApi';
import errorImg from '../../../images/errors/puppy.png';

const NoticesList = () => {
  // let { category } = useParams();
  const { data: notices = [], error, isLoading } = useGetAllNoticesQuery();

  useMemo(() => '', []);

  // console.log(notices);

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
      {error && <img src={errorImg} alt="puppy" />}
      {notices && (
        <ul>
          {notices.map(notice => (
            <li key={notice.id}>
              {notice.category} {notice.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NoticesList;
