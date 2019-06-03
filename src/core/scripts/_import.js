export default async (type, name) => {
  const _import = await import("./_import_" + process.env.NODE_ENV);
  let puzzle = await _import.default(type, name);
  return puzzle.default;
};
