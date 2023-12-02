import { useForm } from "react-hook-form";
export default function FormInit(intiObj:any,formInterface:any){
 
    return useForm<typeof formInterface>({
        mode: "onBlur",
        defaultValues: intiObj,
      });
}