import { isObject, isString } from "lodash";

  export type KeyValue<K, V> = {
    key : K,
    value : V
  }

  /*----------------------------KEY-VALUE-GENERATOR-----------------------------*/

  export function processData<T>(data : T, fields : KeyValue<string, string>[]) : KeyValue<string, string>[] {

    let tmp : KeyValue<string, string> []= [];

    for(let field of fields){

      let f : any = field.key;
      let key : keyof T = f;

      tmp.push(
        {
          key: field.value,
          value: String(data[key])
        }
      );
    }

    return tmp;

  }


  export function getErrMsgFromRequest<T>(reqMess : string | T) : any{
    if (isObject(reqMess)){

      let message : string = '';

      for (let msg in reqMess){

        let f : any = String(msg);
        let key : keyof T = f;

        let text = String(reqMess[key]);

        if (text !== ''){

          message = message !== '' ? message + '</br>' + text : text;
        }
      }

      return message;

    } else if (isString(reqMess)){

      return reqMess;
    } else {
      return '';
    }
  }