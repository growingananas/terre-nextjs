import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react'; 

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  date: z.string().min(1, 'Date is required'),
  });

const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const [isSubmitted, setIsSubmitted ] = useState(false);
  const onSubmit = (data, e) => {
    setIsSubmitted(true);
    console.log(data);

    e.target.reset();
    setIsSubmitted(true);
    console.log(data);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
    { isSubmitted && (
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded">
        <p>Your reservation has been successfully sent!</p>
      </div>
      </div>
    )}

    <form onSubmit={handleSubmit(onSubmit)} className='relative flex flex-col space-y-4 text-white'>
      <input 
        type="text" 
        {...register("name")} 
        placeholder="your name"
        className='input'
      />
      {errors.name && <p className='error'>{errors.name.message}</p>}
      
      <input 
        type="number" 
        {...register("phone")} 
        placeholder="your phone number"
        className='input'
      />
      {errors.phone && <p className='error'>{errors.phone.message}</p>}
      
      <input 
        type="date" 
        {...register("date")} 
        placeholder="date"
        className='input'
      />
      {errors.date && <p className='error'>{errors.date.message}</p>}
      
      <button type="submit" className="h-12 w-full border-solid border-2 font-bold border-[#00857A] bg-[#00857A] text-white">
        <span className="lowercase p-3 ">submit</span>
      </button>
    </form>
    </>
  );
};

export default FormComponent;
