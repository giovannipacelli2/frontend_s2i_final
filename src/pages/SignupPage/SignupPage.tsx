import React, { useCallback, useContext, useEffect, useState } from 'react'
import AlertComponent, { AlertProps } from '../../components/Alert/Alert';
import useAccount from '../../hooks/useAccount';
import { formObj } from '../../interfaces/FormInterfaces';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Stack, TextField, Typography, useTheme } from '@mui/material';
import Card from '../../components/Card/Card';
import { AccountBodyReq } from '../../api';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routerConfig/routes';
import { getMsgFromObjValues } from '../../library/library';
import { Link } from 'react-router-dom';
import { AlertContext } from '../../context/alertContext';

type formNames = "username" | "name" | "surname" | "email" |"password" | "rePassword";

type formTypes = {
  [key in formNames]: string;
};

const SignupPage = () => {

  const theme = useTheme();
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { control, handleSubmit, setValue, getValues, formState:{errors}, setError } = useForm({defaultValues:{
    username: '',
    name: '',
    surname: '',
    email: '',
    password:'',
    rePassword:'',
  }});

//alerts
  const { setAlertType, openAlert } = useContext(AlertContext);

  const { createAccount } = useAccount()

  const formObj : formObj<formNames, formTypes>[] = [
    {
      name:'username',
      label:'Username',
      type:'text',
      rules:{required:'Il campo è obbligatorio'}
    },
    {
      name:'name',
      label:'Nome',
      type:'text',
      rules:{required:'Il campo è obbligatorio'}
    },
    {
      name:'surname',
      label:'Cognome',
      type:'text',
      rules:{required:'Il campo è obbligatorio'}
    },
    {
      name:'email',
      label:'Email',
      type:'email',
      rules:{required:'Il campo è obbligatorio'}
    },
    {
      name:'password',
      label:'Password',
      type:'password',
      rules:{required:'Il campo è obbligatorio'}
    },
    {
      name:'rePassword',
      label:'Ripeti Password',
      type:'password',
      rules:{required:'Il campo è obbligatorio'}
    }
  ];

  
  useEffect(()=>{
    if (createAccount.data?.status){
  
      if(createAccount.data?.status <= 201){
        
        setAlertType({
          title:'Successo',
          subtitle: 'Account creato con successo',
          type: 'success'
        });

        navigate(Routes.LOGIN);
      } else {
        
        let serverMsg = getMsgFromObjValues(createAccount.data.data.message)

        let msg = serverMsg ?? 'Non è stato possibile creare l\'account';

        setAlertType({
          title:'Errore',
          subtitle: msg,
          type: 'error'
        })

        setIsSubmitted(false);
      }
      openAlert();
    }
  }, [createAccount.data?.status])

  const handleConfirm = useCallback((event: FieldValues)=>{

    if (event.password !== event.rePassword){

      setError('rePassword', {
        type: 'validate',
        message: 'Le password non coincidono'
      });

      return;
    }

    for(let field in event){
      if(!event[field]){
        delete event[field];
      }
    }
    delete event['rePassword'];

    let body : AccountBodyReq = {
      ...event
    }

    setIsSubmitted(true);

    createAccount.mutate(body);

  },[]);

  return (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      direction='column'
      justifyContent={{ xs: 'center' }}
      alignItems={{ xs: 'center', sm: 'center' }}
      sx={{ 
        flexWrap: 'wrap', 
        padding:'2em 0',
        height:{ xs: '100%'},
      }}
    >
      <Card sx={{
        height:'max-content',
        width:'95%',
      }}>
        <form 
          style={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            gap:'1em',
            height:'auto',
          }}
          onSubmit={handleSubmit((e)=>handleConfirm(e))}
        >
          <Stack
            //spacing={{ xs: 2, sm:'inherit'}}
            direction={{ xs: 'column' }}
            justifyContent={{ xs: 'flex-start' }}
            alignItems={{ xs: 'center'}}
            sx={{ 
              flexWrap: 'wrap', 
              rowGap: { xs: '1em' },
            }}
            width={{ xs: '100%'}}
          >
            {
              formObj.map((formElem, index)=>{
                return (
                  <FormControl 
                    key={index}
                    sx={{
                      width: {xs:'100%'},
                      marginLeft: {xs:'0'},
                      display:'flex',
                      flexDirection:{xs:'column'},
                      gap:{xs:'0'},
                    }}
                  >
                    <FormLabel
                      htmlFor={formElem.name}
                      sx={{
                        width:{xs:'100%', md:'10em'},
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      {formElem.label}
                    </FormLabel>

                    <Controller
                      name={formElem.name}
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id={field.name}
                          type={formElem.type}
                          fullWidth
                          autoComplete='off'
                          size='small'
                          variant="outlined"
                          color="primary"
                          error={!!errors[formElem.name]}
                          helperText={errors[formElem.name]?.message}
                        />
                      )}
                      rules={formElem.rules}
                    />
                </FormControl>);
              })
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitted}
            >
              Sign up
            </Button>
            <Typography variant="body1" component="h6">
              oppure vai al <Link to={Routes.LOGIN} style={{ color:theme.palette.primary.main }}>login</Link>
            </Typography>
          </Stack>

        </form>

      </Card>
    </Stack>
  )
}

export default SignupPage
