import React from 'react';
import ReactDOM from 'react-dom/client';



//functional component--------
const Headercomponent1 = () => {
  return (
    <div>
            <h1>hy from 1</h1>
    </div>
  );
};

const Headercomponent2 = () => {
  return(
    <div>
    <Headercomponent1/>
    <h1>from react functional component2</h1>
    <h1>hy from 2</h1>
  </div> 

  )
   
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Headercomponent2/>);





