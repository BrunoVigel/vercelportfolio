import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import * as Switch from '@radix-ui/react-switch';
import styles from './styles.module.scss'

export function SwitchButtonMobile() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function handleClick() {
    console.log(theme)
    if(theme === 'dark') {
      setTheme('light')
      console.log(theme)
    } else if (theme === 'light') {
      console.log(theme)
      setTheme('dark')
    }
  }

    return (
        <>
          <form>
            <div className={styles.SwitchContainer}>
              <label className={styles.Label} htmlFor="airplane-mode">
                Tema: {theme === 'light' ? 'Claro' : 'Escuro'} 
              </label>
              <Switch.Root onCheckedChange={handleClick} checked={theme === 'dark' ? true : false} className={styles.SwitchRoot} id="airplane-mode">
                <Switch.Thumb className={styles.SwitchThumb} />
              </Switch.Root>
            </div>
          </form>
        </>
        
    )
}