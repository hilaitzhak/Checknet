import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useDataFetching } from "../services/dataService";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import linkedin from "../icons/icons8-linkedin-logo-50.png";
import facebook from "../icons/icons8-facebook-logo-50.png";
import instagram from "../icons/icons8-instagram-logo-50.png";
import youtube from "../icons/icons8-youtube-logo-50.png";
import twitter from "../icons/icons8-twitter-logo-50.png";
import person from "../icons/icons8-person-24.png";
import education from "../icons/icons8-education-30.png";


function PrivateDetails() {

    const Private_details = useDataFetching('privateDetails.json');

    return (
        <Flex
            flexDirection="column"
            width="23%"
            right="30px"
            height="750px"
            background="white"
            display="flex"
            alignItems="center"
            borderRadius="15px"
            boxShadow='xl'
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                padding={4}
            >
                <Image
                    borderRadius='full'
                    boxSize='100px'
                    src={Private_details.pic}
                    alt='batman_image'
                />
                <Text fontWeight="bold" fontSize="20px">
                    {Private_details.name}
                </Text>
                <Text fontSize="13px" mb={1}>
                    {Private_details.profession}
                </Text>
                <Text fontSize="13px" mb={1}>
                    {Private_details.role}
                </Text>
                <Text color="grey" fontSize="11px">
                    {`ת.ז. ${Private_details.id} | ${Private_details.location}`}
                </Text>
            </Box>
            <Box
                width="88%"
                height="10%"
                background="white"
                display="flex"
                justifyContent="center"
                textAlign="right"
                borderRadius="15px"
                mb={4}
                flexDirection="column"
                boxShadow='xs'
                padding={4}
            >
            <Text fontSize="12px" mb={2}>
                {`מטרת הדוח: ${Private_details.purposeOfReport}`}
            </Text>
            <Text fontSize="12px">
                {`מיקוד בדיקה: ${Private_details.FocusTest}`}
            </Text>
            </Box>
            <Box
                width="88%"
                height="57%"
                background="white"
                flexDirection="column"
                display="flex"
                textAlign="right"
                borderRadius="15px"
                boxShadow='xs'
                padding={5}
            >
                {Private_details.email && Private_details.email.map((e: string, i: number) => (
                    <Box key={i} mb={3} flexDirection="row" display="flex" alignItems="center" dir="rtl">
                        <EmailIcon boxSize="10px"/>
                        <Text fontSize="12px" mr={2} >
                            {e}
                        </Text>
                    </Box>
                ))}
                {Private_details.phoneNumbers && Private_details.phoneNumbers.map((p: any, i: number) => (
                    <Box key={i} mb={3} flexDirection="row" display="flex" alignItems="center"  dir="rtl">
                        <PhoneIcon boxSize="10px" ml={2}/>
                        <Text fontSize="12px" dir="ltr">
                            {p}
                        </Text>
                    </Box>
                ))}
                <Divider />
                <Box flexDirection="row" mb={3} mt={3} display="flex" alignItems="center" dir="rtl">
                    <Image src={linkedin} alt="linkedin-icon" boxSize="13px" ml={2}/>
                    <Text fontSize="12px">{Private_details?.socialMedia?.[0]}</Text>
                </Box>
                <Box flexDirection="row" mb={3} display="flex" alignItems="center" dir="rtl">
                    <Image src={facebook} alt="facebook-icon" boxSize="13px" ml={2}/>
                    <Text fontSize="12px">{Private_details?.socialMedia?.[1]}</Text>
                </Box>
                <Box flexDirection="row" mb={3} display="flex" alignItems="center" dir="rtl">
                    <Image src={instagram} alt="instagram-icon" boxSize="13px" ml={2}/>
                    <Text fontSize="12px">{Private_details?.socialMedia?.[2]}</Text>
                </Box>
                <Box flexDirection="row" mb={3} display="flex" alignItems="center" dir="rtl">
                    <Image src={youtube} alt="youtube-icon" boxSize="13px" ml={2}/>
                    <Text fontSize="12px">{Private_details?.socialMedia?.[3]}</Text>
                </Box>
                <Box flexDirection="row" mb={3} display="flex" alignItems="center" dir="rtl">
                    <Image src={twitter} alt="twitter-icon" boxSize="13px" ml={2}/>
                    <Text fontSize="12px">{Private_details?.socialMedia?.[4]}</Text>
                </Box>
                <Divider />
                <Box mb={3} mt={3} flexDirection="row" display="flex" alignItems="center" dir="rtl">
                    <Image src={person} alt="person-icon" boxSize="13px" ml={2}/>
                    <Text dir="rtl" fontSize="12px">{`כינויים: ${Private_details?.nicknames?.[0]}, ${Private_details?.nicknames?.[1]}, ${Private_details?.nicknames?.[2]}`}</Text>
                </Box>
                <Box flexDirection="row" display="flex" alignItems="center" dir="rtl">
                    <Image src={education} alt="education-icon" boxSize="13px" ml={2}/>
                    <Text fontSize="12px">{`השכלה: ${Private_details?.education}`}</Text>
                </Box>
            </Box>
        </Flex>
    );
}

export default PrivateDetails;
