using FinanceTracker.Core.DTO;

namespace FinanceTracker.Core.Extensions
{
    public static class DateTimeExtension
    {
        public static DateTime ConvertToDateTime(this DateTimeView dateTimeView)
        {
            return new DateTime(dateTimeView.Year, dateTimeView.Month, dateTimeView.Day, dateTimeView.Hour, dateTimeView.Minute, 0);
        }
    }
}
