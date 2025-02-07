import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    resolve: true,
  },
  outDir: "dist",
  clean: true,
  sourcemap: true,
});
