// SoundControl.js
import React, { useState } from 'react';

import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";

const SoundControl = () => {
  const [muted, setMuted] = useState(false);

  const toggleSound = () => {
    setMuted(!muted);
    // Aquí puedes implementar la lógica para mutear o activar el sonido en tu aplicación
  };

  return (
    <div className='settingsIcon'>
      {muted ? <FaVolumeMute onClick={toggleSound} /> : <FaVolumeUp onClick={toggleSound} />}
    </div>
  );
};

export default SoundControl;
