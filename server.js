const app = require('./app');
const database = require('./connection');

async function run() {
  try {
    await database
      .command({ ping: 1 })
      .then((response) => {
        if (response) console.log('Conexão MongoDB realizada com sucesso');
      });
  } catch (err) {
    console.error('Erro na conexão com MongoDB', err);
  }
}

run().catch(console.dir);

app.listen(3001, () => console.log('TigreLOG API running on port 3001'));