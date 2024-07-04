import React from 'react';

function Title() {
  console.log("Title render");
  return (
    <>
      <div>Title</div>
    </>
  );
}

export default React.memo(Title);
