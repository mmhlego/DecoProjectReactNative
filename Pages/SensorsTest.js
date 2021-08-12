import React, { useState } from "react";
import { DeviceMotion } from "expo-sensors";

export default function SensorsTest() {
  const [data, setData] = useState({});

  DeviceMotion.addListener((devicemotionData) => {
    setData(devicemotionData.rotation);
    console.log(data);
  });

  return <div>{1}</div>;
}
