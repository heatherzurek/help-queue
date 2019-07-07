import React from 'react';

function NewTicketForm(){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(_names.value);
    console.log(_location.value);
    console.log(_issue.value);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <style jsx>{`
        div {
          background-color: pink;
          border: 1px solid black;
          border-radius: 5px;
          padding: 5px;
          margin: 0 auto;
          text-align: center;
          width: 500px;
        }
        button {
          background-color: white;
          border: 1px solid black;
        }
        `}</style>
        <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
