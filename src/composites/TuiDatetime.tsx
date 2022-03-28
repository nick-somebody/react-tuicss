import React, { useEffect, useState } from "react";
import { format } from 'date-fns'

type TuiDatetimeProps = {
  format: string;
}

function TuiDatetime(props: TuiDatetimeProps) {
  const [d, setD] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setD(format(new Date(), props.format))
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="tui-datetime">{d}</span>
  )
}

export default TuiDatetime;