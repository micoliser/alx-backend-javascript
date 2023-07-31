export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  const int8view = new Int8Array(buffer);

  if (position >= int8view.length) throw new Error('Position outside range');
  int8view[position] = value;

  return dataView;
}
