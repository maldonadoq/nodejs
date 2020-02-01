const app = require('./app');
const { connect } = require('./database');

async function main(){
	// db connection
	await connect();

	// express application
  await app.listen(4000);
  console.log('Server on Port 4000');
}

main();