
import { Container, Divider, Grid } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const DiegoCardSkill: React.FC = () => {

  return (
    <>
      <Container maxWidth='sm'>
        <Grid xs={12} className='boxCard' container >
          <Grid container item style={{ position: 'absolute' }}>
            <img style={{ position: 'relative', borderRadius: '25px', width: '180px', height: '230px', marginInlineEnd: '315px' }} src={'./image/Diego.jpg'} alt='Diego' />
          </Grid>
          <Grid container item style={{
            marginTop: '5px',
            position: 'relative',
            width: '650px', padding: '30px 40px 58px 240px', justifyContent: 'center', alignItems: 'flex-start', overflow: 'hidden'
          }}>
            <Grid item style={{
              fontFamily: 'sans-serif',
              fontSize: '24px',
              font: 'bold', textAlign: 'center',
              textTransform: 'uppercase'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className='star'>{'\u2B50'}</p>
                <p>{'DIEGO'}</p>
              </div>
              <Divider style={{ border: '#fff solid 1px', marginTop: '10px', marginBottom: '20px', width: '268px' }} />
            </Grid>
            <Grid item style={{
              width: '100%',
              fontFamily: 'sans-serif',
              fontSize: '18px',
              fontStyle: 'normal', textAlign: 'start',
            }}>

              <Accordion style={{ marginBottom: '10px', position: 'relative', color: '#fff', borderTopStyle: 'ridge', borderStartStartRadius: '30px', borderEndEndRadius: '30px', backgroundColor: 'transparent' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: 'blue' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{"1º Soft Skill"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>*Proativo</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ marginBottom: '10px', color: '#fff', borderTopStyle: 'groove', borderStartStartRadius: '30px', borderEndEndRadius: '30px', backgroundColor: 'transparent' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: 'blue' }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>{"2º Soft Skill"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>*Comunicativo</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ color: '#fff', borderTopStyle: 'groove', borderStartStartRadius: '30px', borderEndEndRadius: '30px', backgroundColor: 'transparent' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: 'blue' }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                > <Typography>{"3º Soft Skill"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>*Crítico</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid >
        </Grid>
      </Container>
    </>
  );
};


export default DiegoCardSkill;
