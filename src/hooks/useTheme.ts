import { useCallback, useLayoutEffect, useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('light'); 
  
  const onChangeTheme = useCallback(() => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light'; 
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  },[theme]); 

  useLayoutEffect(() => {
    const getTheme = localStorage.getItem('theme'); 
    if(getTheme){
      setTheme(getTheme);
      return ;
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    }
  },[])

  return { theme, onChangeTheme };
}

export default useTheme;