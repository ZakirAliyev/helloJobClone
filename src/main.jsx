import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import {store} from "./services/store.jsx";
import {ThemeProvider} from "./components/ThemeContext/index.jsx";

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
)