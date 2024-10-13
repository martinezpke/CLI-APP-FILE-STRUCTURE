import { writeFileSync } from 'fs';
import { join } from 'path';

const init = () => {
  const dir = process.cwd();
  console.log('Inicializando proyecto en', dir);

  // Crear un archivo básico
  writeFileSync(join(dir, 'index.js'), '// Proyecto inicializado');
  console.log('Archivo index.js creado en', dir);
};

export default init;
