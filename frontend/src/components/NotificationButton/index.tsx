import axios from 'axios';
import vector from '../../assets/images/vector.svg';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';
import './styles.css';

type Props = {
  saleId: number;
} 

function handleClick(saleId: number) {
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then((_response) => {
      toast('Notification sent successfully');
    });
}

function NotificationButton({ saleId }: Props) {
  return (
    <div className='dsmeta-red-btn' onClick={ () => handleClick(saleId) }>
    <img src={ vector } alt='Notifify' />
  </div>
  );
}

export default NotificationButton
