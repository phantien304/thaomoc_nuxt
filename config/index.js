import configPro from './env/product';
import configDev from './env/development';
import configLocal from './env/local';
const env = process.env.NODE_ENV || 'development';
export default  env === 'development' ? configDev : (env === 'local' ? configLocal : configPro);