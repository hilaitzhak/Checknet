import { Flex } from "@chakra-ui/react";
import Media from "./Media";
import PrivateDetails from "./PrivateDetails";
import Summary from "./Summary";

function SummeryTab () {

    return (
        <Flex
            justifyContent="space-between"
            flexDirection="row"
            width="100%"
        >
            <Media />
            <Summary />
            <PrivateDetails />
        </Flex>
    );
}

export default SummeryTab;