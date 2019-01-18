import { multiply, add } from "./calculator";

export function doMath(one, two, three) {
  return add(multiply(one, two), three);
};