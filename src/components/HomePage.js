import axios from "axios";
import React, { Component, Fragment } from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import { store } from "../reduxToolkit/store";

import { saveSearchedData, saveMoviesData } from "../reduxToolkit/createSlice";

class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            respData : null,
            searchData : this.props.searchD
        }
    }

    componentDidMount() {
        let { respData } = this.state;
        axios.get('http://localhost:2480/movies').then((resp)=>{
            this.props.saveMoviesData(resp.data);
            respData = resp.data;
            this.setState({respData: respData}); //this setState is to re-render the component
        }).catch(err =>{
            console.log(err.message);
        })  
    }

    render(){

        return(
            <Fragment>
                {(store.getState().click.moviesData !== null) ? <div className="container p-2">
                    <div className="card-deck ">
                        {store.getState().click.moviesData.map((doc,key)=>{
                            return <MovieCard key={key} imgdata={doc} poster={doc.poster} title={doc.title}/>
                        })}
                    </div>
                </div> : <h1 className="display-6" style={{textAlign: "center", margin: "10px"}}>Fetching Data.......!!</h1>}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    searchData : state.searchData,
    moviesData : state.moviesData
  });

const mapDispatchToProps = { saveSearchedData, saveMoviesData };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);