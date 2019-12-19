export default async (type, name, host = `./${type}`, version) => {
  const publicPathes = {
    development: "/",
    production: `${host}/${name}/`
  };

  const _import = await import("./_import_" + process.env.NODE_ENV);
  let puzzle = await _import.default(type, name, host,version);
  return puzzle.default(publicPathes[process.env.NODE_ENV]);
};
