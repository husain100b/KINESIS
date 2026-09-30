import { useEffect, useState } from 'react';

interface CityTime {
  city: string;
  tz: string;
  code: string;
}

const CITIES: CityTime[] = [
  { city: 'NYC', tz: 'America/New_York', code: 'EST' },
  { city: 'PARIS', tz: 'Europe/Paris', code: 'CET' },
  { city: 'TOKYO', tz: 'Asia/Tokyo', code: 'JST' },
];

export function WorldClocks() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      CITIES.forEach(({ city, tz }) => {
        try {
          const formatted = new Intl.DateTimeFormat('en-GB', {
            timeZone: tz,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(new Date());
          newTimes[city] = formatted;
        } catch {
          newTimes[city] = '--:--:--';
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden 2xl:flex items-center gap-6 font-mono text-[11px] text-[#9A9AA8] shrink-0">
      {CITIES.map(({ city, code }) => (
        <div key={city} className="flex items-center gap-2">
          <span className="text-[#F4F4F0] font-semibold">{city}</span>
          <span className="text-[#626270]">[{code}]</span>
          <span className="text-[#D8FF38] font-mono">{times[city] || '12:00:00'}</span>
        </div>
      ))}
    </div>
  );
}
