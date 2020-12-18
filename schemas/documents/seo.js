import React from 'react'

import {PatchEvent, set} from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'

import {
  Tooltip,
  Text,
  Box,
  TextInput,
  Card
} from '@sanity/ui'

const HoverInput = React.forwardRef((props, ref) => {
  const { type, onChange } = props
  return(
    <FormField label={type.title} description={type.description}>
      {type.tipDescription ? 
        <Tooltip
          content={(
            <Box padding={2}>
              <Text>{type.tipDescription}</Text>
            </Box>
          )}
          placement="top"
        >
            <Card>
                <TextInput
                    type="text"
                    ref={ref}
                    placeholder={type.placeholder}
                    value={props.value}
                    onChange={event => {onChange(PatchEvent.from(set(event.target.value)))}}
                /> 
            </Card>
        </Tooltip>
      :
        <Card>
            <TextInput
            type="text"
            ref={ref}
            placeholder={type.placeholder}
            value={props.value}
            onChange={event => {onChange(PatchEvent.from(set(event.target.value)))}}
            /> 
        </Card>
      }
      
    </FormField>
  )

})

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'seoString',
      title: 'Something really important for SEO',
      description: 'Don\'t forget to make it SEO friendly!',
      type: 'string',
      tipDescription: 'Hey! Seriously, make it SEO friendly!',
      inputComponent: HoverInput
    }
  ]
}
