import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './stats.css';
class DbStats extends React.Component {

    constructor(){
        super();
        this.state ={
            stats : [],
            reloadInterval : 60000 //statistics reload frecuency
        }
    }
    componentDidMount(){
        this.interval = setInterval(()=>
        fetch("/db/statistics").then(res => res.json())
        .then((stats) => {
            console.log("fetching");
            var statList  = []
            for( var stat in stats)
            {
                stat = {
                    statKey : stat,
                    statValue : stats[stat]
                };
                statList.push(stat);
            }

            this.setState(
                
                {stats : statList})
            }
            
        ),this.reloadInterval)
    }
    componentWillUnmount() {
        clearInterval(this.refreshInterval);
      }
  render() {
    return (
        <div>
    <h2>Database Stats</h2>
        <ul>
        { this.state.stats.map(stat =>
        
            <li key ={ stat.statKey } >{ stat.statKey } | { stat.statValue } </li>
        
        
        )}

            
        </ul>
        </div>
    );
  }
}

export default DbStats;



ReactDOM.render(<DbStats />, document.getElementById('root'));

