import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#2196f3',
            light: '#4dabf5',
            dark: '#1769aa',
        },
        secondary: {
            main: '#f50057',
            light: '#f73378',
            dark: '#ab003c',
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
        },
        background: {
            default: '#282c34',
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                padding: '20px 10px',
                margin: '10px',
                backgroundColor: '#fff', // 5d737e
            },
        },
        MuiButton: {
            root: {
                margin: '5px',
            },
        },
    },
});
export default theme;