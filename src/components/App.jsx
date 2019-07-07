import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }
  //Does this feel like a lot of code just to push something to an array? Are you wondering why we don't just call this.state.masterTicketList.push(newTicket) instead? Remember, we cannot alter state directly.. We can only alter state using setState(). And setState() takes a key value pair: The state value we're updating (masterTicketList in our case), and the new value we'd like to update it to.

  render(){
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
        <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
        <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
