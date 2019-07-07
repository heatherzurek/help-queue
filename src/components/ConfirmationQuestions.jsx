import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;

{/*PropTypes.func is the prop type declaration for functions passed into a component as a prop.*/}
{/*Unlike the event we created earlier, notice we call props.eventHandlerName, not this.eventHandlerName. This is because the method we're referring to is housed within a prop this time.*/}
