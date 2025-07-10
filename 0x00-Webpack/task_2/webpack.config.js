const path = require('path');

module.exports = {
  // Set mode to production for optimizations
  mode: 'production',
  
  // Entry point for our application
  entry: './js/dashboard_main.js',
  
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    clean: true, // Clean the output directory before emit
    assetModuleFilename: 'assets/[name][ext]' // Asset naming pattern
  },
  
  // Performance settings to avoid size warnings
  performance: {
    maxAssetSize: 500000, // 500kb
    maxEntrypointSize: 500000, // 500kb
    hints: 'warning'
  },
  
  // Module rules for different file types
  module: {
    rules: [
      // CSS loader rule
      {
        test: /\.css$/i, // Matches .css files
        use: [
          'style-loader', // Injects CSS into DOM
          'css-loader'    // Interprets CSS files
        ],
      },
      
      // Image loader rule with optimization
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Matches image files
        type: 'asset/resource', // Handles as separate files
        generator: {
          filename: 'assets/[name][ext]' // Output path for images
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              // Image optimization settings
              mozjpeg: {
                progressive: true,
                quality: 80
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.6, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              }
            }
          }
        ]
      }
    ],
  },
  
  // Optimization settings
  optimization: {
    minimize: true, // Minimize the bundle
  }
};
