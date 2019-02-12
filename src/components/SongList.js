import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component{
    renderList(){
        // if you want to call selectSong here, need to call dispatch
        // because redux doesn't automatically detect any return objects
        // from actin selector
        // why 2 return
        // the outer return a new array 
        // the inner return is for the jsx from the mapping function 
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={ () => this.props.selectSong(song) }
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="ui divided list">
            {this.renderList()}
            </div>
        );
    }
};

const mapStateToProps = (state) =>{
    return { songs: state.songs };
};

// pass in selectSong as a prop
// when passing action creator to connect function, wraps it up into
// a new function, and then automatically call the dispatch function 
// for us 
export default connect(mapStateToProps,{ selectSong })(SongList);