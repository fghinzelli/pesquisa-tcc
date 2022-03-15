import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControlLabel, List, ListItem, Radio, RadioGroup, TableHead } from '@mui/material';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import styles from '../styles/Card.module.css';
import { useState } from 'react';

export default function QuestionCardRadioGrid(props) {

    const radioOptions = [
        'Quase sempre', 
        'Muitas vezes',
        'Poucas vezes',
        'Quase nunca'
    ];

    return (
        <Card className={styles.customCard} sx={{ p: 2, marginBottom: '16px', borderRadius: '8px', mx: 'auto'}}>
            <CardContent>
                <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            { radioOptions.map((label, k) => <TableCell key={`label-${k}`}><strong>{ label }</strong></TableCell>)}
                        </TableRow>
                        
                    </TableHead>
                    <TableBody>
                    {props.questions.map((question, k) => {
                        return (
                            <TableRow style ={ k % 2 ? { background : "#f3f3f3" }:{ background : "white" }} key={`row-${k}`}>
                                <TableCell>
                                    <Typography  sx={{ fontSize: '16px' }}>
                                        {question.title} <span style={{ color: 'red' }}>*</span>
                                    </Typography>
                                </TableCell>
                                <StateRadio options={radioOptions} question={question} setThisAnswer={(id, value) => props.setAnswer}/>
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

    const handleChange = (id, value) => {
        props.setThisAnswer(id, value)
        setSelectedValue(value);
    }

    return (
        props.options.map((item, k) => {
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