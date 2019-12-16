export default async (type, name, host, modulesMap) => {
  const _import = await import("./_import_" + process.env.NODE_ENV);
  let puzzle = await _import.default(type, name, host, modulesMap);
  return puzzle.default;
};
