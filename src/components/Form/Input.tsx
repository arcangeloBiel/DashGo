import {
    Input as ChakraInput,
    InputProps as ChakraInputProps,
    FormLabel,
    FormControl,
  } from "@chakra-ui/react";

  interface Inputprops extends ChakraInputProps {
      name: string;
      label?: string
  }

export function Input({name, label, ...rest }: Inputprops) {
    return(
        <FormControl>
      { !!label && <FormLabel htmlFor={name}>{ label }</FormLabel>}
        <ChakraInput
          id={name}
          name={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="flushed"
          _hover={{
            bgColor: "gray.900",
          }}
          size="lg"
          {...rest}
        />
      </FormControl>
    )
}