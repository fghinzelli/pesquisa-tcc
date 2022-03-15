import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '../styles/Card.module.css';

export default function TextCard(props) {
    return (
        <Card className={styles.customCard} sx={{ p: 2, marginBottom: '16px', borderRadius: '8px', mx: 'auto'}}>
            <CardContent>
                <Typography variant="caption" color="text.secondary">
                    {props.children}
                </Typography>
            </CardContent>
        </Card>
    );
}