import HeaderCard from '../components/HeaderCard';
import QuestionCard from '../components/QuestionCard';
import TextCard from '../components/TextCard';
import Chart from '../components/Chart';
import { Grid, Button, Paper, Stack }  from '@mui/material';
import { useState } from 'react';
import { Box } from '../../../../../../dados/projetos/pesquisa-tcc/pesquisa-tcc/node_modules/@mui/system';


export default function Home() {
  const [page, setPage] = useState(1);

  const questions1 = [
    {
      title: 'Gênero',
      options: [
        {label: 'Feminino', value: 'feminino'},
        {label: 'Masculino', value: 'masculino'},
        {label: 'Outro', value: 'outro'}
      ]
    },
    {
      title: 'Idade',
      options: [
        {label: '18 a 30 anos', value: '18 a 30 anos'},
        {label: '31 a 40 anos', value: '31 a 40 anos'},
        {label: '41 a 50 anos', value: '41 a 50 anos'},
        {label: 'acima de 61 anos', value: 'acima de 61 anos'}
      ]
    },
    {
      title: 'Escolaridade',
      options: [
        {label: 'Ensino Fundamental', value: 'Ensino Fundamental'},
        {label: 'Ensino médio', value: 'Ensino médio'},
        {label: 'Ensino Superior', value: 'Ensino Superior'},
        {label: 'Pós-Graduação', value: 'Pós-Graduação'}
      ]
    }
  ]

  const questions2 = [
    {
      title: '1. Evito demonstrar minhas emoções. ',
      options: [
        {label: 'Quase sempre', value: 'Quase sempre'},
        {label: 'Muitas vezes', value: 'Muitas vezes'},
        {label: 'Poucas vezes', value: 'Poucas vezes'},
        {label: 'Quase nunca', value: 'Quase nunca'},
      ]
    },
    {
      title: 'Aqui aparecerão as demais questões',
      options: []
    }
  ]

  let conteudo = null;

  if (page === 1) {
    conteudo = (
      <>
        <Grid item xs={12} >
          <TextCard>
            <p>Prezado (a) Senhor (a):<br/>
              A presente pesquisa está sendo desenvolvida pelo acadêmico LUCIANO GHINZELLI, sendo requisito parcial à obtenção do título de Bacharel em Administração pela Universidade de Caxias do Sul – CAMPUS SEDE. 
              Essa pesquisa tem como objetivo principal identificar o perfil  de personalidade predominante dos  profissionais de negociação da área de compras, de empresas localizadas na Região Metropolitana da Serra Gaúcha. 
              Todas as informações aqui fornecidas serão tratadas de forma confidencial, tendo utilidade apenas para este trabalho, não sendo divulgadas informações de cunho pessoal como também de empresas. 
              O resultado desta pesquisa, em seu contexto generalizado poderá contribuir no desenvolvimento da atividade dos profissionais da área de compras da região,  como ferramenta para a maximização de resultados. 
              Desde já agradeço sua compreensão e colaboração. <br/>
              <br/>
              Atenciosamente, <br/>
              <br/>
              Luciano Ghinzelli<br/>
              Acadêmico de Administração de Empresas<br/>
              Comprador<br/>
            </p>
          </TextCard>
        </Grid>
        <Grid item xs={12}>
          { questions1.map((q, k) => <QuestionCard key={k} question={q}/>)}
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mx: 'auto', maxWidth: '1400px', width: '640px' }}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={() => setPage(2)}>Próximo</Button>
            </Stack>
          </Box>
        </Grid>
      </>
    );
  } else if (page === 2) {
    conteudo = (
      <>
        <Grid item xs={12} >
          <TextCard>
            <p>Levando em consideração, em uma escala, marque a opção que você considera mais adequada para as afirmações que seguem, 
              que podem lhe caracterizar seu perfil nas situações que envolvem um processo de negociação com os fornecedores de sua empresa.
            </p>
          </TextCard>
        </Grid>
        <Grid item xs={12}>
          { questions2.map((q, k) => <QuestionCard key={k} question={q}/>)}
        </Grid> 
        <Grid item xs={12}>
          <Box sx={{ mx: 'auto', maxWidth: '1400px', width: '640px' }}>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={() => setPage(1)}>Voltar</Button>
                <Button variant="contained" onClick={() => setPage(3)}>Enviar</Button>
            </Stack>
          </Box>
        </Grid>
      </>
    )
  } else if (page === 3) {
    conteudo = (
      <>  
        <Grid item xs={12} >
          <Chart />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mx: 'auto', maxWidth: '1400px', width: '640px' }}>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={() => setPage(2)}>Voltar</Button>
                <Button variant="contained" onClick={() => setPage(1)}>Reiniciar</Button>
            </Stack>
          </Box>
        </Grid>
      </>
    )
  }

  return (
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <HeaderCard />
        </Grid>
        {conteudo}
      </Grid>
  )
}
