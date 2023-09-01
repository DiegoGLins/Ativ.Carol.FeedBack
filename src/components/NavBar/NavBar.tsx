
import { navigation } from '../../config/navigation';
import { } from '../../index.css'
import { Link } from 'react-router-dom';


const NavBar: React.FC = () => {


  return (
    <div className='bodyNav' style={{ justifyContent: 'center', alignItems: 'center' }}  >
      <ul style={{ justifyContent: 'center', alignItems: 'center' }}>
        <li id='marker'>
          {
            navigation.map((item => {
              return (
                <Link key={item.key} className='styleButton' style={{ color: '#fff', textDecoration: 'none' }} to={item.url}>{item.label}
                </Link>
              )
            }
            ))}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
