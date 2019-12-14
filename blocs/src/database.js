const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, conn) => {
  if(err){
    if(err === 'PROTOCOL_CONNECTION_LOST'){
      console.error('DATABASE CONNECTION WAS CLOSED');
    }
    else if(err === 'ER_CON_COUNT_ERROR'){
      console.error('DATABASE HAS TO MANY CONNECTIONS');
    }
    else if(err === 'ECONNREFUSED'){
      console.error('DATABASE CONNECTION WAS REFUSED');
    }
  }
  else{
    conn.release();
  }

  console.log('DB IS CONNECTED');
  return;
});

pool.query = promisify(pool.query);

module.exports = pool;