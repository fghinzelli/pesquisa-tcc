import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControlLabel, List, ListItem, Radio, RadioGroup } from '@mui/material';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import styles from '../styles/Card.module.css';
import { useState } from 'react';

export default function QuestionCardRadioGrid(props) {

    return (
        <Card className={styles.customCard} sx={{ p: 2, marginBottom: '16px', borderRadius: '8px', mx: 'auto'}}>
            <CardContent>
                <TableContainer>
                <Table>
                    <TableBody>
                    {props.questions.map((question, k) => {
                        return (

                            <TableRow key={k}>
                                <TableCell>
                                    <Typography  sx={{ fontSize: '16px' }}>
                                        {question.title} <span style={{ color: 'red' }}>*</span>
                                    </Typography>
                                </TableCell>
                                <StateRadio question={question} setThisAnswer={(id, value) => props.setAnswer}/>
                            </TableRow>
                        )})
                    }
                    </TableBody>
                </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

const StateRadio = (props) => {
    const [selectedValue, setSelectedValue] = useState('');

    const radioOptions = [
        'Quase sempre', 
        'Muitas vezes',
        'Poucas vezes',
        'Quase nunca'
    ];

    const handleChange = (id, value) => {
        props.setThisAnswer(id, value)
        setSelectedValue(value);
    }

    return (
        radioOptions.map((item, k) => {
            return (
                <TableCell key={k}>
                    <Radio 
                        checked={selectedValue === item}
                        onChange={() => handleChange(props.question.id, item)}
                        name={`question${props.question.id}`} 
                        value={item} 
                        />
                </TableCell>
            )
        })
    )
}