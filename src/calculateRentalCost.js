/**
 * @param {number} days
 *
 * @return {number}
 */

const dayPrice = 40;
const desconto50 = 50;
const desconto20 = 20;

function calculateRentalCost(days) {
  if (days >= 3 && days <= 6) {
    return days * dayPrice - desconto20;
  } else if (days >= 7) {
    return days * dayPrice - desconto50;
  } else {
    return days * dayPrice;
  }
}

module.exports = calculateRentalCost;
