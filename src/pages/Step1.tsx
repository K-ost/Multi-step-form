import { useForm } from "react-hook-form"
import { useAppDispatch } from "../store/hooks"
import { setStep1 } from "../store/appSlice"
import { useNavigate } from "react-router-dom"
import PageHead from "../components/PageHead"
import FormControl from "../components/FormControl"
import Btn from "../components/Btn"
import FooterBtns from "../components/FooterBtns"

type FormValues = {
  name: string
  email: string
  phone: string
}

const Step1: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  // onSubmit
  const onSubmit = (data: any) => {
    dispatch(setStep1(data))
    navigate('/step2')
  }

  return (
    <div>
      <PageHead title="Personal info" text="Please provide your name, email address and phone number." />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormControl
            label="Name"
            placeholder="Stephen King"
            handler={register("name", { required: 'This field is required', maxLength: 80 })}
            error={errors && errors.name?.message!}
          />

          <FormControl
            label="Email Address"
            placeholder="stephenking@lorem.com"
            handler={register("email", { required: 'This field is required', pattern: { value: /^\S+@\S+$/i, message: 'Email is not valid' } })}
            error={errors && errors.email?.message!}
          />

          <FormControl
            label="Phone Number"
            placeholder="+44 (___) ___-__-__"
            handler={register("phone", { required: 'This field is required' } )}
            error={errors && errors.phone?.message!}
          />
        </div>

        <FooterBtns direction="right">
          <Btn type="submit" name="Next step" color="primary" />
        </FooterBtns>
      </form>
    </div>
  )
}

export default Step1
