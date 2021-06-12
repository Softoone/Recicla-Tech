import { Container } from "reactstrap";
import Menu from './components/Menu';
import Routes from './routes/Routes';
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <>
      <Menu/>
      <Container style={{ backgroundColor: '#fff', height: '90vh', paddingTop: '30px'}}>
        <Routes/>
      </Container>
    </>
  );
}

export default App;