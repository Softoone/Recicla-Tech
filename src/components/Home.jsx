import reciclatechImg from '../assets/reciclatech-logo.png';

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={reciclatechImg} alt="logo-reciclatech" />

      <h1>Bem vindo ao Recicla Tech !!</h1>

      <p>Ajude a natureza e as próximas gerações.</p>
      <p>Recicle seu lixo eletrônico!</p>
    </div>
  );
}

export default Home;