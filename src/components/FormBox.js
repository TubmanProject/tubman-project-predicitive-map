import React from 'react';
import Axios from 'axios';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class FormBox extends React.Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      sex: ''
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  select(event) {
    event.preventDefault();
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      sex: event.target.value
    });
    this.props.querySex.bind(event.target.value);
    console.log(this.state.sex);
  }

  render() {
    return (
      <div>
        <Dropdown className="formbox" isOpen={this.state.dropdownOpen} toggle={this.toggle} >
          <DropdownToggle caret>
            Sex
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.select} value="male">Male</DropdownItem>
            <DropdownItem onClick={this.select} value="female">Female</DropdownItem>
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
