import { useEffect, useState } from "react";
import { format } from 'date-fns'

interface TuiDatetimeProps {
  format: string;
}

function TuiDatetime(props: TuiDatetimeProps) {
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDateString(format(new Date(), props.format))
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="tui-datetime">{dateString}</span>
  )
}

export default TuiDatetime;