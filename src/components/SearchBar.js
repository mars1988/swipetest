import React, { Component } from 'react'

class SearchBar extends Component {
    
    handleFilterTextChange( e ) {
        if( this.props.onFilterTextChange ) {
          this.props.onFilterTextChange(e.target.value);
        }
    }

    render() {
        const filterText = this.props.filterText;

        return(
            <div className="search">
                <div className="search__inner">
                    <form action="#">
                        <input type="text" placeholder="Jobs available..." value={filterText} onChange={this.handleFilterTextChange.bind(this)}/>
                    </form>
                </div>
            </div>
        ) 
    }
}

export default SearchBar