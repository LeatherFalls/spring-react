import vector from '../../assets/images/vector.svg';
import './styles.css';

function NotificationButton() {
  return (
    <div className='dsmeta-red-btn'>
    <img src={ vector } alt='Notificar' />
  </div>
  );
}

export default NotificationButton
