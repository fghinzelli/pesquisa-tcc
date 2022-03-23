import HeaderCard from '../components/HeaderCard';
import QuestionCard from '../components/QuestionCard';
import TextCard from '../components/TextCard';
import QuestionCardRadioGrid from '../components/QuestionCardRadioGrid';
import Chart from '../components/Chart';
import { Grid, Button, Stack, Box, Card, Typography, Alert }  from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState([])
  const [totalPerfis, setTotalPerfis] = useState({})
  const [respostasPendentes, setRespostasPendentes] = useState(false);

  const questions1 = [
    { id: 1, title: '1. Evito demonstrar minhas emoções.'},
    { id: 2, title: '2. Falo o que penso, mesmo que desagrade a outra parte.'},
    { id: 3, title: '3. Detesto voltar atrás em tratativas já acordadas.'},
    { id: 4, title: '4. Peço descontos nos processos realizados.'},
    { id: 5, title: '5. Sou um negociador de pulso firme que demonstra autoridade.'},
    { id: 6, title: '6. Entendo o processo de negociação como uma grande batalha muito competitiva.'},
    { id: 7, title: '7. Pressiono as pessoas envolvidas para que busquem os resultados.'},
    { id: 8, title: '8. Fico extremamente desconfortável quando não realizo um processo de compra com o objetivo inicial desejado.'},
    { id: 9, title: '9. Sou exigente, nos processos de compra que participo.'},
    { id: 10, title: '10. Na maioria das ocasiões evito realizar concessões.'},
    { id: 11, title: '11. Sinto-me responsável por fazer os fornecedores da empresa "se sentirem bem", com a parceria realizada.'},
    { id: 12, title: '12. Durante um processo de negociação, raramente utilizo a palavra NÃO.'},
    { id: 13, title: '13. Tenho vergonha de pedir descontos, por diversos fatores.'},
    { id: 14, title: '14. Prefiro ceder para evitar discussões nas rodadas de negociações.'},
    { id: 15, title: '15. Quando não gosto de algo, tenho por característica não me manifestar.'},
    { id: 16, title: '16. Geralmente espero que a outra parte perceba o que preciso sem ter que manifestar meu interesse.'},
    { id: 17, title: '17. Evito negociar com representantes de vendas agressivos.'},
    { id: 18, title: '18. Se tiver a oportunidade de me impor em uma reunião de negociação geralmente sou prestativo procurando favorecer a outra parte.'},
    { id: 19, title: '19. Sou conciliador, procurando mais diálogo, para buscar entendimento.'},
    { id: 20, title: '20. Tendo a concordar para evitar, conflitos.'},
    { id: 21, title: '21. Necessito fazer as coisas o mais depressa possível e terminar de uma vez'},
    { id: 22, title: '22 Em uma reunião de negociação exponho minhas ideias rapidamente a ponto da outra parte ter dificuldade em me entender.'},
    { id: 23, title: '23. Sou impaciente, a compra deve ser fechada imediatamente.'},
    { id: 24, title: '24. Tenho por hábito apressar os fornecedores para o fornecimento de orçamentos e retorno de negociações.'},
    { id: 25, title: '25. Enquanto estou tratando de um processo de compras, já estou pensando no próximo que vem a seguir.'},
    { id: 26, title: '26. Evito negociar com pessoas lentas.'},
    { id: 27, title: '27. Faço as tarefas dos outros por não conseguir esperar que terminem.'},
    { id: 28, title: '28. Não tenho paciência para longas negociações.'},
    { id: 29, title: '29. Utilizo da estratégia de interromper a fala da outra parte para impor minha ideia.'},
    { id: 30, title: '30. Quando realizo questionamentos, sobre minhas dúvidas, desejo que a resposta seja dada de forma imediata.'},
    { id: 31, title: '31. Todos os processos que participo devem ser executados na maior perfeição.'},
    { id: 32, title: '32. Entendo que todos os processos não devem ser realizados de forma simples'},
    { id: 33, title: '33. Sou uma pessoa que se prepara bem e busca informações sobre o assunto, minunciosamente, antes de negociar.'},
    { id: 34, title: '34. Mesmo que tenha tido êxito em uma negociação, penso que deveria ter feito melhor.'},
    { id: 35, title: '35. As pessoas me veem como um profissional organizado.'},
    { id: 36, title: '36. Prefiro que exista formalidade nas negociações.'},
    { id: 37, title: '37. Não tolero os erros cometidos pelos outros.'},
    { id: 38, title: '38.  Sempre exijo que os acordos sejam detalhados, contendo todas as informações pertinentes ao processo.'},
    { id: 39, title: '39. A burocracia de um processo é importante para eficácia da negociação.'},
    { id: 40, title: '40. Preocupo-me antes da negociação em saber os detalhes do produto, a ponto de realizar pesquisa prévia, solicitar catálogos, realizar visitas, etc.'},
    { id: 41, title: '41. Sou persuasivo(a), procurando influenciar e impor minhas ideias conduzindo a negociação.'},
    { id: 42, title: '42. Sou do tipo popular, uma pessoa empática, amável, de fácil convivência.'},
    { id: 43, title: '43. Me defino como sendo uma pessoa criativa, com percepção tranquila e cheia de ideias.'},
    { id: 44, title: '44. Sou otimista e acredito que no final tudo dá certo pois nada é impossível.'},
    { id: 45, title: '45. Procuro manter um relacionamento próximo a amizade com foco em cooperação e simpatia com meus fornecedores.'},
    { id: 46, title: '46. Sou comunicativo, costumo falar bastante expressando com facilidade as minhas ideias.'},
    { id: 47, title: '47. Faço concessões para atender os objetivos.'},
    { id: 48, title: '48. Procuro ser pouco detalhista, pois entendo que o resultado é o que importa.'},
    { id: 49, title: '49. Na maioria das vezes procuro analisar o comportamento do representante de vendas para entender o seu objetivo.'},
    { id: 50, title: '50. Procuro utilizar meu poder de convencimento pra impor minhas convicções e aquilo que acredito.'}
  ];

  const questions2 = [
    {
      id: 51,
      title: 'Gênero',
      type: 'radio',
      options: [
        {label: 'Feminino', value: 'feminino'},
        {label: 'Masculino', value: 'masculino'},
        {label: 'Outro', value: 'outro'}
      ], 
      mandatory: true
    },
    {
      id: 52,
      title: 'Idade',
      type: 'radio',
      options: [
        {label: '18 a 30 anos', value: '18 a 30 anos'},
        {label: '31 a 40 anos', value: '31 a 40 anos'},
        {label: '41 a 50 anos', value: '41 a 50 anos'},
        {label: 'acima de 61 anos', value: 'acima de 61 anos'}
      ],
      mandatory: true
    },
    {
      id: 53,
      title: 'Escolaridade',
      type: 'radio',
      options: [
        {label: 'Ensino Fundamental', value: 'Ensino Fundamental'},
        {label: 'Ensino médio', value: 'Ensino médio'},
        {label: 'Ensino Superior', value: 'Ensino Superior'},
        {label: 'Pós-Graduação', value: 'Pós-Graduação'}
      ],
      mandatory: true
    },
    {
      id: 54,
      title: 'Qual é o número de funcionários da empresa que atua?',
      type: 'radio',
      options: [
        {label: '0 a 19', value: '0 a 19'},
        {label: '20 a 49', value: '20 a 49'},
        {label: '50 a 99', value: '50 a 99'},
        {label: '100 a 499', value: '100 a 499'},
        {label: '500 ou mais', value: '500 ou mais'}
      ],
      mandatory: true
    },
    {
      id: 55,
      title: 'Qual é o setor da empresa?',
      type: 'radio',
      options: [
        {label: 'Serviços', value: 'Serviços'},
        {label: 'Indústria', value: 'Indústria'},
        {label: 'Comércio', value: 'Comércio'},
        {label: 'Construção civil', value: 'Construção civil'},
        {label: 'Agronegócio', value: 'Agronegócio'}
      ],
      mandatory: true
    },
    {
      id: 56,
      title: 'Em qual município localiza-se a empresa em que trabalha?',
      type: 'text',
      mandatory: true
    },
    {
      id: 57,
      title: 'Caso deseje receber o resultado desta pesquisa, informe seu e-mail abaixo:',
      type: 'text',
      mandatory: false
    }
  ]

  const radioOptions = [
    'Quase nunca',
    'Poucas vezes',
    'Muitas vezes',
    'Quase sempre'
];

  const handleSetPage = page => {
    setPage(page);
    window.scrollTo(0, 0)
  }

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
        if (item.id > 50 && item.id < 60) {
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
      let contador = radioOptions.indexOf(answer.answer);
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
    questions1.forEach(q => labelQuestions[q.id] = q.title);
    questions2.forEach(q => labelQuestions[q.id] = q.title);
    let newRow = {}
    answers.forEach(answer => { 
      return newRow[labelQuestions[answer.id]] = answer.answer
    })
    let now = new Date();
    newRow['Carimbo de data/hora'] = now.toLocaleString('pt-BR')
    fetch('/api/sheets', {
      method: "POST",
      body: JSON.stringify(newRow)
    })
    .then( response => {
      return response.json()
    })
    .then( data => {
      console.log('Resposta gravada com sucesso!');
      console.log(data.data)
      handleSetPage(4);
    })
    .catch (error => {
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

  if (page === 1) {
    conteudo = (
      <>
        <Grid item xs={12} >
          <TextCard>
              Prezado (a) Senhor (a):<br/>
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

          </TextCard>
        </Grid> 
        <Grid item xs={12}>
          <Box sx={{ mx: 'auto' }}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" color="inherit" onClick={() => handleSetPage(2)}>Iniciar</Button>
            </Stack>
          </Box>
        </Grid>
      </>
    )
  } else if (page === 2) {
    conteudo = (
      <>
        <Grid item xs={12} >
          <TextCard>
            Levando em consideração, em uma escala, marque a opção que você considera mais adequada para as afirmações que seguem, 
            que podem lhe caracterizar seu perfil nas situações que envolvem um processo de negociação com os fornecedores de sua empresa.

          </TextCard>
        </Grid>
        <Grid item xs={12}>
          <QuestionCardRadioGrid camposPendentes={respostasPendentes} radioOptions={radioOptions.reverse()} questions={questions1} setAnswer={(id, answer) => handleSetAnswers(id, answer)}/>
        </Grid>
        <Grid item xs={12}>
          <Box>
            {respostasPendentes ? <Alert sx={{marginBottom: '12px'}} severity="error">Por favor, preencha todos os campos obrigatórios</Alert> : null }
            <Stack spacing={2} direction="row">
                {/* <Button variant="contained" color="inherit" onClick={() => handleSetPage(1)}>Voltar</Button> */}
                <Button variant="contained" color="inherit" onClick={handleValidacao}>Próxima</Button>
            </Stack>
            
          </Box>
        </Grid>
      </>
    );
  } else if (page === 3) {
    conteudo = (
      <>
        <Grid item xs={12}>
          <Card sx={{ p: 2, backgroundColor: 'rgba(6,133, 244, 1)', color: 'white', marginBottom: '16px', borderRadius: '8px', mx: 'auto'}}>
            <Typography variant="h6">
              Caracterização Sociográfica
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12}>
          { questions2.map((q, k) => <QuestionCard camposPendentes={respostasPendentes} key={k} question={q} setAnswer={(id, answer) => handleSetAnswers(id, answer)} />)}
        </Grid>
        <Grid item xs={12}>
          <Box>
            {respostasPendentes ? <Alert sx={{marginBottom: '12px'}} severity="error">Por favor, preencha todos os campos obrigatórios</Alert> : null }
            <Stack spacing={2} direction="row">
                {/* <Button variant="contained" color="inherit" onClick={() => handleSetPage(2)}>Voltar</Button> */}
                <Button variant="contained" color="primary" onClick={handleValidacao}>Enviar</Button>
            </Stack>
            
          </Box>
        </Grid>
      </>
    )
  } else if (page === 4) {
    conteudo = (
      <>
        <Grid item xs={12} >
          <Chart total={totalPerfis}/>
        </Grid>
        <Grid item xs={12}>
          <Box>
              <Stack spacing={2} direction="row">
                {/* <Button variant="contained" color="inherit" onClick={() => handleSetPage(3)}>Voltar</Button> */}
                <Button variant="contained" onClick={handleReiniciar}>Refazer teste</Button>
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
