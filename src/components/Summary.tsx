import { Box, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { useDataFetching } from "../services/dataService";

function Summery () {

    const summary = useDataFetching('summary.json');
    
    return (
        <Box
            background="white"
            display="flex"
            padding={4}
            textAlign="right"
            flexDirection="column"
            boxShadow='xl'
            width="45%"
            height="300px"
            borderRadius="15px"
        >
            <Text fontSize="20px" fontWeight="bold" mb={4}>{summary.header}</Text>
            <Text fontSize="12px" mb={6}>{summary.brief}</Text>
            <Text fontSize="12px" mb={4}>:להלן הפירוט של הממצאים העיקריים</Text>
            <Box background="#e8f4ff" borderRadius={5} dir="rtl" fontSize="12px" padding={4}>
                <OrderedList>
                    {summary.Detail?.map((item: any, index: number) => (
                        <ListItem key={index} mb={index === summary.Detail.length - 1 ? 0 : 4}>
                            {item}
                        </ListItem>
                    ))}
                </OrderedList>
            </Box>
        </Box>
    );
}

export default Summery;