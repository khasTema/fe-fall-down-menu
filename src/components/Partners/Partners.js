import React from 'react';
import { ReactComponent as DatabizLogo } from '../../images/client-databiz.svg';
import { ReactComponent as AudiophileLogo } from '../../images/client-audiophile.svg';
import { ReactComponent as MeetLogo } from '../../images/client-meet.svg';
import { ReactComponent as MakerLogo } from '../../images/client-maker.svg';

function Partners() {
  return (
    <div className="__partners-list">
        <a href="/" className="__partner-link">
            <DatabizLogo/>
        </a>
        <a href="/" className="__partner-link">
            <AudiophileLogo/>
        </a>
        <a href="/" className="__partner-link">
            <MeetLogo/>
        </a>
        <a href="/" className="__partner-link">
            <MakerLogo/>
        </a>
    </div>
  )
}

export default Partners