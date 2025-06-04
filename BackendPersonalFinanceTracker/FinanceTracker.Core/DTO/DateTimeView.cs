using System;

namespace FinanceTracker.Core.DTO
{
    public class DateTimeView
    {
        public DateTimeView(DateTime dateTime)
        {
            Year = dateTime.Year;
            Month = dateTime.Month;
            Day = dateTime.Day;
            Hour = dateTime.Hour;
            Minute = dateTime.Minute;
        }

        public DateTimeView() 
        {
            var dateTime = DateTime.Now;

            Year = dateTime.Year;
            Month = dateTime.Month;
            Day = dateTime.Day;
            Hour = dateTime.Hour;
            Minute = dateTime.Minute;
        }

        /// <summary>
        /// 0-9999
        /// </summary>
        public int Year { get; set; }

        /// <summary>
        /// 1-12
        /// </summary>
        public int Month { get; set; }

        /// <summary>
        /// 1-31
        /// </summary>
        public int Day { get; set; }

        /// <summary>
        /// 0-23
        /// </summary>
        public int Hour { get; set; }

        /// <summary>
        /// 0-59
        /// </summary>
        public int Minute { get; set; }
    }
}
