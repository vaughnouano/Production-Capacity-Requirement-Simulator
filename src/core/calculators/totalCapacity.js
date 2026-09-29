export function calculateTotalCapacity(internalCapacity, subconCapacity = 0) {
  return (internalCapacity || 0) + (subconCapacity || 0);
}
