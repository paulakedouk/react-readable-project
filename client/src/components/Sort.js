import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
      <div>
        <div className="sort-by">
          <label>
            <select>
              <option defaultValue>Sort By:</option>
              <option onChange={() => this.handleSort('timestamp')}>Date: Old to New</option>
              <option onChange={() => this.handleSort('-timestamp')}>Date: New to Old</option>
              <option onChange={() => this.handleSort('-voteScore')}>Score: High to Low</option>
              <option onChange={() => this.handleSort('voteScore')}>Score: Low to High</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default Sort;
