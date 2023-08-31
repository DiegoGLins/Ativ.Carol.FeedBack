
import { navigation } from '../../config/navigation';
import { } from '../../index.css'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const NavBar: React.FC = () => {


  return (
    <>
      <Grid className='bodyNav' xs={12} style={{ justifyContent: 'center', alignItems: 'center' }} container >
        <ul style={{ justifyContent: 'center', alignItems: 'center' }}>
          <li id='marker'>
            {
              navigation.map((item => {
                return (
                  <div key={item.key}>
                    <button className='styleButton'>
                      <Link style={{ color: '#fff', textDecoration: 'none' }} to={item.url}>{item.label}</Link>
                    </button>
                  </div>
                )
              }
              ))}
          </li>
        </ul>
      </Grid>
    </>
  );
};

export default NavBar;
