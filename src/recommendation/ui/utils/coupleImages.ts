const COUPLE_IMAGES = [
  "/couple-images/101f79ab9e7c9f07f0c5c27a51f64e2c.jpg",
  "/couple-images/24eaf54ffd200e824ff8d4ba764ad1f1.jpg",
  "/couple-images/477dbbffd6f359a052914e22ddfbbe07.jpg",
  "/couple-images/5931fa8d0c5caa0b7a32c450964ec699.jpg",
  "/couple-images/905b068d695058bbf6c3f3338b297954.jpg",
  "/couple-images/95ed72bbb8a2830524c8142601ebe9c2.jpg",
  "/couple-images/9af3e30b79c8b0dc966ac4ef235c24ab.jpg",
  "/couple-images/a6d59d776f952260621dfe87d1b91f07.jpg",
  "/couple-images/c04b33b2a63378154d9bef87f79c7133.jpg",
];

export function getRandomCoupleImage(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return COUPLE_IMAGES[hash % COUPLE_IMAGES.length];
}
