import { a } from './a';
import { b } from './a';

var requirejs = require('requirejs');

console.log(a);

async function bootstrap() {
  const app = await a.create('AppModule');
  await app.listen(3000);
}
bootstrap();
