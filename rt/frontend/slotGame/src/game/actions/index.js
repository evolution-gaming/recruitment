
import Config from '../config';

export async function spin() {
  const result = await fetch(`http://localhost:${Config.portId}/spin`)
    .then((res) => res.json());

  return result;
};