import { useParams } from 'react-router-dom';

const NoticesList = () => {
  let { category } = useParams();
  return (
    <>
      <p>{category}</p>
      <ul>
        <li>notice 1 {category}</li>
        <li>notice 2 {category}</li>
        <li>notice 3 {category}</li>
        <li>notice 4 {category}</li>
        <li>notice 5 {category}</li>
      </ul>
    </>
  );
};

export default NoticesList;
