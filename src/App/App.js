
import './App.scss';

import Input from './Input'

function App() {
  return (
    <div className="App">
      <h1>Inputs</h1>
      <span style={{fontSize: "0.6em"}}>
        {`<Input />`}
      </span>
      <div style={{marginBottom: '0.5em'}}/>
      <Input />
      <span style={{fontSize: "0.6em"}}>
        {`<Input error/>`}
      </span>
      <div style={{marginBottom: '0.5em'}}/>
      <Input error/>
      <span style={{fontSize: "0.6em"}}>
        {`<Input disabled/>`}
      </span>
      <div style={{marginBottom: '0.5em'}}/>
      <Input disabled/>

      {/* HELPER TEXT */}
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{width: '100%'}}>
          <span style={{fontSize: "0.6em"}}>
          {`<Input helpingText="Some interesting text"/>`}
          <div style={{marginBottom: '0.5em'}}/>
          </span>
          <Input helpingText="Some interesting text" />
        </div>
        <div style={{width: '100%'}}>
         <span style={{fontSize: "0.6em"}}>
            {`<Input helpingText="Some interesting text" error/>`}
          </span>
          <div style={{marginBottom: '0.5em'}}/>
          <Input helpingText="Some interesting text" error/>
        </div>
      </div>

      {/* ICON */}
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{width: '100%'}}>
          <span style={{fontSize: "0.6em"}}>
          {`<Input endIcon iconValue="phone"/>`}
          </span>
          <div style={{marginBottom: '0.5em'}}/>
          <Input endIcon iconValue="phone"/>
        </div>
        <div style={{width: '100%'}}>
         <span style={{fontSize: "0.6em"}}>
         {`<Input endIcon iconValue="mail"/>`}
         </span>
          <div style={{marginBottom: '0.5em'}}/>
          <Input endIcon iconValue="password"/>
        </div>
      </div>

      {/* SIZE */}
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{width: '100%'}}>
          <span style={{fontSize: "0.6em"}}>
          {`<Input size="sm"/>`}
          </span>
          <div style={{marginBottom: '0.5em'}}/>
          <Input size="sm"/>
        </div>
        <div style={{width: '100%'}}>
         <span style={{fontSize: "0.6em"}}>
         {`<Input size="md"/>`}
         </span>
          <div style={{marginBottom: '0.5em'}}/>
          <Input size="md"/>
        </div>
      </div>

      {/* PLACEHOLDER VALUE */}
      <span style={{fontSize: "0.6em"}}>
        {`<Input value="text"/>`}
      </span>
      <div style={{marginBottom: '0.5em'}}/>
      <Input value="text"/>

      {/* FULL WIDTH */}
      <span style={{fontSize: "0.6em"}}>
        {`<Input fullWidth/>`}
      </span>
      <div style={{marginBottom: '0.5em'}}/>
      <Input fullWidth/>


    </div>
  );
}

export default App;
