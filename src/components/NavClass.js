import React, { Component, Fragment } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button/Button';
import axios from "axios";
import { connect } from "react-redux";
import { store } from "../reduxToolkit/store";
// import { Redirect } from 'react-router';

import { saveSearchedData, saveClickedData, saveMoviesData} from "../reduxToolkit/createSlice";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

class NavClass extends Component{

    constructor(props){
        super();
        this.state = {
            temp : false
        }
    }

    handleClick = (event) => {
        // <Redirect to='/about' />
    }

    handleSearch = (event) => {
        console.log(event.target.value);
        // this.props.saveMoviesData(null);
        axios.get('http://localhost:2480/search/'+event.target.value).then((searchData)=>{
            if(searchData.data.length !== 0){
                this.props.saveSearchedData(searchData.data);
                // this.props.saveMoviesData(searchData.data);
                // this.setState({ temp : true});
                // dispatch(saveClickedData(props.imgdata));
                // console.log(store.getState().click.clickData); 
                // navigate('/clickPath');
                console.log(store.getState().click.searchData);
                // console.log(store.getState().search.searchData);
            }
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    render(){
        return(
            <Fragment>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" className="bg-dark navbar-dark" style={{color:'#E50914'}}>
                        <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link href='/' style={{textDecoration:'none'}}><img src={require('../Styles/ironman.jpg')} style={{width:"40px"}} alt='iman' /></Link>
                            <Link href='/' style={{textDecoration:'none'}}><Button style={{color:'#E50914'}}>
                                MFlix
                            </Button></Link>
                            <Link href='/movies' style={{textDecoration:'none'}}><Button style={{color:'#E50914'}}>
                                Movies
                            </Button></Link>
                            <Link href='/shortfilms' style={{textDecoration:'none'}}><Button style={{color:'#E50914'}}>
                                Short Films
                            </Button></Link>
                            <Link href='/about' style={{textDecoration:'none'}}><Button style={{color:'#E50914'}}>
                                About
                            </Button></Link>
                        </Typography>
                        
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                
                                onChange={(event)=> this.handleSearch(event)}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    searchData : state.searchData,
    clickData : state.clickData,
    moviesData : state.moviesData
  });

const mapDispatchToProps = { saveSearchedData, saveClickedData, saveMoviesData };

export default connect(mapStateToProps, mapDispatchToProps)(NavClass);