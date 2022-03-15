import HeaderCard from '../components/HeaderCard';
import QuestionCard from '../components/QuestionCard';
import TextCard from '../components/TextCard';
import QuestionCardRadioGrid from '../components/QuestionCardRadioGrid';
import Chart from '../components/Chart';
import { Grid, Button, Paper, Stack, Box, TextField, Card, CardContent, Typography }  from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState([])

  const questions1 = [
    {
      id: 1,
      title: 'Gênero',
      type: 'radio',
      options: [
        {label: 'Feminino', value: 'feminino'},
        {label: 'Masculino', value: 'masculino'},
        {label: 'Outro', value: 'outro'}
      ]
    },
    {
      id: 2,
      title: 'Idade',
      type: 'radio',
      options: [
        {label: '18 a 30 anos', value: '18 a 30 anos'},
        {label: '31 a 40 anos', value: '31 a 40 anos'},
        {label: '41 a 50 anos', value: '41 a 50 anos'},
        {label: 'acima de 61 anos', value: 'acima de 61 anos'}
      ]
    },
    {
      id: 3,
      title: 'Escolaridade',
      type: 'radio',
      options: [
        {label: 'Ensino Fundamental', value: 'Ensino Fundamental'},
        {label: 'Ensino médio', value: 'Ensino médio'},
        {label: 'Ensino Superior', value: 'Ensino Superior'},
        {label: 'Pós-Graduação', value: 'Pós-Graduação'}
      ]
    },
    {
      id: 4,
      title: 'Qual é o número de funcionários da empresa que atua?',
      type: 'radio',
      options: [
        {label: '0 a 19', value: '0 a 19'},
        {label: '20 a 49', value: '20 a 49'},
        {label: '50 a 99', value: '50 a 99'},
        {label: '100 a 499', value: '100 a 499'},
        {label: '500 ou mais', value: '500 ou mais'}
      ]
    },
    {
      id: 5,
      title: 'Qual é o setor da empresa?',
      type: 'radio',
      options: [
        {label: 'Serviços', value: 'Serviços'},
        {label: 'Indústria', value: 'Indústria'},
        {label: 'Comércio', value: 'Comércio'},
        {label: 'Construção civil', value: 'Construção civil'},
        {label: 'Agronegócio', value: 'Agronegócio'}
      ]
    },
    {
      id: 6,
      title: 'Em qual município localiza-se a empresa em qual trabalha?',
      type: 'text',
      id: 'input-municipio'
    },
    {
      id: 7,
      title: 'Caso deseje receber o resultado desta pesquisa, informe seu e-mail abaixo:',
      type: 'text',
      id: 'input-email'
    }
  ]

  const questions2 = [
    { id: 10, title: '1. Evito demonstrar minhas emoções. ', group: 1},
    { id: 11, title: '2. Evito demonstrar minhas emoções. ', group: 1},
    { id: 12, title: '3. Evito demonstrar minhas emoções. ', group: 1},
  ]

  const handleSetAnswers = (idAnswer, theAnswer) => {
    setAnswers([...answers.filter(i => i.id !== idAnswer), {id: idAnswer, answer: theAnswer}]);
    console.log(answers)
  }

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
          <Box>
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
          <QuestionCardRadioGrid  questions={questions2} setAnswer={(id, answer) => handleSetAnswers(id, answer)}/>
        </Grid> 
        <Grid item xs={12}>
          <Box sx={{ mx: 'auto' }}>
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
          <Box>
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
        <Grid item xs={12} md={8} sx={{ mx: 'auto'}}>
          <HeaderCard />
        </Grid>
        <Grid item xs={12} md={8} sx={{ mx: 'auto'}}>
          {conteudo}
        </Grid>
        
      </Grid>
  )
}
