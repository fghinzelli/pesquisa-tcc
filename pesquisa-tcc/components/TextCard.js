import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TextCard(props) {
    return (
        <Card sx={{ borderRadius: '8px', mx: 'auto', maxWidth: '1400px', width: '640px' }}>
            <CardContent>
                <Typography variant="caption" color="text.secondary">
                    {props.children}
                </Typography>
            </CardContent>
            
        </Card>
    );
}