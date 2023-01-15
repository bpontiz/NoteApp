require('dotenv').config();
require('./database.js');
const app = require('./app.js');

function main() {
    const getPortFromApp = app.get('port');

    app.listen(getPortFromApp);

    console.log("\n----------NOTE APP----------");
    
    console.log(`Server successfully running on port ${getPortFromApp}\n`);
};

main();