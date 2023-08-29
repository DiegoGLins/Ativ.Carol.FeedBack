import { navigation } from '../../config/navigation';
import { } from '../../index.css'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavBarStlyed } from './NavBarStyled';

interface NavBarProps {
  title: string;
}


const NavBar: React.FC<NavBarProps> = ({ title }) => {

  return (
    <>
      <Grid xs={12} container>
        <NavBarStlyed >
          <h1>{title}</h1>
          <ul className='bodyNav'>
            <li >
              {
                navigation.map((item => {
                  return (
                    <p key={item.key}>
                      <Link to={item.url}>{item.label}</Link>
                    </p>
                  )
                }
                ))}
              <div id='marker'></div>
            </li>
          </ul>
        </NavBarStlyed>
      </Grid>
    </>
  );
};

export default NavBar;
