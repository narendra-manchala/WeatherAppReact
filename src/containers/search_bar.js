import React, {Component} from 'react'


export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ""}

        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event){
        // console.log(event.target.value)
        this.setState({term: event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Enter the city for a 5-day forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}
//this is wonder ful