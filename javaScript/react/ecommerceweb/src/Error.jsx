import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    let error = useRouteError()
    console.log(error)
  return (<>
    <div>This is error component</div>
    <div>{error.data}</div>
    </>
  )
}

export default Error