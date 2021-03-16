import React from 'react';
import GoogleFontLoader from "react-google-font-loader";
import GlobalStyle from "./assets/styles/globalStyles";


const App: React.FC = () => {
    return (
        <div className="App">
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Montserrat',
                        weights: [400, 700],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek', 'latin']}
            />
            <GlobalStyle/>
        </div>
    );
}

export default App;
