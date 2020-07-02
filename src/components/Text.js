import React from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import styled from "styled-components"

const Text = () => {
  const text = "Lorem ipsum"
  const multiline = false
  const color = "purple"
  const show = true
  const animationDelay = 1
  const animationDuration = 1000

  return (
    <MainDiv>
      <RoughNotationDiv>
        <StyledDiv>
          <Title> Highlight</Title>
          <p>
            <RoughNotation
              type="highlight"
              show={show}
              color={color}
              multiline={multiline}
              animationDelay={animationDelay}
              animationDuration={animationDuration}
            >
              {text}
            </RoughNotation>
          </p>
        </StyledDiv>
        <StyledDiv>
          <Title> Underline</Title>
          <p>
            <RoughNotation
              type="underline"
              show={show}
              color={color}
              multiline={multiline}
              animationDelay={animationDelay}
              animationDuration={animationDuration}
            >
              {text}
            </RoughNotation>
          </p>
        </StyledDiv>
        <StyledDiv>
          <Title> Box</Title>
          <p>
            <RoughNotation
              type="box"
              show={show}
              color={color}
              multiline={multiline}
              animationDelay={animationDelay}
              animationDuration={animationDuration}
            >
              {text}
            </RoughNotation>
          </p>
        </StyledDiv>
        <StyledDiv>
          <Title> Strike Through</Title>
          <p>
            <RoughNotation
              type="strike-through"
              show={show}
              color={color}
              multiline={multiline}
              animationDelay={animationDelay}
              animationDuration={animationDuration}
            >
              {text}
            </RoughNotation>
          </p>
        </StyledDiv>
        <StyledDiv>
          <Title> Crossed Off</Title>
          <p>
            <RoughNotation
              type="crossed-off"
              show={show}
              color={color}
              multiline={multiline}
              animationDelay={animationDelay}
              animationDuration={animationDuration}
            >
              {text}
            </RoughNotation>
          </p>
        </StyledDiv>
        <StyledDiv>
          <Title> Circle</Title>
          <p>
            <RoughNotation
              type="circle"
              show={show}
              color={color}
              multiline={multiline}
              animationDelay={animationDelay}
              animationDuration={animationDuration}
            >
              {text}
            </RoughNotation>
          </p>
        </StyledDiv>
        <StyledDiv>
          <Title> Bracket</Title>
          <p>
            <RoughNotation
              type="bracket"
              show={show}
              color={color}
              multiline={multiline}
              animationDelay={animationDelay}
              animationDuration={animationDuration}
            >
              {text}
            </RoughNotation>
          </p>
        </StyledDiv>
      </RoughNotationDiv>
    </MainDiv>
  )
}

export default Text

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const RoughNotationDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`

const Title = styled.p`
  font-size: 25px;
  color: #663499;
  font-weight: 800;
`

// Form

const FormTitle = styled.p`
  font-size: 20px;
  color: #663499;
  margin: 0px 30px 5px 30px;
  margin-right: 30px;
`

const FormDiv = styled.div`
  widht: 200px;
  height: 300px;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid green;
`
const RatioText = styled.p`
  margin: 0 15px 0 0;
`
