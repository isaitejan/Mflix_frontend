import React, { Fragment } from "react";
import '../Styles/cards.css';
import { useDispatch } from 'react-redux';
import { saveClickedData } from '../reduxToolkit/createSlice';
import { store } from "../reduxToolkit/store";
import { useNavigate } from 'react-router-dom';

function MovieCard(props) {

    // const data = useSelector(state => state.clickData); //read data from store
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // saveImgData = (event)=>{
        
    //     // event.preventDefault();
    //     // console.log(store.getState().click);
    //     // const dispatch = useDispatch();
    //     // dispatch(saveClickedData(this.props.imgdata));
    //     // console.log(store.getState().click);
    // }
    const saveImgData = (event) => {
        
        event.preventDefault();
        
        dispatch(saveClickedData(props.imgdata));
        console.log(store.getState().click.clickData);
        navigate('/clickPath');
    }

    return(
            <Fragment>
                <div className="col-2.5 m-3">
                    <a href="/clickPath" onClick={(event)=>saveImgData(event)}>
                    <div className="card" >
                        <img className="card-img-tp" style={{height:"240px",width:"160px"}} src={props.poster}  alt={props.title}/>
                    </div>
                    </a>
                </div>
            </Fragment>
        );
    
}

export default MovieCard;