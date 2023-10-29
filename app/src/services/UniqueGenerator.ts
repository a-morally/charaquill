let counter = 0;

function generate(): string {
  return (counter++).toString();
}

export const UniqueGenerator = {
  generate,
};
