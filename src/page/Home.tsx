
// import { Box, Grid } from '@mui/material';
import * as React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Grid } from '@mui/material';


const CardSkillHome: React.FC = () => {

    return (
        <>
            <NavBar />
            <Grid xs={12} container item style={{ marginTop: '250px', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                <Grid className='boxCard' container item style={{ width: '100%', height: '220px', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ background: '#fff', position: 'absolute', bottom: '90px', borderRadius: '100%', width: '130px', height: '130px' }} src={''} ></img>
                </Grid >
            </Grid>

        </>
    );
};


export default CardSkillHome;
