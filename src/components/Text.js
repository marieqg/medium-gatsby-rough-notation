import React from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import styled from "styled-components"

const Text = () => {
  const multiline = false
  const color = "purple"
  const animationDelay = "1000"
  const animationDuration = 1000

  return (
    <MainDiv>
      <RoughNotationGroup show={true}>
        <RoughNotation
          type="highlight"
          color={"yellow"}
          multiline={multiline}
          animationDelay={animationDelay}
          animationDuration={animationDuration}
        >
          Lorem ipsum dolor sit amet
        </RoughNotation>
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <RoughNotation
          type="bracket"
          color={"darkblue"}
          animationDelay={2000}
          animationDuration={animationDuration}
          brackets={["left", "right"]}
        >
          Ut enim ad minim veniam,
        </RoughNotation>
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in
        <RoughNotation
          type="underline"
          color={"red"}
          animationDelay={animationDelay}
          animationDuration={2000}
        >
          {" "}
          culpa qui officia deserunt
        </RoughNotation>{" "}
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa{" "}
        <RoughNotation
          type="box"
          color={"green"}
          multiline={false}
          animationDelay={3000}
          animationDuration={animationDuration}
          iterations={"6"}
        >
          quae ab illo inventore veritatis
        </RoughNotation>{" "}
        et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas{" "}
        <RoughNotation
          type="crossed-off"
          color={"black"}
          animationDelay={animationDelay}
          animationDuration={3000}
        >
          sit aspernatur aut odit aut fugit, sed qui
        </RoughNotation>
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        Neque porro quisquam est,
        <RoughNotation
          type="strike-through"
          color={color}
          animationDelay={4000}
          animationDuration={animationDuration}
        >
          qui dolorem ipsum quia dolor sit amet,
        </RoughNotation>
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi
        <RoughNotation
          type="circle"
          color={"lightblue"}
          multiline={true}
          animationDelay={animationDelay}
          animationDuration={4000}
        >
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?"
        </RoughNotation>
      </RoughNotationGroup>
      <RoughNotationDiv></RoughNotationDiv>
    </MainDiv>
  )
}

export default Text

const MainDiv = styled.div``

const RoughNotationDiv = styled.div`
  display: flex;
  flex-direction: row;
`
