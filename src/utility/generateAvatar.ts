import { createAvatar } from "@dicebear/core";
import thumbs from "@dicebear/thumbs";

export default function generateAvatar(seed: string) {
  let avatar = createAvatar(thumbs, {
    seed: seed,
  }).toDataUriSync();

  return avatar;
}
