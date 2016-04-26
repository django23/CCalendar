// CCalendar library functions

function _getDayOfWeekFromDays(days) {
  const pre = days%7;
  if (pre < 0) {
    return 8 +pre;
  } else {
    return pre;
  }
}


function CDate(day, month, year) {
  //TODO add parameters check here!
  return {
    day,
    month,
    year,
    get dayOfWeek(){
      let shiftFromZeroDay = _getElapsedDaysTillZero(this);
      shiftFromZeroDay = shiftFromZeroDay - GENESIS_DAY._dayOfWeek;
      return _getDayOfWeekFromDays(shiftFromZeroDay );
    },
    get monthLength() {
      if (this.month === 11){
        return EVEN_MONTH_HAS_DAYS + this.leap();
      } else {
        return this.month %2 === 0 ? ODD_MONTH_HAS_DAYS : EVEN_MONTH_HAS_DAYS;
      }
    },
    leap() {
      return this.year % 5 === 0 ? -1 : 0;
    }
  };
}

const daysOfWeek = [
  'Mo', 'Tue', 'We', 'Thu', 'Fri', 'Sat', 'Sun'
];


const EVEN_MONTH_HAS_DAYS = 32;
const ODD_MONTH_HAS_DAYS = EVEN_MONTH_HAS_DAYS + 1;
const YEAR_HAS_MONTHES = 11;
const YEAR_HAS_DAYS = (EVEN_MONTH_HAS_DAYS + ODD_MONTH_HAS_DAYS) * Math.floor(YEAR_HAS_MONTHES / 2)
  + (YEAR_HAS_MONTHES % 2) * EVEN_MONTH_HAS_DAYS;
const LEAP = - 1;

const GENESIS_DAY = new CDate(1, 3, 1870);
GENESIS_DAY._dayOfWeek = 1;

const preGenesisMonth = GENESIS_DAY.month - 1;

const DAYS_FROM_ZERO_TO_GENESIS =
  Math.floor(
    GENESIS_DAY.day - 1
    + Math.floor(preGenesisMonth / 2) * (EVEN_MONTH_HAS_DAYS + ODD_MONTH_HAS_DAYS)
    + (preGenesisMonth % 2) * EVEN_MONTH_HAS_DAYS
  );

const ZERO_DAY = new CDate(1, 1, 1870);

ZERO_DAY._dayOfWeek = _getDayOfWeekFromDays(DAYS_FROM_ZERO_TO_GENESIS + GENESIS_DAY.dayOfWeek);


function _getElapsedDaysTillZero(cdate) {
  const elapsedYears = cdate.year - ZERO_DAY.year;
  const leaps = Math.floor(elapsedYears / 5) + elapsedYears ? ZERO_DAY.leap() : 0;
  const elapsedMonths = cdate.month - ZERO_DAY.month;
  const elapsedDays = cdate.day - ZERO_DAY.day;
  return (
    elapsedYears * YEAR_HAS_DAYS + leaps
    + Math.floor(elapsedMonths / 2) * (EVEN_MONTH_HAS_DAYS + ODD_MONTH_HAS_DAYS) +
    +(elapsedMonths % 2) * EVEN_MONTH_HAS_DAYS
    + elapsedDays
  );
}



module.exports = {CDate, daysOfWeek};