import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'; 
import PropTypes from 'prop-types'; 
// SCREAM PROFILE SCREAMSKELETON
import Scream from '../components/scream/Scream'; 
import Profile from '../components/profile/profile'; 
import ScreamSkeleton from '../util/ScreamSkeleton'; 
// redux
import { connect } from 'react-redux'; 
import { getScream } from '../redux/actions/dataActions'; 
// home mainpage
class home extends Component {
    componentDidMount() {
        this.props.getScreams();
    }
    render() {
        const { screams, loading } = this.props.data;
        let recentScreamMarkup = !loading ? (
            screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
        ) : (
            <ScreamSkeleton />
        );
        return (
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {recentScreamMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Profile />
                </Grid>
            </Grid>
        );
    }
}

home.propTypes = {
    getScreams: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    { getScream }
)(home);
