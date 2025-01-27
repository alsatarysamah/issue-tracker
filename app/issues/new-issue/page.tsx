'use client';
import { Button, Flex, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root radius="large" placeholder="Title" />
      <TextArea placeholder='Description' />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
