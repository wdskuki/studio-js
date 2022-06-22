const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({
        name: "n"
      })) {
      path.node.name = "x";
    }
  },
});

const output = generate(ast, {}, code);
console.log(JSON.stringify(output))