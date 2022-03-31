import { Input as ChakraInput, InputProps as ChakraInputProps, FormLabel, FormControl } from "@chakra-ui/react";
import { forwardRef } from "react";

interface Inputprops extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase = ({ name, label, ...rest }: Inputprops, ref) => {
  return (
  
    <FormControl>
      
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
     
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
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
