import React from 'react'
import styled from 'styled-components'
import LoadingImage from '../images/Loading.svg'

const Loading = styled.image`
  max-width: 50%,
  background-color: white,
`

const Loader = () => {
  return (
    <div>
      <div className="css-loader">
        <div className="loader-inner line-scale d-flex align-items-center justify-content-center">
          Page Loading, please wait ...
        </div>
      </div>
    </div>
  )
}

export default Loader
