import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import CommonThankYouDialog from '../../../components/CommonThankYouDialog';
import PhoneNumberInput from '../../../components/phoneNumberInput';
import { TextArea } from '../../../components/textArea';
import InputField from '../../../components/inputField';
import { upsertRegisterEvent } from '../../../utils/supabaseQuery/RegisterEventQuery';

const RegisterEventForm = ({ inputFields, buttonText }) => {
  const [openThankYou, setOpenThankYou] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await upsertRegisterEvent(data)
    if (!response.error) setOpenThankYou(true);

  };

  const handleDone = () => {
    setOpenThankYou(false);
    reset();
    router.push(`/events/register-event`);
  };

  const commonInputClass = "w-full p-3 text-lg border border-inputColor rounded";

  return (
    <div className="p-4 font-inter shadow-slate-500 w-[85vw] max-w-screen-md shadow-sm box-border rounded-md lg:ml-20  justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col">
          <div className="w-full">
            <div className="flex flex-col  md:gap-5 lg:gap-20">
              <div className="flex flex-col space-y-4 w-full">
                {inputFields.map((field, index) => (
                  <div key={index}>
                    {field.type === 'textarea' ? (
                      <TextArea
                        name={field.name}
                        register={register}
                        errors={errors}
                        className={`${commonInputClass} h-24 w-[300px]`}
                        placeholder={field.placeholder}
                      />
                    ) : field.type === 'number' ? (
                      <InputField
                      name={field.name}
                      register={register}
                      required={field.required}
                      errors={errors}
                      type={field.type}
                      className={`${commonInputClass} py-4 w-[300px]`}
                      placeholder={field.placeholder}
                      />
                    ) : (
                      <InputField
                        name={field.name}
                        register={register}
                        required={field.required}
                        errors={errors}
                        type={field.type}
                        className={`${commonInputClass} py-4 w-[300px]`}
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start mt-10">
            <button
              type="submit"
              className="text-primary-colour bg-secondary-colour font-semibold py-3 rounded cursor-pointer border-none" style={{width:'20vw',fontSize:'2vw'}}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </form>
      {openThankYou && (
        <CommonThankYouDialog
          open={openThankYou}
          onClose={() => setOpenThankYou(false)}
          topMessage={'Thanks for Registeration'}
          message={'Our executive will contact you shortly'}
          onDone={handleDone}
        />
      )}
    </div>
  );
};

export default RegisterEventForm;
