module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            height: {
                sm: "288px",
                md: "400px",
                xl: "600px",

            },
            width: {
                sm: "367px",
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                black: '#000',
                primary: '#14279B',
                secondary: '#F2F5FE',

            },
            fontSize: {
                xs: ["12px", "16px"],
                sm: ["14px", "18px"],
                base: ["16px", "23px"],
                med: ["24px", "29px"],
                min: ["30px", "31px"],
                lg: ["48px", "52px"],
                xl: ["72px", "80px"],
            },
        },


        screens: {
            sm: {max: "650px"},
            md: {min: "651px", max: "1024px"},
            lg: {min: "1024px"},
        },
        boxShadow: {
            sm: "0px 8px 4px rgba(0, 0, 0, 0.08);",
        },
    },
    plugins: [],
}
