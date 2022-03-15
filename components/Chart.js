import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styles from '../styles/Card.module.css';

export default function Chart() {
    const data = [
        {
          subject: 'Ousado',
          A: 120,
          B: 150,
          fullMark: 150,
        },
        {
          subject: 'Medroso',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Vagabundo',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Corneteiro',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Audacioso',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'Molengão',
          A: 65,
          B: 85,
          fullMark: 150,
        },
      ];

    return (
        <Card className={styles.customCard} sx={{ marginBottom: '16px', borderRadius: '8px', mx: 'auto'}}>
            <CardContent>
                <Typography sx={{ fontSize: '16px' }} component="div">
                    Resultado
                </Typography>
                <RadarChart
                    cx={300}
                    cy={250}
                    outerRadius={150}
                    width={600}
                    height={600}
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                    />
                </RadarChart>
            </CardContent>
        </Card>
    );
  }
