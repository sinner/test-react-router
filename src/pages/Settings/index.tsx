import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Settings() {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      Settings
      <div>
        Sort by: {searchParams.get('sort')}
      </div>
    </div>
  )
}

export default Settings