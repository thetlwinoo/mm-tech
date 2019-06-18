import { BoxConfig } from '@box/types';

export const boxConfig: BoxConfig = {
    colorTheme: 'theme-default',
    customScrollbars: true,
    layout: {
        style: 'vertical-layout-1',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'box-navy-700',
            secondaryBackground: 'box-navy-900',
            folded: false,
            hidden: false,
            position: 'left',
            variant: 'style1'
        },
        toolbar: {
            customBackgroundColor: false,
            background: 'box-white-500',
            hidden: false,
            position: 'below-static'
        },
        header: {
            customBackgroundColor: true,
            background: 'box-navy-900',
            hidden: false,
            position: 'above-fixed'
        },
        footer: {
            customBackgroundColor: true,
            background: 'box-navy-900',
            hidden: false,
            position: 'below-fixed'
        },
        copyright: {
            customBackgroundColor: false,
            background: 'box-navy-900',
            hidden: false,
            position: 'below-fixed'
        },
        sidepanel: {
            hidden: false,
            position: 'right'
        }
    }
};
