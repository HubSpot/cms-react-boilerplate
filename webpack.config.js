const CopyWebpackPlugin = require("copy-webpack-plugin");
const HubSpotAutoUploadPlugin = require("@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const autoprefixer = require("autoprefixer");

const hubspotConfig = ({ portal, autoupload } = {}) => {
  return {
    target: "web",
    entry: {
      main: "./src/index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    optimization: {
      minimize: false,
    },
    resolve: {
      extensions: [".ts", ".json", ".js", ".tsx"], // Add your extensions here.
    },
    module: {
      strictExportPresence: true,
      rules: [
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        // {
        //   test: /\.s[ac]ss$/i,
        //   use: [
        //     MiniCssExtractPlugin.loader,
        //     { loader: "css-loader", options: { url: false } },
        //     "sass-loader",
        //   ],
        // },

        {
          test: /\.(svg)$/,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HubSpotAutoUploadPlugin({
        portal,
        autoupload,
        src: "dist",
        dest: "cms-react-boilerplate",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "src/modules",
            to: "modules",
          },
        ],
      }),
    ],
  };
};

module.exports = [hubspotConfig];
