import React, { useState } from 'react';
import Icon from '../../../components/AppIcon.jsx';
import Button from '../../../components/ui/Button.jsx';

const AvailabilityCalendar = ({ onSlotSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(0);

  // Mock availability data
  const availableSlots = {
    '2025-01-20': ['10:00 AM', '2:00 PM', '4:00 PM'],
    '2025-01-21': ['9:00 AM', '11:00 AM', '3:00 PM'],
    '2025-01-22': ['10:00 AM', '1:00 PM'],
    '2025-01-23': ['9:00 AM', '2:00 PM', '4:00 PM'],
    '2025-01-24': ['11:00 AM', '3:00 PM'],
    '2025-01-27': ['10:00 AM', '2:00 PM', '4:00 PM'],
    '2025-01-28': ['9:00 AM', '1:00 PM', '3:00 PM'],
    '2025-01-29': ['10:00 AM', '2:00 PM'],
    '2025-01-30': ['9:00 AM', '11:00 AM', '4:00 PM'],
    '2025-01-31': ['10:00 AM', '3:00 PM']
  };

  const getWeekDates = (weekOffset = 0) => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek?.setDate(today?.getDate() - today?.getDay() + 1 + (weekOffset * 7)); // Start from Monday
    
    const dates = [];
    for (let i = 0; i < 5; i++) { // Monday to Friday
      const date = new Date(startOfWeek);
      date?.setDate(startOfWeek?.getDate() + i);
      dates?.push(date);
    }
    return dates;
  };

  const formatDate = (date) => {
    return date?.toISOString()?.split('T')?.[0];
  };

  const formatDisplayDate = (date) => {
    return date?.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const weekDates = getWeekDates(currentWeek);

  const handleDateSelect = (date) => {
    const dateStr = formatDate(date);
    setSelectedDate(dateStr);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (onSlotSelect) {
      onSlotSelect({
        date: selectedDate,
        time: time,
        datetime: `${selectedDate} ${time}`
      });
    }
  };

  const nextWeek = () => {
    setCurrentWeek(prev => prev + 1);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const prevWeek = () => {
    if (currentWeek > 0) {
      setCurrentWeek(prev => prev - 1);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-success/10 rounded-lg">
            <Icon name="Calendar" size={20} color={`rgb(var(--color-success))`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Schedule Consultation</h3>
            <p className="text-sm text-muted-foreground">30-minute strategy session</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Clock" size={16} />
          <span>EST/EDT</span>
        </div>
      </div>
      {/* Week Navigation */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevWeek}
          disabled={currentWeek === 0}
          iconName="ChevronLeft"
          iconPosition="left"
        >
          Previous
        </Button>
        <span className="text-sm font-medium text-foreground">
          {weekDates?.[0]?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={nextWeek}
          iconName="ChevronRight"
          iconPosition="right"
        >
          Next
        </Button>
      </div>
      {/* Date Selection */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {weekDates?.map((date, index) => {
          const dateStr = formatDate(date);
          const hasSlots = availableSlots?.[dateStr] && availableSlots?.[dateStr]?.length > 0;
          const isSelected = selectedDate === dateStr;
          const isPast = date < new Date()?.setHours(0, 0, 0, 0);

          return (
            <button
              key={index}
              onClick={() => hasSlots && !isPast && handleDateSelect(date)}
              disabled={!hasSlots || isPast}
              className={`p-3 rounded-lg text-center transition-all duration-200 ${
                isSelected
                  ? 'bg-success text-success-foreground shadow-md'
                  : hasSlots && !isPast
                  ? 'bg-muted hover:bg-success/10 hover:border-success border border-transparent' :'bg-muted/50 text-muted-foreground cursor-not-allowed'
              }`}
            >
              <div className="text-xs font-medium">
                {date?.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="text-sm font-semibold mt-1">
                {date?.getDate()}
              </div>
              {hasSlots && !isPast && (
                <div className="text-xs mt-1 opacity-75">
                  {availableSlots?.[dateStr]?.length} slots
                </div>
              )}
            </button>
          );
        })}
      </div>
      {/* Time Selection */}
      {selectedDate && availableSlots?.[selectedDate] && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">
            Available times for {formatDisplayDate(new Date(selectedDate))}
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {availableSlots?.[selectedDate]?.map((time, index) => (
              <button
                key={index}
                onClick={() => handleTimeSelect(time)}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedTime === time
                    ? 'bg-success text-success-foreground shadow-md'
                    : 'bg-muted hover:bg-success/10 hover:border-success border border-transparent text-foreground'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Selected Slot Confirmation */}
      {selectedDate && selectedTime && (
        <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
          <div className="flex items-center space-x-3">
            <Icon name="CheckCircle" size={20} color={`rgb(var(--color-success))`} />
            <div>
              <p className="text-sm font-medium text-foreground">
                Selected: {formatDisplayDate(new Date(selectedDate))} at {selectedTime}
              </p>
              <p className="text-xs text-muted-foreground">
                You'll receive a calendar invite after form submission
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Calendar Legend */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-muted rounded"></div>
              <span>No slots</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Info" size={14} />
            <span>All times in Eastern Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;