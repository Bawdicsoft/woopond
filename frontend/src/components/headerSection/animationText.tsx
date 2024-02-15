import React, { useEffect } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  text: string;
}

const TypedText: React.FC<TypedTextProps> = ({ text }) => {
  useEffect(() => {
    const options = {
      strings: [text],
      typeSpeed: 3, // Adjust the typing speed as needed
    };

    const typed = new Typed('#typed-output', options);

    return () => {
      typed.destroy(); // Clean up Typed instance on component unmount
    };
  }, [text]);

  return <span className='' id="typed-output" />;
};

export default TypedText;