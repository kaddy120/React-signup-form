const path = require("path");
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: "ts-loader",
                exclude:/node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }

        ]
    },
    watch:true,
    resolve:{
         extensions:[".ts",".tsx",".js"]
    }
}