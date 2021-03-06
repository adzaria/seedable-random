'use strict'

function pearsonHash(phrase: string): number {
  const randomizedTable = [
    245, 45, 185, 210, 133, 238, 255, 41, 218, 52, 36, 106, 44, 67, 201, 163,
    207, 242, 22, 235, 149, 192, 241, 76, 151, 187, 116, 167, 233, 99, 150, 179,
    97, 50, 62, 200, 172, 183, 209, 196, 177, 0, 58, 60, 231, 63, 103, 5, 154,
    102, 147, 156, 56, 135, 77, 134, 13, 136, 174, 221, 101, 249, 193, 129, 120,
    244, 123, 110, 190, 155, 194, 19, 138, 152, 16, 14, 2, 92, 127, 70, 170,
    189, 121, 68, 164, 32, 33, 91, 232, 114, 4, 61, 237, 104, 3, 220,
    84, 254, 215, 158, 24, 199, 132, 160, 42, 69, 83, 239, 188, 20, 75, 144,
    139, 109, 145, 11, 81, 111, 130, 214, 112, 168, 195, 39, 211, 165, 143, 225,
    96, 35, 240, 216, 86, 118, 173, 228, 252, 43, 191, 203, 140, 85, 12, 87,
    159, 162, 119, 229, 6, 89, 46, 95, 72, 71, 59, 224, 125, 208, 7, 202,
    234, 15, 223, 175, 94, 49, 184, 65, 90, 57, 213, 37, 117, 247, 227, 17,
    204, 64, 88, 108, 251, 146, 93, 27, 73, 230, 198, 115, 28, 148, 79, 30,
    248, 212, 197, 80, 161, 48, 166, 178, 1, 181, 53, 243, 55, 122, 128, 47,
    126, 176, 18, 226, 142, 113, 246, 171, 78, 51, 100, 105, 205, 217, 186, 54,
    107, 219, 74, 66, 82, 10, 182, 23, 236, 153, 250, 124, 157, 38, 25, 26,
    169, 131, 253, 31, 141, 137, 21, 8, 206, 98, 222, 29, 9, 34, 180, 40
  ]

  return phrase.split('').reduce((hash, c) => randomizedTable[(hash + c.charCodeAt(0)) % (randomizedTable.length - 1)], phrase.length % (randomizedTable.length - 1));
}

export default pearsonHash;