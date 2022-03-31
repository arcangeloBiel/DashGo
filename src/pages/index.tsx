import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState, formState: { errors }} = useForm();
  console.log('err', errors)

  const handleSignIn: SubmitHandler<SignFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 20));
    close()
    console.log(data);
  
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="email"
          
            {...register("email", {required: 'E-mail obrigatório'})}
          />
          {errors.email && <span>E-mail é obrigatório</span>}
          <Input
            name="password"
            type="password"
            label="senha"
            {...register("password", {required: 'Senha obrigatório'})}
          />
           {errors.password && <span>Senha é obrigatório</span>}
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitted}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
