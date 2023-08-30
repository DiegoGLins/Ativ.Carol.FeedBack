
// import { CardStyled } from './CardStyled';
import { Container, Grid } from '@mui/material';
import * as React from 'react';
import NavBar from '../components/NavBar/NavBar';


const CardSkillHome: React.FC = () => {

    return (
        <>
            <Container maxWidth='sm'>
                <NavBar />
                <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} className='boxCard' container>
                    <Grid md={6} xs={12} item>
                        <img style={{ borderRadius: '100%', backgroundColor: '#fff', width: '250px', height: '250px' }} src={''}></img>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};


export default CardSkillHome;
