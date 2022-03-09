import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import styles from '../styles/QuestionCard.module.css';

export default function QuestionCard(props) {
    return (
        <Card sx={{ marginBottom: '16px', borderRadius: '8px', mx: 'auto', maxWidth: '1400px', width: '640px' }}>
            <CardContent>
                <Typography sx={{ fontSize: '16px' }} component="div">
                    {props.question.title} <span style={{ color: 'red'}}>*</span>
                </Typography>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    {props.question.options.map((item, k) => {
                        return (<FormControlLabel 
                            key={k}
                            className={styles.radioLabel} 
                            value={item.value}
                            control={<Radio />} 
                            label={item.label} 
                        />)
                    })}
                </RadioGroup>
            </CardContent>
            
        </Card>
    );
}