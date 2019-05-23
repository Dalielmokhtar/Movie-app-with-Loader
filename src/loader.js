import React from 'react'

export default function WithLoading(component) {
      return function WihLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return (<Component {...props} />);
        return (<p>Be Hold, fetching data may take some time :)</p>);
      }
    }

