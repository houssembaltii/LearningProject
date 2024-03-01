import { useField, FieldProps } from "@formiz/core";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
type MyFieldProps<FormattedValue> = FieldProps<string, FormattedValue>;

export const EmailField = <FormattedValue = string,>(
  props: MyFieldProps<FormattedValue>
) => {
  const { value, setValue, isValid, errorMessage } = useField(props);

  return (
    <>
      <Text>Email</Text>
      <Input value={value ?? ""} onChange={(e) => setValue(e.target.value)} />
      {
        !isValid && <p>{errorMessage}</p> // Display error message
      }
    </>
  );
};
export const PasswordField = <FormattedValue = string,>(
  props: MyFieldProps<FormattedValue>
) => {
  const { value, setValue, isValid, errorMessage } = useField(props);
  const [show, setShow] = useState(false);

  return (
    <>
      <Text>Password</Text>
      <InputGroup>
        <Input
          value={value ?? ""}
          onChange={(e) => setValue(e.target.value)}
          type={show ? "text" : "password"}
          size='md'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
        {
          !isValid && <p>{errorMessage}</p> // Display error message
        }
      </InputGroup>
    </>
  );
};
