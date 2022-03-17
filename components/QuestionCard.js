import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import styles from '../styles/Card.module.css';
import { useState } from 'react';
import { ErrorOutline } from '@mui/icons-material';

export default function QuestionCard(props) {
    const [inputValue, setInputValue] = useState('');
    let component = null;
    
    const handleChange = (id, value) => {
        setInputValue(value)
        props.setAnswer(id, value)
    }

    if (props.question.type === 'radio') {
        component = (
            <RadioGroup 
                name="radio-buttons-group"
                value={inputValue}
                onChange={(e, value) => handleChange(props.question.id, value)}
            >

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
        )
    } else if (props.question.type === 'text') {
        component = (
            <TextField 
                fullWidth 
                variant="standard"
                value={inputValue}
                onChange={e => handleChange(props.question.id, e.target.value)} 
            />
        )
    }

    let cssMandatory = {};
    let textMandatory = null;

    if (props.camposPendentes && !inputValue && props.question.mandatory) {
        cssMandatory = { border: '2px #cf5f5f solid' }
        textMandatory = (
            <Typography variant="caption" sx={{ color: 'red', display: 'inline-flex', paddingTop: '12px'}} component="div">
                <ErrorOutline fontSize="small"/>&nbsp; Esta pergunta é obrigatória
            </Typography>
        )
    }

    return (
        <Card className={styles.customCard} sx={{...cssMandatory, p: 2, marginBottom: '16px', borderRadius: '8px', mx: 'auto' }}>
            <CardContent>
                <Typography className={props.question.type} sx={{ fontSize: '16px' }} component="div">
                    {props.question.title} {props.question.mandatory ? <span style={{ color: 'red' }}>*</span> : null }
                </Typography>
                { component }
                { textMandatory }
            </CardContent>

        </Card>
    );
}