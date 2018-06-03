import React from 'react';
import Axios from 'axios';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class FormBox extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     fields: { }
  //   }
  // }

  // render() {
  //   return(
  //     <div className="well">
  //       <form onSubmit={this._handleSubmit.bind(this)}>
  //         <div class="input-group">
  //           <select class="form-control" ref={(input) => this._quantity = input} />
  //           <span class="input-group-btn">
  //             <button class="btn btn-default" type="submit">Filter</button>
  //           </span>
  //         </div>
  //       </form>
  //     </div>
  //   )
  // }

constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        <Dropdown className="formbox" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Sex
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      

        <Dropdown className="formbox" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Race
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="formbox" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Attorney Status
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="formbox" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Sentence Length Deviation from Avg
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }


  _handleSubmit(event) {
      event.preventDefault();
      this.props.onUpdate(this._quantity.value, this.props.game);
      this._quantity.value = ''
  }

  _getRace() {
    Axios.get('https://tubmanproject-api.mintyross.com/v1/fields/defendant_race')
    .then((response) => {
      //this.setState(race: response.data );
    });
  }

  componentDidMount() {
    //this._getRace();
  }

}

export default FormBox;
