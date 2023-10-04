import "./styles.css";
import { IoIosConstruct } from "react-icons/io";
import { Text, Heading, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack spacing={3} className="flex container">
      <Heading>SaaS Starter Template</Heading>
      <Text className="flex" fontSize="4xl">
        {`Let's start building`}
        <IoIosConstruct />
      </Text>
    </Stack>
  );
};

export default Home;
