export default (type, name) => import(`@/${type}/${name}/index.js`);
