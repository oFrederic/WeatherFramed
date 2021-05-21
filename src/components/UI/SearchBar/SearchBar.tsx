import { Form, Label, Input } from 'components/UI/SearchBar/SearchBar.styles';

export const SearchBar: React.FC<{}> = props => {
  return (
    <Form>
      <Label>Search Different Location</Label>
      <Input type="text" placeholder="City Name"></Input>
    </Form>
  );
};
