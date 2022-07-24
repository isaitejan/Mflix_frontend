import React, { Component, Fragment } from "react";
import { store } from "../reduxToolkit/store";

export default class MovieDetails extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         dispData : null,
    //     }
    // }

    // componentDidMount = ()=>{
    //     let { dispData } = this.state;
    //     dispData = store.getState().click.clickData;
    //     this.setState({dispData : dispData});
    //     console.log("This is data:"+store.getState().click.clickData);
    // }

    render(){
        return(
            <Fragment>
                <div className="container border mt-4" >
                    {store.getState().click.clickData == null ? <h1>No data bhayya</h1> :
                    <div className="row">
                    <div className="col-4">
                        <img style={{height:"480px",width:"320px"}} src={store.getState().click.clickData.poster} alt="iman"/>
                    </div>
                    <div className="col-8">
                        <p className="display-5" style={{textAlign:'center'}}>{store.getState().click.clickData.title}</p>
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Plot:</td>
                                        <td>{store.getState().click.clickData.plot}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Genres:</td>
                                        <td>{store.getState().click.clickData.genres.map((ele)=>{  
                                                return ele+", ";
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Runtime:</td>
                                        <td>{store.getState().click.clickData.runtime} Minutes</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Cast:</td>
                                        <td>{store.getState().click.clickData.cast.map((ele)=>{
                                            return ele+", "
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Full Plot:</td>
                                        <td>{store.getState().click.clickData.fullplot}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Languages:</td>
                                        <td>{store.getState().click.clickData.languages.map((ele)=>{
                                            return ele+", ";
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>ReleasedOn:</td>
                                        <td>Dummy Date</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Directors:</td>
                                        <td>{store.getState().click.clickData.directors.map((ele)=>{
                                            return ele+", ";
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Rated:</td>
                                        <td>{store.getState().click.clickData.rated}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Awards:</td>
                                        <td>Dummy</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Year:</td>
                                        <td>{store.getState().click.clickData.year}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>IMDB:</td>
                                        <td>Dummy</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Countries:</td>
                                        <td>{store.getState().click.clickData.countries.map((ele)=>{
                                            return ele+", ";
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Type:</td>
                                        <td>{store.getState().click.clickData.type}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>Tomatoes:</td>
                                        <td>Dummy</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'right'}}>No of Mflix Comments:</td>
                                        <td>{store.getState().click.clickData.num_mflix_comments}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>}
                </div>
            </Fragment>
        );
    }
}