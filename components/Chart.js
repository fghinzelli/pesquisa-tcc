import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import styles from '../styles/Card.module.css';

export default function Chart(props) {
    const data = [
        {
          subject: 'Competitivo',
          A: props.total.competitivo,
          fullMark: 150,
        },
        {
          subject: 'Cooperativo',
          A: props.total.cooperativo,
          fullMark: 150,
        },
        {
          subject: 'Impaciente',
          A: props.total.impaciente,
          fullMark: 150,
        },
        {
          subject: 'Perfeccionista',
          A: props.total.perfeccionista,
          fullMark: 150,
        },
        {
          subject: 'Sedutor',
          A: props.total.sedutor,
          fullMark: 150,
        }
      ];

    const perfis = [
      { name: 'Competitivo', description: 'Caracteriza-se por ter um perfil competitivo, determinado. É muito ambicioso, odeia perder e evita ceder. Não prioriza o ganha-ganha em uma negociação, pois visa o interesse próprio, dando pouca atenção às necessidades alheias. Pede descontos e negocia duramente.'},
      { name: 'Cooperante', description: 'Caracteriza-se por ter um perfil flexível e cooperante. Preocupa-se em colaborar, realizando a maioria das ocasiões concessões. Percebe as necessidades da outra parte, priorizando uma negociação de ganha-ganha, firmando contratos de longo prazo e duradouros. Raramente pede descontos e evita ambientes de competitvos.'},
      { name: 'Impaciente', description: 'Caracteriza-se pela imaciencia, pela sua ansiedade na tomada de decisão. Possui um sendo de urgência, valorizando na maioria das ocasiçoes negócios de oportunidade. Realiza várias tarefas ao mesmo tempo e imcomoda-se com ritmo lento das decisões.'},
      { name: 'Perfeccionista', description: 'Caracteriza-se por ser detalhista, sendo suas descisões seguidas pelo principio lógico de causa e efeito. Segue rigorosamente as regras e normas de procedimentos. Geralmente, possui uma personalidade reservada, sendo pouco flexível. Pelo seu excesso de formalidade, demora para tomar de decisões. Estuda todo processo antes de iniciar uma negociação para viabilizar o melhor alternativa, com ganhos de ambas as partes.'},
      { name: 'Sedutor', description: 'Caracteriza-se por ter um perfil que procura manter bons relacionamentos.Tem um ótimo relacionamentos de network. Prioriza o ganha-ganha em uma negociação, porém pode ser muito político e suas decisões podem ser revogadas facilmente. É pouco detalhista, sendo criativo para a condução dos processos.'}
    ]


    return (
      <>
        <Card className={styles.customCard} sx={{ marginBottom: '16px', borderRadius: '8px', mx: 'auto'}}>
            <CardContent>
                <Typography variant="h5" sx={{ textAlign: 'center'}}>
                    Resultado
                </Typography>
                <ResponsiveContainer width='100%' height={400}>
                  <RadarChart
                    outerRadius={90} width={730} height={250}
                    data={data}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                      name="Perfil"
                      dataKey="A"
                      stroke="#1976d2"
                      fill="#1976d2"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        <Card className={styles.customCard} sx={{ marginBottom: '16px', borderRadius: '8px', mx: 'auto'}}>
          <CardContent>
            { perfis.map((perfil, k) => {
              return (
                <div key={k}>
                  <Typography variant="body1" sx={{ textAlign: 'center', backgroundColor: 'rgba(25, 118, 210, 0.8)', color: 'white', marginTop: '12px', p: 1}} component='div'>
                    {perfil.name}
                  </Typography>
                  <Typography variant="body2" sx={{ p: 1}}>
                  {perfil.description}
                  </Typography>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </>
    );
  }
