const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const times = {
  days: DAY,
  hours: HOUR,
  minutes: MINUTE,
};

export const intervalToObj = ms => {
  const obj = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  ms = Math.abs(ms);

  Object.keys(times).forEach(k => {
    obj[k] = Math.floor(ms / times[k]);
    ms -= obj[k] * times[k];
  });

  obj.seconds = Math.round(ms / SECOND);

  return obj;
};

// export const intervalToObj = ms => {
//   let minutes = 0;
//   let hours = 0;
//   let days = 0;

//   ms = Math.abs(ms);

//   if (ms >= DAY) {
//     days = Math.floor(ms / DAY);
//     ms -= days * DAY;
//   }

//   if (ms >= HOUR) {
//     hours = Math.floor(ms / HOUR);
//     ms -= hours * HOUR;
//   }

//   if (ms >= MINUTE) {
//     minutes = Math.floor(ms / MINUTE);
//     ms -= minutes * MINUTE;
//   }
//   let seconds = Math.round(ms / SECOND);
//   return {
//     days,
//     hours,
//     minutes,
//     seconds,
//   };
// };
