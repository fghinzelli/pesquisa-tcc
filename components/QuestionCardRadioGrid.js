import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Radio, TableHead } from '@mui/material';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import styles from '../styles/Card.module.css';
import { useState } from 'react';
import { ErrorOutline } from '@mui/icons-material'

export default function QuestionCardRadioGrid(props) {
    
    return (
        <Card className={styles.customCard} sx={{ p: 2, marginBottom: '16px', borderRadius: '8px', mx: 'auto'}}>
            <CardContent>
                <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            { props.radioOptions.map((label, k) => <TableCell key={`label-${k}`}><strong>{ label }</strong></TableCell>)}
                        </TableRow>
                        
                    </TableHead>
                    <TableBody>
                    {props.questions.map((question, k) => {
                        return (
                            <StateRow camposPendentes={props.camposPendentes} key={k} options={props.radioOptions} question={question} setThisAnswer={(id, value) => props.setAnswer(id, value)}/>
                        )})
                    }
                    </TableBody>
                </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

const StateRow = (props) => {
    const [selectedValue, setSelectedValue] = useState(''); 

    const handleChange = (id, value) => {
        props.setThisAnswer(id, value)
        setSelectedValue(value);
    }

    return (
        <TableRow style ={ props.camposPendentes && !selectedValue ? {background : "#ffc7c7"} : (props.question.id % 2 ? { background : "#f3f3f3" }:{ background : "white" })} key={`row-${props.question.id}`}>
            <TableCell>
                <Typography sx={{ fontSize: '16px' }}>
                    {props.question.title} <span style={{ color: 'red' }}>*</span>
                </Typography>
                { props.camposPendentes && !selectedValue ? 
                    <Typography variant="caption" sx={{ color: 'red', display: 'inline-flex', p: 1}}>
                        <ErrorOutline fontSize="small"/>&nbsp; Esta pergunta é obrigatória
                    </Typography> : null
                }
            </TableCell>
            { props.options.map((item, k) => {
                return (
                    <TableCell key={`${props.question.id}${k}`}>
                        <Radio 
                            checked={selectedValue === item}
                            onChange={() => handleChange(props.question.id, item)}
                            name={`question${props.question.id}`} 
                            value={item} 
                            />
                    </TableCell>
                )
            })}
        </TableRow>
    )
}