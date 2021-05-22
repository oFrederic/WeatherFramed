import { Form, Label, Input } from 'components/UI/SearchBar/SearchBar.styles';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchBar: React.FC<{}> = props => {
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    history.replace(`/?city=${inputRef.current!.value}`);
    inputRef.current!.value = '';
  };
  return (
    <Form onSubmit={submitHandler}>
      <Label>Search Different Location</Label>

      <Input ref={inputRef} type="text" placeholder="City Name"></Input>
    </Form>
  );
};
