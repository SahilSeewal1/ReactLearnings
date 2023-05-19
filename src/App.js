import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import PropsFunction from './components/PropsFunction'
import PropsClass from './components/PropClass';
import ChangeText from './components/ChangeText';
import UseSetState from './components/UseSetState';
import PropStateChange from './components/PropStateChange'
import PropStateClassChange from './components/PropStateClassChange';
import PropStateChange2 from './components/PropStateChange2';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import BindingEvent from './components/BindingEvent';
import ParentComponent from './components/ParentComponent';
import Conditions from './components/Conditions';
import Arrays from './components/Arrays';
import InlineCss from './components/InlineCss';
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import Fragments  from './components/Fragments';
import ParentComp from './components/ParentComp';
import ParentComp1 from './components/ParentComp1';
import RefInput from './components/RefInput';
import OnClickRef from './components/OnClickRef';
import OnClickRef2 from './components/OnClickRef2';
import FRRefParent from './components/FRRefParent';
import Portals from './components/Portals';
import ErrorBoundary1 from './components/ErrorBoundary1';
import Counters from './components/Counters';
import MouseClick from './components/MouseClick';
import MouseHover from './components/MouseHover';
import Hoc from './components/Hoc';
import Renders from './components/Renders';
import ComponentA from './components/ComponentA';
import UseEffects from './components/UseEffects';


function App() {
  return (
    <div className="App">
      {/* function component */}
      <Greet/>
      {/* class component */}
      <Welcome/>
      
      <Hello/>
      
      {/* Props in function */}
      <PropsFunction name='cLark' shortName='ck'>
        <p>I am child element</p>
      </PropsFunction>
      
      {/* Props in class component */}
      <PropsClass name = 'bruce'>
        <p>I am child element for class</p>
      </PropsClass>

      {/* Change text on click of button */}
      <ChangeText/>

      {/* Use of setState */}
      <UseSetState/>

      {/* Destructuring props */}
      <PropStateChange name = 'bruce' shortName = 'master' occupation = 'actor' />
      <PropStateClassChange name = 'Clark' shortName = 'ck'/>
      <PropStateChange2 name = 'John' shortName = 'Jn' occupation = 'actor' />

      {/* Event handling - Button */}
      <FunctionClick/>
      <ClassClick/>

      {/* Binding Events */}
      <BindingEvent/>

      {/* Connecting parent compoent and child function*/}
      <ParentComponent/>

      {/* If else condition*/}
    <Conditions/>

    {/* Array */}
    <Arrays/>

    {/* Inline CSS */}
    <InlineCss primary = {true}/>

    {/* Create form */}
    <Form/>

    {/* Lifecycle of events */}
    <LifecycleA/>
    
    {/* Fragment */}
    <Fragments/>

    {/* Pure Component - applied on class component */}
    <ParentComp/>

    {/* Memo Component - applied on function component */}
    <ParentComp1/>

    {/* Ref */}
    <RefInput/>

    {/* Ref on click */}
    <OnClickRef/>

    {/* Ref on click - 2 */}
    <OnClickRef2/>

    {/* Forward Reference */}
    <FRRefParent/>

    {/* Portals */}
    <Portals/>

    {/* Error Boundary - Uncomment below statement to get error */}
    {/* <ErrorBoundary1/> */}

    {/* Counter Handler */}
    <Counters/>

    {/* Higher Order component - Used to seperate common code in to files */}
    <MouseClick/>
    <MouseHover/>

    {/* Higher Order component - Used to seperate common code and passing props as well as parmeters */}
    <Hoc/>

    {/* Render - Used to seperate common code */}
    <Renders/>

    {/* Context */}
    <ComponentA/>
    
    {/* UseEffect */}
    <UseEffects/>
    </div>
  );
}

export default App;
