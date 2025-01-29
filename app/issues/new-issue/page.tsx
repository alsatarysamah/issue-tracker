'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';


interface issue {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<issue>()
  const router = useRouter()
  const handleFromSubmit = async (data: issue) => {
    try {

      const newIssue = await axios.post("/api/issues", data)
      router.push('/issues')
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)

    }

  }
  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(handleFromSubmit)}>
      <TextField.Root radius="large" placeholder="Title" {...register('title')} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => {
          return <TextArea placeholder='Description'  {...field} />
        }}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
