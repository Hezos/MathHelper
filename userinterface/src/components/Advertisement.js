import React from 'react';
import AdSense from 'react-adsense';

export function Advertisement(){
//            

    return (
        <div>
            <p>
                Placeholder for applications and advertisement
            </p>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
        />

        </div>        
    );
}

export default Advertisement();