module.exports = {
    plugins: [{
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/viewvlab/c0ca2218634749be915ed0ce65bcce8d?v=61fc7838810348c88c649f6a39947bf4"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/viewvlab/c6047aa4e9914e2f84b91d0267fa22ea?v=1aa8576e883a4752a46db73d37e09fc3"
            }
        }
    ],
}