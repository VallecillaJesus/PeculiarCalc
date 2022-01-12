import {CalcDev, CalcContainer, CalcScreen,CalcButtons, Container} from './components/styledComponents';
import CalcButton from './components/CalcButton'
function App() {

  const writeNumber = () => {
    console.log("HOla cmo esta")
  }

  return (
    <div>
      <CalcDev>
        <Container>
          <CalcContainer>
            <CalcScreen></CalcScreen>
            <CalcButtons>
                {[1,2,3,'+',4,5,6,'-',7,8,9,0,'.','/','='].map((x,i) => <CalcButton onClick={() => console.log(i)} key={i} number={x}/> )}
            </CalcButtons>
          </CalcContainer>
        </Container>
      </CalcDev>
    </div>
  );
}

export default App;
