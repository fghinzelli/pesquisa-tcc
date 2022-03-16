import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import styles from '../styles/Card.module.css';

export default function QuestionCard(props) {
    let component = null;
    
    const handleChangeText = e => {
        props.setAnswer(props.question.id, e.target.value)
    }

    if (props.question.type === 'radio') {
        component = (
            <RadioGroup name="radio-buttons-group">
            { props.question.options.map((item, k) => {
                return (<FormControlLabel
                    key={k}
                    className={styles.radioLabel}
                    value={item.value}
                    control={<Radio onChange={() => props.setAnswer(props.question.id, item.value)}/>}
                    label={item.label}
                    />)
                })}
            </RadioGroup>
        )
    } else if (props.question.type === 'text') {
        component = (
            <TextField 
                fullWidth 
                variant="standard"
                onChange={handleChangeText} 
            />
        )
    }

    return (
        <Card className={styles.customCard} sx={{ p: 2, marginBottom: '16px', borderRadius: '8px', mx: 'auto' }}>
            <CardContent>
                <Typography className={props.question.type} sx={{ fontSize: '16px' }} component="div">
                    {props.question.title} <span style={{ color: 'red' }}>*</span>
                </Typography>
                { component }
            </CardContent>

        </Card>
    );
}