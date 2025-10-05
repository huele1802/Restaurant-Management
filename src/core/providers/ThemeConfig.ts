import type { ThemeConfig } from "antd"

const primaryColor = "#0088FF"
const successColor = "#52c41a"
const warningColor = "#faad14"
const errorColor = "#f5222d"

export const antdThemeConfig: ThemeConfig = {
    token: {
        colorPrimary: primaryColor,

        colorSuccess: successColor,
        colorWarning: warningColor,
        colorError: errorColor,

        borderRadius: 6,

        // fontFamily: 'Inter, sans-serif',
    },

    components: {
        // Button: {
        //     borderRadius: 4,
        //     controlHeight: 36,
        // },

        Card: {
            borderRadiusLG: 10,
            headerBg: "#f8f9fa",
            colorBorder: "#D9D9D9",
            paddingLG: 12,
            lineWidth: 1,
            lineType: "solid",
            colorTextHeading: "#fff"
            // boxShadow:
        },

        // Input: {
        //     controlHeight: 38,
        // },

        // Modal: {
        //     paddingMD: 32,
        // },
    },
}
