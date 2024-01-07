import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";


interface ICardProps {
  $isDragging: boolean
}

const Card = styled.div<ICardProps>`
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    background-color: ${props => props.$isDragging ? "#74b9ff" : props.theme.cardColor};
    box-shadow: ${props => props.$isDragging ? "0px 2px 5px rgba(0,0,0, 0.05)" : "none"};
`

interface IDraggableCardProps {
  toDoId : number,
  toDoText: string,
  index: number
}

function DraggableCard({toDoId, index, toDoText}: IDraggableCardProps) {
  return (
    <Draggable draggableId={toDoId+""} index={index} key={toDoId}>
      {(provided, snapshot) => <Card
        $isDragging={snapshot.isDragging}
        ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>{toDoText}</Card>}
    </Draggable>
  )
}

export default React.memo(DraggableCard)