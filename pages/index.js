import HeaderCard from '../components/HeaderCard';
import QuestionCard from '../components/QuestionCard';
import TextCard from '../components/TextCard';
import QuestionCardRadioGrid from '../components/QuestionCardRadioGrid';
import Chart from '../components/Chart';
import { Grid, Button, Stack, Box, Alert, CircularProgress }  from '@mui/material';
import { useState } from 'react';
import { questions } from '../config/questions'

export default function Home() {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState([])
  const [totalPerfis, setTotalPerfis] = useState({})
  const [respostasPendentes, setRespostasPendentes] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSetPage = page => {
    setPage(page);
    window.scrollTo(0, 0)
  }

  const radioOpt = [
    'Quase nunca',
    'Poucas vezes',
    'Muitas vezes',
    'Quase sempre'
  ];

  const optionsRadio = [...radioOpt];
  optionsRadio.reverse();

  const handleSetAnswers = (idAnswer, theAnswer) => {
    setAnswers([...answers.filter(i => i.id !== idAnswer), {id: idAnswer, answer: theAnswer}]);
  }

  const handleValidacao = () => {
    let countAnswers = 0;
    if (page === 2) {
      countAnswers = answers.reduce((total, item) => {
        if (item.id <= 50) {
          return total + 1;
        }
      }, 0)
      if (countAnswers === 50) {
        setRespostasPendentes(false);
        handleSetPage(3);
      } else {
        setRespostasPendentes(true);
      }
    } else if (page === 3) {
      countAnswers = answers.reduce((total, item) => {
        if (item.id > 50 && item.id < 59) {
          return total + 1;
        } else {
          return total;
        }
      }, 0)
      if (countAnswers >= 8) {
        setRespostasPendentes(false);
        handleSetPage(4);
      } else {
        setRespostasPendentes(true);
      }
    } else if (page === 4) {
      countAnswers = answers.reduce((total, item) => {
        if (item.id > 58) {
          return total + 1;
        } else {
          return total;
        }
      }, 0)
      if (countAnswers >= 6) {
        setRespostasPendentes(false);
        handleEnviar();
      } else {
        setRespostasPendentes(true);
      }
    }
  }

  const handleEnviar = () => {
    let perfis = {
      competitivo: 0,
      cooperante: 0,
      impaciente: 0,
      perfeccionista: 0,
      sedutor: 0
    }
    answers.forEach(answer => {
      let contador = radioOpt.indexOf(answer.answer);
      if (answer.id <= 10) {
        perfis.competitivo += contador;
      } else if (answer.id <= 20) {
        perfis.cooperante += contador;
      } else if (answer.id <= 30) {
        perfis.impaciente += contador;
      } else if (answer.id <= 40) {
        perfis.perfeccionista += contador;
      } else if (answer.id <= 50 ) {
        perfis.sedutor += contador;
      }
    });
    setTotalPerfis(perfis);
    let labelQuestions = {};
    questions.session1.forEach(q => labelQuestions[q.id] = q.title);
    questions.session2.forEach(q => labelQuestions[q.id] = q.title);
    questions.session3.forEach(q => labelQuestions[q.id] = q.title);
    let newRow = {}
    answers.forEach(answer => newRow[labelQuestions[answer.id]] = answer.answer)
    let now = new Date();
    newRow['Carimbo de data/hora'] = now.toLocaleString('pt-BR');
    setLoading(true);
    fetch('/api/sheets', {
      method: "POST",
      body: JSON.stringify(newRow)
    })
    .then( response => {
      return response.json()
    })
    .then( data => {
      console.log('Resposta gravada com sucesso!');
      setLoading(false);
      handleSetPage(5);
    })
    .catch (error => {
      setLoading(false);
      console.log('Erro ao gravar os dados', error)
    })
    
  }

  const handleReiniciar = () => {
    setRespostasPendentes(false);
    setTotalPerfis({})
    setAnswers([]);
    handleSetPage(1)
  }

  let conteudo = null;

  switch (page) {
    case 1:
      conteudo = (
        <>
          <Grid item xs={12} >
            <TextCard>
                Prezado (a) Senhor (a):<br/>
                A presente pesquisa est?? sendo desenvolvida pelo acad??mico LUCIANO GHINZELLI, sendo requisito parcial ?? obten????o do t??tulo de Bacharel em Administra????o pela Universidade de Caxias do Sul ??? CAMPUS SEDE. 
                Essa pesquisa tem como objetivo principal identificar o perfil  de personalidade predominante dos  profissionais de negocia????o da ??rea de compras, de empresas localizadas na Regi??o Metropolitana da Serra Ga??cha. 
                Todas as informa????es aqui fornecidas ser??o tratadas de forma confidencial, tendo utilidade apenas para este trabalho, n??o sendo divulgadas informa????es de cunho pessoal como tamb??m de empresas. 
                O resultado desta pesquisa, em seu contexto generalizado poder?? contribuir no desenvolvimento da atividade dos profissionais da ??rea de compras da regi??o,  como ferramenta para a maximiza????o de resultados. 
                Desde j?? agrade??o sua compreens??o e colabora????o. <br/>
                <br/>
                Atenciosamente, <br/>
                <br/>
                Luciano Ghinzelli<br/>
                Acad??mico de Administra????o de Empresas | Comprador<br/>
                (54) 999849149 | luciano.ghinzelli@gmail.com<br/>
  
            </TextCard>
          </Grid> 
          <Grid item xs={12}>
            <Box sx={{ mx: 'auto' }}>
              <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary" onClick={() => handleSetPage(2)}>Iniciar</Button>
              </Stack>
            </Box>
          </Grid>
        </>
      );
      break;
    case 2:
      conteudo = (
        <>
          <Grid item xs={12} >
            <TextCard>
              Levando em considera????o, em uma escala, marque a op????o que voc?? considera mais adequada para as afirma????es que seguem, 
              que podem lhe caracterizar seu perfil nas situa????es que envolvem um processo de negocia????o com os fornecedores de sua empresa.
            </TextCard>
          </Grid>
          <Grid item xs={12}>
            <QuestionCardRadioGrid 
              camposPendentes={respostasPendentes} 
              radioOptions={optionsRadio} 
              questions={questions.session1} 
              setAnswer={(id, answer) => handleSetAnswers(id, answer)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box>
              {respostasPendentes ? <Alert sx={{marginBottom: '12px'}} severity="error">Por favor, preencha todos os campos obrigat??rios</Alert> : null }
              <Stack spacing={2} direction="row">
                  <Button variant="contained" color="primary" onClick={handleValidacao}>Pr??xima</Button>
              </Stack>
              
            </Box>
          </Grid>
        </>
      );
      break;
    case 3:
      conteudo = (
        <>
          <Grid item xs={12} >
            <TextCard>
            Nesta parte, sobre as estrat??gias de negocia????o, analise as situa????es a seguir optando pela op????o que melhor lhe define:
            </TextCard>
          </Grid>
          <Grid item xs={12}>
            <QuestionCardRadioGrid 
              camposPendentes={respostasPendentes} 
              radioOptions={optionsRadio} 
              questions={questions.session2} 
              setAnswer={(id, answer) => handleSetAnswers(id, answer)}/>
          </Grid>
          <Grid item xs={12}>
            <Box>
              {respostasPendentes ? <Alert sx={{marginBottom: '12px'}} severity="error">Por favor, preencha todos os campos obrigat??rios</Alert> : null }
              <Stack spacing={2} direction="row">
                  <Button variant="contained" color="primary" onClick={handleValidacao}>Pr??xima</Button>
              </Stack>
              
            </Box>
          </Grid>
        </>
      );
      break;
    case 4:
        conteudo = (
          <>
            <Grid item xs={12}>
              <TextCard>
                Caracteriza????o Sociogr??fica
              </TextCard>
            </Grid>
            <Grid item xs={12}>
              { questions.session3.map((q, k) => <QuestionCard camposPendentes={respostasPendentes} key={k} question={q} setAnswer={(id, answer) => handleSetAnswers(id, answer)} />)}
            </Grid>
            <Grid item xs={12}>
              <Box>
                {respostasPendentes ? <Alert sx={{marginBottom: '12px'}} severity="error">Por favor, preencha todos os campos obrigat??rios</Alert> : null }
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="primary" onClick={handleValidacao} endIcon={loading ? <CircularProgress size={12} sx={{color: 'white'}}/> : null}>Enviar</Button>
                </Stack>
                
              </Box>
            </Grid>
          </>
        )
      break;
    case 5:
      conteudo = (
        <>
          <Grid item xs={12} >
            <Chart total={totalPerfis}/>
          </Grid>
          <Grid item xs={12}>
            <Box>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={handleReiniciar}>Refazer teste</Button>
              </Stack>
            </Box>
          </Grid>
        </>
      )
      break;
    default:
      break;
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
