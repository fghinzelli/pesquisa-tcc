import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import styles from '../styles/QuestionCard.module.css';

export default function QuestionCard(props) {

    const radioOptions = [
        'Quase sempre', 
        'Muitas vezes',
        'Poucas vezes',
        'Quase nunca'
    ];
    
    let component = null;

    
    if (props.question.type === 'radio') {
        if (props.question.options.length) {
            component = (
                <RadioGroup name="radio-buttons-group"> 
                    { props.question.options.map((item, k) => {
                        return (<FormControlLabel
                            key={k}
                            className={styles.radioLabel}
                            value={item.value}
                            control={<Radio />}
                            label={item.label}
                            />)
                        })}
                    </RadioGroup>
            );
        } else {
            component = (
                <RadioGroup row name="radio-buttons-group">
                    {radioOptions.map((item, k) => {
                        return (<FormControlLabel
                            key={k}
                            className={styles.radioLabel}
                            value={item}
                            control={<Radio />}
                            label={''}
                        />)
                    })}
                </RadioGroup>
            );
        }
    } else if (props.question.type === 'text') {
        component = (
            <TextField sx={{ minWidth: '400px' }} name="input-municipio" label="" variant="standard" />
        )
    }

    return (
        <Card sx={{ marginBottom: '16px', borderRadius: '8px', mx: 'auto', maxWidth: '1400px', width: '640px' }}>
            <CardContent>
                <Typography className={props.question.type} sx={{ fontSize: '16px' }} component="div">
                    {props.question.title} <span style={{ color: 'red' }}>*</span>
                </Typography>
                { component }
            </CardContent>

        </Card>
    );
}