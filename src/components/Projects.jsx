import React from 'react'
import styled from 'styled-components'
import SliderComp from './Slider'

const Projects = () => {
  return (
    <Container>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects


const Container = styled.div `
   width:80%;
   max-width:1280px;
   margin:0 auto;
   padding: 3rem 0;
`

const Slide = styled.div`

`