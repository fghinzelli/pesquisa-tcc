import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '../styles/Card.module.css';

export default function HeaderCard() {
    return (
        <Card className={styles.customCard} sx={{ p: 2, borderRadius: '8px', borderTop: 'rgb(66 133 244) solid 10px', mx: 'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: '24px'}} variant="h4">
                    Pesquisa Acadêmica - Perfil Profissional de Compras em Negociação
                </Typography>
                <br />
                <hr/>
                <Typography sx={{ color: 'red'}} variant="body2">
                    * Campo obrigatórios
                </Typography>
            </CardContent>
        </Card>
    );
}