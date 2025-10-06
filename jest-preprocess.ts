import { createTransformer } from "babel-jest";

const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
};

export default createTransformer(babelOptions);
