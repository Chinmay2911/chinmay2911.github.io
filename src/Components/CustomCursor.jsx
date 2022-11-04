import React from 'react'
// import '../index.css';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function Cursor(){

return(
    <CustomCursor
      // targets={['.link', '.your-css-selector']}
      customClass='app-cursor'
      dimensions={20}
      fill='#0ea5e9'
      smoothness={{
        movement: 0.2,
        scale: 0.1,
        opacity: 1,
      }}
      targetOpacity={1}
    />
)
}

export default Cursor;