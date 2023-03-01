import { useParams } from 'react-router-dom';

const NoticesList = () => {
  let { category } = useParams();
  return (
    <>
      <p>{category}</p>
      <ul>
        <li>notice 1</li>
        <li>notice 2</li>
        <li>notice 2</li>
        <li>notice 2</li>
        <li>notice 2</li>
      </ul>
    </>
  );
};

export default NoticesList;
