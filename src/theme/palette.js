import {alpha} from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
};

const PRIMARY = {
    lighter: '#EDE8F5',
    light: '#ADBBDA',
    main: '#8697C4',
    dark: '#7091E6',
    darker: '#3D52A0',
    contrastText: '#fff',
    soft: alpha('#3D52A0', 0.20),
    softer: alpha('#3D52A0', 0.10)
};

const SECONDARY = {
    lighter: '#D3D9D4',
    light: '#748D92',
    main: '#124E66',
    dark: '#2E3944',
    darker: '#212A31',
    contrastText: '#fff',
    soft: alpha('#212A31', 0.20),
    softer: alpha('#212A31', 0.10)
};

const INFO = {
    lighter: '#CAFDF5',
    light: '#61F3F3',
    main: '#00B8D9',
    dark: '#006C9C',
    darker: '#003768',
    contrastText: '#fff',
    soft: alpha('#CAFDF5', 0.20),
    softer: alpha('#CAFDF5', 0.10)
};

const SUCCESS = {
    lighter: '#D8FBDE',
    light: '#86E8AB',
    main: '#36B37E',
    dark: '#1B806A',
    darker: '#0A5554',
    contrastText: '#fff',
    soft: alpha('#D8FBDE', 0.20),
    softer: alpha('#D8FBDE', 0.10)
};

const WARNING = {
    lighter: '#FFF5CC',
    light: '#FFD666',
    main: '#FFAB00',
    dark: '#B76E00',
    darker: '#7A4100',
    contrastText: GREY[800],
    soft: alpha('#FFF5CC', 0.20),
    softer: alpha('#FFF5CC', 0.10)
};

const ERROR = {
    lighter: '#FFE9D5',
    light: '#FFAC82',
    main: '#FF5630',
    dark: '#B71D18',
    darker: '#7A0916',
    contrastText: '#fff',
    soft: alpha('#FFE9D5', 0.20),
    softer: alpha('#FFE9D5', 0.10)
};

const Orange = {
    darker: '#c75c11',
    dark: '#e06713',
    main: '#F97316',
    light: alpha('#F9731614', 0.3),
    lighter: alpha('#F9731614', 0.1)
}

const COMMON = {
    common: {black: '#000', white: '#fff'},
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    orange: Orange,
    divider: alpha(GREY[500], 0.24),
    action: {
        hover: alpha(GREY[500], 0.08),
        selected: alpha(GREY[500], 0.16),
        disabled: alpha(GREY[500], 0.8),
        disabledBackground: alpha(GREY[500], 0.24),
        focus: alpha(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

export default function palette(themeMode) {
    const light = {
        ...COMMON,
        mode: 'light',
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500],
        },
        background: {paper: '#fff', default: '#fff', neutral: GREY[200]},
        action: {
            ...COMMON.action,
            active: GREY[600],
        },
    };

    const dark = {
        ...COMMON,
        mode: 'dark',
        text: {
            primary: '#fff',
            secondary: GREY[500],
            disabled: GREY[600],
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: alpha(GREY[500], 0.16),
        },
        action: {
            ...COMMON.action,
            active: GREY[500],
        },
    };

    return themeMode === 'light' ? light : dark;
}