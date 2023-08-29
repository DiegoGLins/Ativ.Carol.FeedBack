// import * as C from '../App.styles'
import { Grid } from '@mui/material';
import { cardsArray } from '../components/Card/cardsArray';
import CardSkill from '../components/Card/CardSkill';


const Alexandre: React.FC = () => {
    return (
        <Grid md={5} xs={12} container item>
            {
                cardsArray.map((item) => (
                    <CardSkill key={item.name}
                        name={item.name}
                        image={item.image}
                        skill1={item.skill1}
                        skill2={item.skill2}
                        skill3={item.skill3}
                    />
                ))
            }
        </Grid>
    )
}

export default Alexandre;