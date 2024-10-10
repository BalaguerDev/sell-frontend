import { getGreetingMessage } from '../common/utils/utils';
import { PageContainer, PageText,  } from './styles/PageStyles';

const Dashboard = () => (


  
  <PageContainer>
    <h2>{getGreetingMessage('Pedro')} </h2>
    <PageText>Resumen de las actividades y métricas clave.</PageText>
  </PageContainer>
);

export default Dashboard;
