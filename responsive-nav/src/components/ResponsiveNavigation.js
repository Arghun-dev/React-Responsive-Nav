import React, {useState} from 'react';
import { withStyles } from '@material-ui/styles';
import { NavLink, Link } from 'react-router-dom';

const styles = {
    toolbar: {
        background: '#333',
        height: '60px',
        width: '100%',
        position: 'fixed',
        boxShadow: '2px 2px 2px #ccc'
    },

    list: {
        display: 'flex',
        background: '#333',
        marginBlockStart: 0,
        marginBlockEnd: 0,
        paddingInlineStart: 0,
        height: '100%',
        alignItems: 'center',
        listStyleType: 'none',
        boxShadow: '2px 2px 2px #ccc'
    },

    listItems: {
        margin: '20px 10px',
        color: 'white',
        padding: '5px 20px',
        borderRadius: '.2rem',
        transition: 'all .2s',
        '&:hover': {
            background: '#999'
        }
    },


    '@media (max-width: 759px)': {
        list: {
            height: '100%',
            width: '300px',
            position: 'fixed',
            left: '-240px',
            top: '60px',
            flexDirection: 'column',
            transition: '300ms ease all'
        },

        active: {
            left: 0
        },

        Logo: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '2rem'
        },

        listItems: {
            width: '100%',
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between'
        },

        linkText: {
            marginLeft: '1rem'
        },

        linkIcon: {
            marginRight: '.6rem'
        },

        listLink: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
}

function ResponsiveNavigation({ classes, NavLinks, background, linkColor, logo }) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav
            className={classes.toolbar} 
            style={{ background: background }}
        >
            <ul style={{ background: background }} className={`${classes.list} ${navOpen ? classes.active : ''}`} >
                <div className={classes.Logo} onClick={() => setNavOpen(!navOpen)} style={{marginLeft: '10px', cursor: 'pointer'}}>
                    <img src={logo} height='40px' width='40px' />
                </div>
                {NavLinks.map(link => 
                    <li className={classes.listItems}>
                        <Link 
                            to={link.path}
                            classes={classes.listLink}
                            style={{ 
                                color: 'white', 
                                textDecoration: 'none', 
                                display: 'flex', 
                                flexDirection: 'row-reverse', 
                                alignItems: 'center',
                                marginRight: '10px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row-reverse',
                                justifyContent: 'space-between'
                            }}
                        > 
                            <span className={classes.linkIcon}>{link.icon}</span>
                            <span className={classes.linkText}>{link.text}</span>
                        </Link>
                        
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default withStyles(styles)(ResponsiveNavigation);