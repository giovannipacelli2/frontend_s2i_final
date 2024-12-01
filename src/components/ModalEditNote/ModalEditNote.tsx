import React, {useCallback, useEffect} from 'react';
import {Box, Modal, Button, FormControl, FormLabel, TextField} from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { editFormI } from '../../pages/MyTodos/MyTodosPage';
import Textarea from '../TextArea/Textarea';
import "./style.scss";

interface ModalProps {
    children?: React.ReactNode;
    title ?: string,
    diplayFooter ?: boolean,
    confirmText ?: string,
    onConfirm ?: (event: FieldValues)=>void,
    defaults ?: editFormI
  }

const defaultProps : ModalProps= {
    children : <></>,
    title : 'Text',
    diplayFooter : true,
    confirmText : 'Conferma',
    onConfirm : (event: FieldValues)=>{},
    defaults: {
      title:'',
      description:'',
      note:'',
    }
}

function useModalEditNote () {

  const theme = useTheme();

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      display:'flex',
      gap:'1em',
      flexDirection:'column',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '70%',
      },
      [theme.breakpoints.up('md')]: {
        width: '60%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '700px',
      },
    };
  
  const elemStyle = {
    //border: '1px solid red',
    width: '100%',
  }
  const bodyContaier = {
    ...elemStyle,
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    gap:'0.5em',
    minHeight: '300px',
    [theme.breakpoints.up('sm')]: {
      minHeight: '300px',
    },
  }
  const buttonContaier = {
    ...elemStyle,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    gap:'1em',
  }

  const formStyle = {
    border: '1px solid red',
  }

    const [open, setOpen] = React.useState(false);
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

    const { control, handleSubmit, setValue } = useForm();

    const ModalComponent = React.memo((props: ModalProps)=>{

      props = {
        ...props,
        children : props.children ?? defaultProps.children,
        title : props.title ?? defaultProps.title,
        diplayFooter : props.diplayFooter ?? defaultProps.diplayFooter,
        confirmText : props.confirmText ?? defaultProps.confirmText,
        defaults : props.defaults ?? defaultProps.defaults,
        onConfirm : props.onConfirm ?? defaultProps.onConfirm,
      }

      useEffect(()=>{
        setValue('title', props.defaults?.title);
        setValue('description', props.defaults?.description);
        setValue('note', props.defaults?.note);
      },[
        props.defaults
      ])

      const handleConfirm = useCallback((event: FieldValues)=>{
        handleClose();

        props.onConfirm && props.onConfirm(event);

        resetForm();

      }, [props, props.onConfirm]);

      const resetForm = ()=>{
        setValue('title',"");
        setValue('description',"");
        setValue('note',"");
      }


        return (
            <div>
              <Modal
                disableAutoFocus={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
              >
                <Box sx={style}>
                  <Box sx={elemStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      {props.title}
                    </Typography>
                  </Box>
                  <Box sx={bodyContaier}>
                  <form 
                    className='modalForm'
                    onSubmit={handleSubmit((e)=>handleConfirm(e))}
                  >
                    <FormControl>
                      <FormLabel htmlFor="title">Titolo</FormLabel>
                      <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type="text"
                            fullWidth
                            variant="outlined"
                          />
                        )}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="description">Descrizione</FormLabel>
                      <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Textarea
                            {...field}
                            sx={{width:"100%", fontSize:'1em'}}
                            minRows={3}
                          />
                        )}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="note">Note</FormLabel>
                      <Controller
                        name="note"
                        control={control}
                        defaultValue=""
                        rules={{ required: false }}
                        render={({ field }) => (
                          <Textarea
                            {...field}
                            sx={{width:"100%", fontSize:'1em'}}
                            minRows={6}
                          />
                        )}
                      />
                    </FormControl>
                    { props.diplayFooter && <Box sx={buttonContaier}>
                        <Button type='submit'>{props.confirmText}</Button>
                    </Box>}
                  </form>
                  </Box>
                </Box>
              </Modal>
            </div>
          );
    })
  
    return {ModalComponent, open, handleOpen, handleClose}
  }

export default useModalEditNote