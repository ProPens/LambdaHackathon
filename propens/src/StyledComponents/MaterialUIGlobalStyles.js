import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    
    root : {
        margin: 0,
        padding: 0
    },
    topNavigation: {
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'whitesmoke',
        fontFamily: `"Kulim Park", sans-serif`,
    },
    bottomNavigation: {
        position: 'fixed',
        display: 'flex',
        margin: '0 auto',
        paddingTop: '10px',
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'flex-start',
        justifyContent: 'center',
    
    },
    topLinksContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    topNavigationLink: {
        padding: '20px',
        color: 'white',
        textDecoration: 'none'
    }
});