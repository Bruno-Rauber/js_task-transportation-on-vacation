/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= 3 && days <= 6) {
    return days * DAILY_RATE - MID_TERM_DISCOUNT;
  } else if (days >= 7) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  } else {
    return days * DAILY_RATE;
  }
}

module.exports = calculateRentalCost;
