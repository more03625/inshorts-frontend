import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { createTheme, useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import categories from '../data/category';
import { capitalize } from '../helper/comman_helper';
const useStyles = makeStyles({
    list: {
        width: 200,
        paddingLeft: 10,
        paddingRight: 5
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer({ setCategory }) {
    const classes = useStyles();
    const [state, setState] = React.useState({ top: false });
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    type: prefersDarkMode ? 'light' : 'dark',
                },
            }),
        [prefersDarkMode],
    );
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button >
                    <ListItemText primary="Categories" />
                </ListItem>
            </List>
            <Divider />

            <List>
                {categories.map((text, index) => (
                    <ListItem button key={text} onClick={() => setCategory(text)}>
                        <ListItemText primary={capitalize(text)} />
                    </ListItem>
                ))}
            </List>

        </div>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
                <ThemeProvider theme={theme}>
                    <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                        {list('left')}
                    </Drawer>
                </ThemeProvider>

            </React.Fragment>
        </div>
    );
}
