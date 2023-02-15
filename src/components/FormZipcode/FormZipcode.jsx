import React, { useState } from 'react';
import { Box, Flex } from 'rebass'
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
} from '@rebass/forms';
import axios from 'axios'

const FormZipcode = () => {
  const initialAddress = {
    neighborhood: '',
    publicplace: '',
    neighborhood: ''
  }
  const [ zipcode, setZipcode ] = useState('')
  const [ address, setAddress ] = useState(initialAddress)

  const fetchZipcode = async (zipcode) => {
    const zipcodeResult = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
    const { publicplace, neighborhood, locality } = await zipcodeResult.json()
    setAddress({ publicplace, neighborhood, locality })
  }

  const handleZipcodeField = value => {
    if(value.length === 8) fetchZipcode(value)
    setZipcode(value)
  }

  return (
    <Box as='form' onSubmit={(e) => e.preventDefault()} py={3} width='500px'>
      <Flex mx={-2} mb={3}>
        <Box width={1 / 2} px={2}>
        <Label htmlFor='zipcode'>Zipcode</Label>
          <Input
            id='zipcode'
            name='zipcode'
            placeholder="Zipcode"
            onChange={({ target : { value } }) => handleZipcodeField(value)}
          />
        </Box>
        <Box width={1 / 2} px={2}>
        <Label htmlFor='neighborhood'>Neighborhood</Label>
          <Input
            id='neighborhood'
            name='neighborhood'
            placeholder="neighborhood"
            value={address.neighborhood}
            onChange={({ target : { value } }) => setAddress({...address, neighborhood: value})}
          />
        </Box>
        <Box width={1 / 2} px={2}>
        <Label htmlFor='publicplace'>Publicplace</Label>
          <Input
            id='publicplace'
            name='publicplace'
            placeholder="publicplace"
            value={address.publicplace}
            onChange={({ target : { value } }) => setAddress({...address, publicplace: value})}
          />
        </Box>
        <Box width={1 / 2} px={2}>
        <Label htmlFor='locality'>Locality</Label>
          <Input
            id='locality'
            name='locality'
            placeholder="locality"
            value={address.locality}
            onChange={({ target : { value } }) => setAddress({...address, locality: value})}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default FormZipcode;
