import React from 'react'
import Loader from 'react-loader-spinner'

export default function WithLoading(Home) {
    return function WithLoadingComponent({isLoading}){
if (isLoading) return  (<Home />);
return (<div className='sweet-loading'>
<Loader type="Hearts" color="red" height={200} width={200} />
</div>) ;

    }
        
    
}
