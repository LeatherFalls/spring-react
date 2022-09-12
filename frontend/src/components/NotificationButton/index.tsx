import axios from 'axios';
import vector from '../../assets/images/vector.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
  saleId: number;
} 

function handleClick(saleId: number) {
  axios.get(`${BASE_URL}sales/${saleId}/notification`)
    .then((response) => {
      console.log(response);
    });
}

function NotificationButton({ saleId }: Props) {
  return (
    <div className='dsmeta-red-btn' onClick={ () => handleClick(saleId) }>
    <img src={ vector } alt='Notificar' />
  </div>
  );
}

export default NotificationButton
