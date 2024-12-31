'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun,Moon } from 'lucide-react';

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
	<>
    {theme === 'dark' ? <Sun onClick={() => setTheme('light')} className="hover:cursor-pointer inline"/> : <Moon onClick={() => setTheme('dark')} className="hover:cursor-pointer inline"/>}

    </>
	);
};

export default ThemeSwitcher;