import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

const APP_ROOT_ID = 'ui-kit-app'

const root = createRoot(document.getElementById(APP_ROOT_ID)!)
root.render(<App/>)