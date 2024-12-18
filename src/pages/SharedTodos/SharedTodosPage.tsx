import React, {useEffect, useState, useContext} from 'react'
import { AppContext } from "../../context/context";
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { Button, Card, CardActionArea, CardActions, CardContent, Stack, Typography } from '@mui/material';
import {TodosContext} from '../../context/todosContext'

// Components
import Empty from '../../components/Empty/Empty';
import SkeletonComponent from '../../components/Skeleton/Skeleton';
import useTodos from '../../hooks/useTodos';

const SharedTodosPage : React.FC = () => {
  const { todoState, sharedTodosLoading, sharedTodosError } = useContext(TodosContext);
  const { getAllSharedTodos } = useTodos();

  useEffect(()=>{
    getAllSharedTodos.refetch();
  }, []);

  useEffect(()=>{
    if (todoState.sharedTodos.length>0){
      console.log('[DEBUG]: shared_todo_state', todoState.sharedTodos)
    }
  }, [todoState.sharedTodos]);

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{ flexWrap: 'wrap' }}
    >
      {sharedTodosLoading && <SkeletonComponent/>}
      {
        !sharedTodosLoading && todoState.sharedTodos.map((todo, index)=>{
          return (
            <Card sx={
                { maxWidth: 345,
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between" 
                }} 
              key={index}
            >
              <CardActionArea onClick={()=>{console.log('premuto ' + todo.id)}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {todo.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {todo.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
                <Button size="small" color="primary" sx={{display:"flex", gap:"0.5em"}}>
                  <AddCommentOutlinedIcon></AddCommentOutlinedIcon>
                    commenta
                  </Button>
              </CardActions>
            </Card>
          );
        })
      }
      {
        (!sharedTodosLoading && !sharedTodosError && todoState.sharedTodos.length===0) && <>
          <Empty text="Nessuna nota condivisa trovata"></Empty>
        </>
      }
      {
        (sharedTodosError ) && <>
          <Empty text="Errore nel recupero delle note condivise"></Empty>
        </>
      }
    </Stack>
  )

}

export default SharedTodosPage
