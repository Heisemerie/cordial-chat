import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

const ReactCompilerConfig = {
  target: '18', // Specify React version
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        ['babel-plugin-react-compiler', ReactCompilerConfig],
      ],
    },
  }), tsconfigPaths()], 
})
