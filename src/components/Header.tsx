import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Menu, MenuButton, Text } from "@chakra-ui/react";
import { useDataFetching } from "../services/dataService";

function Header () {

    const userInfo = useDataFetching('userInfo.json');

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"            
            background="white"
            width="100%"
            padding="15px 40px 15px 40px"
        >
            <Breadcrumb separator='|' color="blue">
                {['יציאה', 'הדוחות שלי', 'הזמנת דוח'].map((link, index) => (
                <BreadcrumbItem key={index}>
                    <BreadcrumbLink href='/'>{link}</BreadcrumbLink>
                </BreadcrumbItem>
                ))}
            </Breadcrumb>

            <Text fontSize="25px">
                CHECKNET
            </Text>
            <Menu>
                <MenuButton 
                    as={Button} 
                    leftIcon={<ChevronDownIcon/>} 
                    background="white"
                    color="blue"
                    fontSize="20px"
                    flexDirection="row"
                    alignItems="center"
                >
                    <Box display="flex" alignItems="center">
                        <Text fontSize="18px" mr={3}>{`שלום ${userInfo.userName}`}</Text>
                        <Avatar size="md" cursor="pointer" name={userInfo.userName}/>
                    </Box>
                </MenuButton>
        </Menu>

        </Box>
    );
}

export default Header;