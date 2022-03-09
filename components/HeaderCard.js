import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader} from '@mui/material';

export default function HeaderCard() {
    return (
        <Card sx={{ borderRadius: '8px', borderTop: 'rgb(66 133 244) solid 10px', mx: 'auto', maxWidth: '1400px', width: '640px' }}>
            <CardContent>
                <Typography sx={{ fontSize: '32px'}} variant="h4">
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