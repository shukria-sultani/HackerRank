function libraryFine(d1, m1, y1, d2, m2, y2) {

   if (y1 > y2) {
      return 10000
   }
   if (y1 < y2) {
      return 0
   }
   if (m1 > m2) {
      return 500 * (m1 - m2)
   } if (m1 < m2) {
      return 0
   }
   if (d1 > d2) {
      return 15 * (d1 - d2)
   }

   return 0
}


console.log(libraryFine(20, 5, 2025, 20, 5, 2025))
console.log(libraryFine(20, 5, 2025, 16, 5, 2025))
console.log(libraryFine(20, 10, 2025, 20, 5, 2025))
console.log(libraryFine(16, 7, 2026, 20, 5, 2025))
