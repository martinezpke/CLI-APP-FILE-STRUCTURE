import { writeFileSync } from 'fs';
import { join } from 'path';

const generate = (type) => {
  const dir = process.cwd();
  const fileName = `${type}.js`;

  writeFileSync(join(dir, fileName), `// ${type} generado`);
  console.log(`${fileName} creado en`, dir);
};

export default generate;
